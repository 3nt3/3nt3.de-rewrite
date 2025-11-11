package blog

import (
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/charmbracelet/log"
	"github.com/karrick/godirwalk"
	"github.com/radovskyb/watcher"
)

func WatchFiles(dirname string) {
	w := watcher.New()

	r := regexp.MustCompile(`\.md$`)
	w.AddFilterHook(watcher.RegexFilterHook(r, false))
	w.FilterOps(watcher.Move, watcher.Rename, watcher.Create, watcher.Write, watcher.Remove)

	if err := w.AddRecursive(dirname); err != nil {
		log.Fatalf("Failed to add recursive watch: %v", err)
	}

	log.Infof("Watching directory: %s", dirname)

	go func() {
		for {
			select {
			case event := <-w.Event:
				log.Debugf("File changed: %s, Event: %s", event.Path, event.Op)
				handleFile(event.Path)

			case err := <-w.Error:
				log.Fatal(err)
			case <-w.Closed:
				log.Info("Watcher closed")
				return
			}
		}
	}()

	// Start the watching process - it'll check for changes every 100ms.
	if err := w.Start(time.Millisecond * 100); err != nil {
		log.Fatalf("Failed to start watcher: %v", err)
	}
}

func handleFile(path string) error {
	withoutMd := strings.TrimSuffix(string(path), ".md")

	// check if file was removed
	if _, err := os.Stat(withoutMd + ".html"); err != nil && !os.IsNotExist(err) {
		log.Debugf("File removed: %s", path)
		log.Infof("Removing HTML file: %s.html", withoutMd)

		if err := os.Remove(withoutMd + ".html"); err != nil {
			log.Errorf("Failed to remove HTML file: %v", err)
			return err
		}
		return nil
	}

	log.Infof("Generating HTML for: %s", path)
	html, err := generateHTML(string(path))
	if err != nil {
		log.Errorf("Failed to generate HTML for %s: %v", path, err)
		return err
	}

	log.Infof("Writing HTML to: %s.html", withoutMd)
	if err := os.WriteFile(withoutMd+".html", []byte(html), 0644); err != nil {
		log.Errorf("Failed to write HTML file: %v", err)
		return err
	}

	return nil
}

func GenerateHTMLForExistingPosts(dirname string) error {
	err := godirwalk.Walk(dirname, &godirwalk.Options{
		FollowSymbolicLinks: true,
		Callback: func(osPathname string, de *godirwalk.Dirent) error {
			log.Debug("%s %s\n", de.ModeType(), osPathname)

			if !(de.IsRegular() || de.IsSymlink()) || !strings.HasSuffix(osPathname, ".md") {
				log.Debugf("Skipping non-regular file or non-markdown file: %s", osPathname)
				return nil
			}

			return handleFile(osPathname)
		},
	})

	return err
}

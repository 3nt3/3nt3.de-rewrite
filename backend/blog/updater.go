package blog

import (
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/charmbracelet/log"
	"github.com/radovskyb/watcher"
)

func WatchFiles() {
	w := watcher.New()

	r := regexp.MustCompile(`\.md$`)
	w.AddFilterHook(watcher.RegexFilterHook(r, false))

	if err := w.AddRecursive("./posts"); err != nil {
		log.Fatalf("Failed to add recursive watch: %v", err)
	}

	go func() {
		for {
			select {
			case event := <-w.Event:
				log.Debugf("File changed: %s, Event: %s", event.Path, event.Op)

				withoutMd := strings.TrimSuffix(string(event.Path), ".md")

				if event.Op == watcher.Remove {
					log.Debugf("File removed: %s", event.Path)
					log.Infof("Removing HTML file: %s.html", withoutMd)

					if err := os.Remove(withoutMd + ".html"); err != nil {
						log.Errorf("Failed to remove HTML file: %v", err)
					}

					continue
				}

				log.Infof("Generating HTML for: %s", event.Path)
				html, err := generateHTML(string(event.Path))
				if err != nil {
					log.Errorf("Failed to generate HTML for %s: %v", event.Path, err)
					continue
				}

				log.Infof("Writing HTML to: %s.html", withoutMd)
				if err := os.WriteFile(withoutMd+".html", []byte(html), 0644); err != nil {
					log.Errorf("Failed to write HTML file: %v", err)
					continue
				}

			case err := <-w.Error:
				log.Fatal(err)
			case <-w.Closed:
				return
			}
		}
	}()


	// Start the watching process - it'll check for changes every 100ms.
	if err := w.Start(time.Millisecond * 1000); err != nil {
		log.Fatalf("Failed to start watcher: %v", err)
	}
}

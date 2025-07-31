package blog

import (
	"os"
	"regexp"
	"strings"

	"github.com/charmbracelet/log"
	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"
	"gopkg.in/yaml.v3"
)

func generateHTML(path string) (string, error) {
	// get markdown content from file
	md, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}

	// parse yaml front matter
	frontMatter, content := extractFrontMatter(string(md))

	var data map[string]any
	err = yaml.Unmarshal([]byte(frontMatter), &data)
	if err != nil {
		log.Fatal(err)
	}

	log.Debug("Parsed front matter:", data)

	// create markdown parser with extensions
	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse([]byte(content))

	// create HTML renderer with extensions
	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)

	return string(markdown.Render(doc, renderer)), nil
}

// extractFrontMatter returns the front matter and the rest of the document.
func extractFrontMatter(input string) (meta string, content string) {
	if strings.HasPrefix(input, "---") {
		re := regexp.MustCompile(`(?s)^---\s*\n(.*?)\n---\s*\n(.*)$`)
		matches := re.FindStringSubmatch(input)
		if len(matches) == 3 {
			return matches[1], matches[2]
		}
	}
	return "", input
}

type Post struct {
	Title string   `yaml:"title" json:"title"`
	Date  string   `yaml:"date" json:"date"`
	Tags  []string `yaml:"tags" json:"tags"`
	HTML  string   `json:"html"`
}

func GetParsedPost(path string) (Post, error) {
	f, err := os.ReadFile(path)
	if err != nil {
		return Post{}, err
	}

	meta, _ := extractFrontMatter(string(f))
	var post Post
	if err := yaml.Unmarshal([]byte(meta), &post); err != nil {
		log.Errorf("Failed to parse front matter: %v", err)
		return Post{}, err
	}

	b, err := os.ReadFile(strings.TrimSuffix(path, ".md") + ".html")
	post.HTML = string(b)

	return post, nil

}

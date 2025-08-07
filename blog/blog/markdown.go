package blog

import (
	"os"
	"regexp"
	"strings"

	"github.com/charmbracelet/log"
	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/ast"
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
	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock | parser.Footnotes | parser.Tables
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse([]byte(content))

	doc = rewriteLinks(doc)

	// print ast
	ast.Print(os.Stdout, doc)

	// create HTML renderer with extensions
	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)

	return string(markdown.Render(doc, renderer)), nil
}

func rewriteLinks(doc ast.Node) ast.Node {
	// Traverse the AST and rewrite links
	ast.WalkFunc(doc, func(node ast.Node, entering bool) ast.WalkStatus {
		if img, ok := node.(*ast.Image); ok && entering {
			attr := img.Attribute
			if attr == nil {
				attr = &ast.Attribute{}
			}

			// check if destination is not linking to external resource
			if strings.HasPrefix(string(img.Destination), "http://") || strings.HasPrefix(string(img.Destination), "https://") {
				return ast.GoToNext
			}

			// if destination is relative, rewrite it to include /blog
			img.Destination = []byte("/blog" + string(img.Destination))

			// TODO: might be duplicate
			attr.Classes = append(attr.Classes, []byte("blog-img"))
			img.Attribute = attr
		}

		// TOOD: rewrite links

		return ast.GoToNext
	})

	return doc
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

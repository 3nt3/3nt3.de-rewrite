package blog

import (
	"fmt"
	"io"
	"os"
	"regexp"
	"strings"

	"github.com/alecthomas/chroma"
	"github.com/alecthomas/chroma/formatters/html"
	"github.com/alecthomas/chroma/lexers"
	"github.com/alecthomas/chroma/styles"
	"github.com/charmbracelet/log"
	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/ast"
	"github.com/gomarkdown/markdown/parser"
	"gopkg.in/yaml.v3"

	mdhtml "github.com/gomarkdown/markdown/html"
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

var (
	htmlFormatter  *html.Formatter
	highlightStyle *chroma.Style
)

func init() {
	htmlFormatter = html.New(html.WithClasses(true), html.TabWidth(2))
	if htmlFormatter == nil {
		panic("couldn't create html formatter")
	}
	styleName := "monokailight"
	highlightStyle = styles.Get(styleName)
	if highlightStyle == nil {
		panic(fmt.Sprintf("didn't find style '%s'", styleName))
	}
}

// based on https://github.com/alecthomas/chroma/blob/master/quick/quick.go
func htmlHighlight(w io.Writer, source, lang, defaultLang string) error {
	if lang == "" {
		lang = defaultLang
	}
	l := lexers.Get(lang)
	if l == nil {
		l = lexers.Analyse(source)
	}
	if l == nil {
		l = lexers.Fallback
	}
	l = chroma.Coalesce(l)

	it, err := l.Tokenise(nil, source)
	if err != nil {
		return err
	}
	return htmlFormatter.Format(w, highlightStyle, it)
}

// an actual rendering of Paragraph is more complicated
func renderCode(w io.Writer, codeBlock *ast.CodeBlock, entering bool) {
	defaultLang := ""
	lang := string(codeBlock.Info)
	htmlHighlight(w, string(codeBlock.Literal), lang, defaultLang)
}

func myRenderHook(w io.Writer, node ast.Node, entering bool) (ast.WalkStatus, bool) {
	if code, ok := node.(*ast.CodeBlock); ok {
		renderCode(w, code, entering)
		return ast.GoToNext, true
	}
	return ast.GoToNext, false
}

func newCustomizedRender() *mdhtml.Renderer {
	opts := mdhtml.RendererOptions{
		Flags:          mdhtml.CommonFlags,
		RenderNodeHook: myRenderHook,
	}
	return mdhtml.NewRenderer(opts)
}

var mds = "code block:\n```go\nvar n = 384\n```"

func codeHighlight() {
	md := []byte(mds)

	renderer := newCustomizedRender()
	html := markdown.ToHTML(md, nil, renderer)

	fmt.Printf("--- Markdown:\n%s\n\n--- HTML:\n%s\n", md, html)
}

func main() {
	codeHighlight()
}

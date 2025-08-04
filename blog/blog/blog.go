package blog

import (
	"os"
	"strings"

	"github.com/charmbracelet/log"
	"gopkg.in/yaml.v3"
)

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

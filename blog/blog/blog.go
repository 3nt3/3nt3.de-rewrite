package blog

import (
	"os"
	"regexp"
	"strings"

	"github.com/charmbracelet/log"
	"gopkg.in/yaml.v3"
)

type Post struct {
	Title string   `yaml:"title" json:"title"`
	Date  string   `yaml:"date" json:"date"`
	Tags  []string `yaml:"tags" json:"tags"`
	HTML  string   `json:"html"`
	Slug  string   `json:"slug"`
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

	re := regexp.MustCompile(`.*/?(.*)(\.md)?$`)
	post.Slug = re.ReplaceAllString(path, "$1")

	b, err := os.ReadFile(strings.TrimSuffix(path, ".md") + ".html")
	post.HTML = string(b)

	return post, nil

}

func GetAllPosts() ([]Post, error) {
	var posts []Post
	files, err := os.ReadDir("./posts")
	if err != nil {
		log.Errorf("Failed to read posts directory: %v", err)
		return nil, err
	}

	for _, file := range files {
		if strings.HasSuffix(file.Name(), ".md") {
			post, err := GetParsedPost("./posts/" + file.Name())
			if err != nil {
				log.Errorf("Failed to parse post %s: %v", file.Name(), err)
				continue
			}
			posts = append(posts, post)
		}
	}

	return posts, nil
}

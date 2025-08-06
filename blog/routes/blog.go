package routes

import (
	"3nt3/blog-backend/blog"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/charmbracelet/log"
	"github.com/gin-gonic/gin"
)

// GetBlogPost returns a single blog post by its slug
// If the Accept header contains application/json, it returns the post in JSON format.
// If the Accept header contains text/html, it serves the HTML file directly.
// If the "stripped" query parameter is set to "true", it returns the post without HTML content.
func GetBlogPost(c *gin.Context) {
	slug := c.Param("slug")
	stripped := c.Query("stripped")

	// check if application/json is before text/html in the Accept header
	json := false
	for _, accept := range c.Request.Header["Accept"] {
		if strings.Contains(accept, "text/html") {
			break
		}
		if strings.Contains(accept, "application/json") {
			json = true
			break
		}
	}
	log.Debugf("Request Parameters - Slug: %s, Stripped: %s, JSON: %t", slug, stripped, json)

	log.Infof("Fetching blog post for slug: %s", slug)

	if !json {
		c.File("./posts/" + slug + ".html")
		return
	}

	// FIXME: find better solution to go slug -> file
	p, err := blog.GetParsedPost("./posts/" + slug + ".md")
	if err != nil {
		log.Errorf("Error fetching post: %v", err)
		c.JSON(500, gin.H{"error": "Internal Server Error"})
		return
	}

	if stripped == "true" {
		// strip HTML from content
		p.HTML = ""
	}

	c.JSON(200, p)
}

// GetBlogPosts returns a list of blog posts, optionally filtering using query parameters
//
// Query parameters:
//
//	n: number of posts to return (default 50)
//	year: filter posts by year
//	sort: sort order (TODO)
//	tags: filter posts by tags (TODO)
func GetBlogPosts(c *gin.Context) {
	// TODO: implement pagination correctly (add ?from= or something and ?sort)
	var n int
	const nDefault = 50
	nStr := c.Query("n")
	n, err := strconv.Atoi(nStr)
	if err != nil {
		log.Warnf("Invalid 'n' parameter: %s, defaulting to %d", nStr, nDefault)
		n = nDefault // default vale
	}

	year := c.Query("year")

	posts, err := blog.GetAllPosts()
	if err != nil {
		log.Errorf("Error fetching posts: %v", err)
		c.JSON(500, gin.H{"error": "Internal Server Error"})
		return
	}

	var filteredPosts []blog.Post
	if year != "" {
		log.Infof("Filtering posts for year: %s", year)
	}

	for _, post := range posts {
		if year != "" && !strings.HasPrefix(post.Date, year) {
			continue // skip posts not in the specified year
		}
		filteredPosts = append(filteredPosts, post)
		if len(filteredPosts) >= n {
			break // limit to n posts
		}
	}

	log.Infof("Fetched %d blog posts", len(posts))

	c.JSON(200, posts)
}

func GetBlogPostFile(c *gin.Context) {
	slug := c.Param("slug")
	filename := c.Param("filename")

	// Prevent path traversal via param validation
	if slug == "" || filename == "" || filepath.Base(slug) != slug || filepath.Base(filename) != filename {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid path"})
		return
	}

	// Serve from a known root
	root := http.Dir("./posts")
	filePath := filepath.Join(slug, filename)

	// This ensures filePath is inside root and protects against traversal
	c.FileFromFS(filePath, root)
}

func GetBlogPostCover(c *gin.Context) {
	slug := c.Param("slug")

	// Prevent path traversal via param validation
	if slug == "" || filepath.Base(slug) != slug {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid path"})
		return
	}

	// Allowed image extensions (in order of preference)
	extensions := []string{".webp", ".jpg", ".jpeg", ".png"}

	root := http.Dir("./posts")

	for _, ext := range extensions {
		coverPath := filepath.Join(slug, "cover"+ext)

		// Try to open the file to check if it exists
		f, err := root.Open(coverPath)
		if err == nil {
			defer f.Close()
			// File exists, serve it
			c.FileFromFS(coverPath, root)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Cover image not found"})
}

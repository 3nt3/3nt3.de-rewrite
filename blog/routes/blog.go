package routes

import (
	"3nt3/blog-backend/blog"
	"strings"

	"github.com/charmbracelet/log"
	"github.com/gin-gonic/gin"
)

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

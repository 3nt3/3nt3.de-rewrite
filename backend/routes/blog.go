package routes

import (
	"github.com/charmbracelet/log"
	"github.com/gin-gonic/gin"
)

func GetBlogPost(c *gin.Context)  {
	slug := c.Param("slug")

	log.Infof("Fetching blog post for slug: %s", slug)

	c.File("./posts/" + slug + ".html")
}

package main

import (
	"3nt3/blog-backend/blog"
	"3nt3/blog-backend/routes"
	"os"
	"time"

	"github.com/charmbracelet/log"
	"github.com/joho/godotenv"

	"github.com/gin-gonic/gin"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	log.SetLevel(log.DebugLevel)
	log.SetTimeFormat(time.RFC1123)

	r := gin.New()
	r.Use(ginLoggerMiddleware(), gin.Recovery())

	r.GET("/blog/:slug", routes.GetBlogPost)
	r.GET("/blog", routes.GetBlogPosts)
	r.GET("/blog/:slug/:filename", routes.GetBlogPostFile)
	r.GET("/blog/:slug/cover", routes.GetBlogPostCover)

	// generate HTML for existing markdown files
	log.Info("Generating HTML for existing posts...")

	dirname := os.Getenv("POSTS_DIR")
	if dirname == "" {
		log.Warn("POSTS_DIR environment variable not set, using default 'posts' directory.")
		dirname = "posts"
	}

	if err := blog.GenerateHTMLForExistingPosts(dirname); err != nil {
		log.Fatalf("Failed to generate HTML for existing posts: %v", err)
	}
	log.Info("HTML generation completed successfully.")

	// watch for file changes
	log.Info("Setting up file watcher for blog posts...")
	go blog.WatchFiles(dirname)

	// Start the server on port 8080
	log.Info("Starting server on port 8000...")
	if err := r.Run(":8000"); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

func ginLoggerMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		path := c.Request.URL.Path
		raw := c.Request.URL.RawQuery

		c.Next()

		end := time.Now()
		latency := end.Sub(start)
		status := c.Writer.Status()

		log.Info("Request",
			"status", status,
			"method", c.Request.Method,
			"path", path,
			"query", raw,
			"latency", latency,
			"ip", c.ClientIP(),
			"ua", c.Request.UserAgent(),
		)
	}
}

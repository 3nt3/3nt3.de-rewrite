package main

import (
	"3nt3/blog-backend/blog"
	"3nt3/blog-backend/routes"
	"os"

	"github.com/charmbracelet/log"
	"github.com/joho/godotenv"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	log.SetLevel(log.DebugLevel)

	log.Info("Starting server on port 8080...")

	r.GET("/blog/:slug", routes.GetBlogPost)

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

	log.Info("Setting up file watcher for blog posts...")
	// watch for file changes
	go blog.WatchFiles(dirname)

	// Start the server on port 8080
	if err := r.Run(":8000"); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

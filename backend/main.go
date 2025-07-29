package main

import (
	"3nt3/blog-backend/blog"
	"3nt3/blog-backend/routes"

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

	log.Info("Starting server on port 8080...")

	r.GET("/blog/:slug", routes.GetBlogPost)

	// watch for file changes
	go blog.WatchFiles()

	// Start the server on port 8080
	if err := r.Run(":8000"); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

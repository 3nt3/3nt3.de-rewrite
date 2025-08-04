package db

import "time"

type BlogPost struct {
	ID        int       `db:"id"`
	Slug      string    `db:"slug"`
	Title     string    `db:"title"`
	Content   string    `db:"content"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

type BlogPostHTML struct {
	ID          int       `db:"id"`
	BlogPostID  int       `db:"blog_post_id"`
	HTMLContent string    `db:"html_content"`
	CreatedAt   time.Time `db:"created_at"`
	UpdatedAt   time.Time `db:"updated_at"`
}

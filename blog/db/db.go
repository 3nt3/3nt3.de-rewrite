package db

import "github.com/jmoiron/sqlx"

var DB *sqlx.DB

const schema = `
CREATE TABLE IF NOT EXISTS blog_posts (
	id SERIAL PRIMARY KEY,
	slug VARCHAR(255) UNIQUE NOT NULL,
	title VARCHAR(255) NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`

func GetBlogPostBySlug(slug string) (*BlogPost, error) {
	var post BlogPost
	err := DB.Get(&post, "SELECT * FROM blog_posts WHERE slug = $1", slug)
	if err != nil {
		return nil, err
	}
	return &post, nil
}

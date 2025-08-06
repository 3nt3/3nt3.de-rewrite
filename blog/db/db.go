package db

import "github.com/jmoiron/sqlx"

var DB *sqlx.DB

func GetBlogPostBySlug(slug string) (*BlogPost, error) {
	var post BlogPost
	err := DB.Get(&post, "SELECT * FROM blog_posts WHERE slug = $1", slug)
	if err != nil {
		return nil, err
	}
	return &post, nil
}

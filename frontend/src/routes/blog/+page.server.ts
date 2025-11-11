export const prerender = false;

import type { PageLoad } from "../../$types";

const BACKEND_URL = 'https://3nt3.de/api';

type Post = {
  title: string;
  html: string;
  tags: string[];
  date: string;
};

function fetchPosts(): Promise<Post[]> {
  return fetch(`${BACKEND_URL}/blog?n=5`, { headers: { 'Accept': 'application/json' } })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.map((post: any) => ({
      title: post.title,
      html: post.html,
      tags: post.tags,
      date: post.date,
      slug: post.slug
    })));
}

export async function load({ params }: PageLoad) {
  try {
    const posts = await fetchPosts();
    return {
      posts,
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return {
      error: 'Post not found',
    };
  }
}

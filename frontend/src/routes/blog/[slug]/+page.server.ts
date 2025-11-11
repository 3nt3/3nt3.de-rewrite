export const prerender = false;

import { BACKEND_URL } from "$lib/constants";
import type { PageLoad } from "../../$types";

type Post = {
  title: string;
  html: string;
  tags: string[];
  date: string;
};

function fetchPost(slug: string): Promise<Post> {
  return fetch(`${BACKEND_URL}/blog/${slug}`, { headers: { 'Accept': 'application/json' } })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => ({
      title: data.title,
      html: data.html,
      tags: data.tags,
      date: data.date,
      slug
    }));
}

export async function load({ params }: PageLoad) {
  const slug = params.slug;


  try {
    const post = await fetchPost(slug);
    return {
      post,
      slug,
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return {
      error: 'Post not found',
    };
  }
}

import type { RequestHandler } from "./$types";
import { BACKEND_URL } from "$lib/constants";

export const GET: RequestHandler = async ({ params, fetch }) => {
    const { slug, rest } = params;
    const res = await fetch(`${BACKEND_URL}/blog/${slug}/${rest}`);


    if (!res.ok) {
        return new Response('Post not found', { status: 404 });
    }

    return new Response(res.body, { status: res.status, headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' } });
}


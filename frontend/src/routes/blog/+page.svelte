<script lang="ts">
  import type { PageProps } from "./$types";
  import { BACKEND_URL } from "$lib/constants";

  let { data }: PageProps = $props();

  const { posts } = data;
  console.log(data);
</script>

<main
  class="bg-zinc-950 text-zinc-200 lg:px-40 lg:pt-10 px-8 pt-10 z-10 pb-10 text-lg"
  id="about"
>
  <h1 class="font-sm font-bold text-5xl text-purple-500">RECENT POSTS</h1>
  <p>This is where actual content is supposed to be. WIP.</p>

  <div class="flex gap-4 md:flex-row flex-col mt-4">
    <a href={`/blog/${posts[0].slug}`}>
      <article class="bg-zinc-900 rounded-lg md:flex-2 block">
        <img
          class="rounded-t-lg object-cover h-130 w-full"
          src={`${BACKEND_URL}/blog/${posts[0].slug}/cover`}
          alt="Cover Image"
        />
        <div class="p-4">
          <h2 class="font-sm text-purple-400 text-3xl font-bold">
            {posts[0].title}
          </h2>
          <p class="text-lg">
            {posts[0].date}
            <span>
              {#each posts[0].tags as tag, i}
                <a class="text-purple-400 font-sm" href="#TODO"
                  >#{tag + (i < posts[0].tags.length - 1 ? ", " : "")}</a
                >
              {/each}
            </span>
          </p>
        </div>
      </article>
    </a>
    <div class="flex flex-col md:flex-1">
      {#each posts.slice(1, 3) as post}
        <a href={`/blog/${post.slug}`}>
          <article class="bg-zinc-900 flex-1">
            <img
              class="rounded-t-lg object-cover"
              src={`${BACKEND_URL}/blog/${post.slug}/cover`}
              alt="Cover Image"
            />
            <div class="p-4">
              <h3 class="font-sm font-bold text-2xl text-purple-400">
                {post.title}
              </h3>
              <p>
                {posts[0].date}
                <span>
                  {#each post.tags as tag, i}
                    <a class="text-purple-400 font-sm" href="#TODO"
                      >#{tag + (i < post.tags.length - 1 ? ", " : "")}</a
                    >
                  {/each}
                </span>
              </p>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</main>

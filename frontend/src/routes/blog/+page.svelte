<script lang="ts">
  import type { PageProps } from "./$types";
  import { BACKEND_URL } from "$lib/constants";

  let { data }: PageProps = $props();

  const { posts } = data;
  console.log(data);
</script>

<main
  class="bg-zinc-950 text-zinc-200 lg:px-40 lg:pt-40 px-8 pt-20 z-10 pb-10 text-lg"
  id="about"
>
  <h1 class="font-sm font-bold text-5xl text-purple-500">RECENT POSTS</h1>
  <p>This is where actual content is supposed to be. WIP.</p>

  <div class="flex">
    <article class="bg-zinc-900 rounded-lg p-4">
      <img
        class="rounded-lg mb-4"
        src={`${BACKEND_URL}/blog/${posts[0].slug}/cover`}
        alt="Cover Image"
      />
      <h2 class="text-3xl font-bold">{posts[0].title}</h2>
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
    </article>

    <div class="flex flex-col">
      {#each posts as post}
        <article class="bg-zinc-900">
          <h3>{post.title}</h3>
          <p>
            {post.date}
            <span>
              {#each post.tags as tag, i}
                <a class="text-purple-400 font-sm" href="#TODO"
                  >#{tag + (i < post.tags.length - 1 ? ", " : "")}</a
                >
              {/each}
            </span>
          </p>
        </article>
      {/each}
    </div>
  </div>
</main>

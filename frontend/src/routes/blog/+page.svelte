<script lang="ts">
  import type { PageProps } from "./$types";
  import { BACKEND_URL } from "$lib/constants";

  let { data }: PageProps = $props();
  const { posts } = data;

  const postsByYear = posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, typeof data.posts>,
  );

  console.log(data);
</script>

<div
  class="bg-zinc-950 text-zinc-200 lg:px-40 lg:pt-10 px-8 pt-10 z-10 pb-10 text-lg min-h-[calc(100vh-(var(--spacing)*20))] flex justify-center"
  id="about"
>
  <main class="w-full max-w-[1600px]">
    <h1 class="font-sm font-bold text-5xl text-purple-500">RECENT POSTS</h1>
    <p>In chronological order. WIP.</p>

    {#each Object.keys(postsByYear) as key}
      <h2 class="font-sm font-bold text-3xl text-purple-400 mt-10 mb-4">
        {key} [{postsByYear[key].length}]
      </h2>
      {#each postsByYear[key] as post}
        <article
          class="bg-zinc-900 flex flex-col md:flex-row rounded-r-lg items-start md:h-32"
        >
          <img
            class="rounded-l-lg md:w-64 w-full object-cover md:h-full h-48"
            src={`${BACKEND_URL}/blog/${post.slug}/cover`}
            alt="Cover"
          />
          <div class="p-4 flex justify-center flex-col flex-1 overflow-hidden">
            <a href={`/blog/${post.slug}`}>
              <h3 class="font-sm font-bold text-2xl text-purple-400">
                {post.title}
              </h3>
            </a>
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
          </div>
        </article>
      {/each}
    {/each}
  </main>
</div>

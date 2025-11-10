<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const { post } = data;
</script>

<main
  class="flex flex-col items-center justify-center bg-zinc-950 pb-12 text-zinc-200 min-h-screen"
>
  <img class="w-full h-80 object-cover" src={ post.slug + '/cover'} alt="Cover" />
  <article class="max-w-[650px] w-full flex gap-3 flex-col leading-7 mt-7">
    <div class="flex gap-4">
      <div>
        <h1 class="text-4xl font-sm font-bold">{post.title}</h1>
        <p class="font-sm">
          {post.date}
          <span>
            {#each post.tags as tag, i}
              <a class="text-purple-400" href="#TODO"
                >#{tag + (i < post.tags.length - 1 ? ", " : "")}</a
              >
            {/each}
          </span>
        </p>
      </div>
      <div class="bg-zinc-200 flex-1"></div>
    </div>
    <div id="post-content">
      {@html post.html}
    </div>
  </article>
</main>

<style>
  #post-content :global {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
      border-radius: 0.25rem;
    }
  }
</style>

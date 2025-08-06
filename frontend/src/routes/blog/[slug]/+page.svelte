<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const { post } = data;
</script>

<main class="flex justify-center bg-zinc-950 px-8 py-12 text-zinc-200 h-screen">
  <article class="max-w-[650px] w-full flex gap-3 flex-col">
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
    {@html post.html}
  </article>
</main>

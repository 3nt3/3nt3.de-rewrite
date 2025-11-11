<script lang="ts">
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";

  let { data, content }: PageProps = $props();
  let container;

  const { post } = data;

  onMount(() => {
    // Highlight code blocks after the component is mounted
    const codeBlocks = document.querySelectorAll("#post-content pre code");
    codeBlocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  });
</script>

<!-- head -->
<svelte:head>
  <title>{post.title} | Nia Schlegel</title>
  <meta name="description" content={post.description} />
  <meta property="og:title" content={post.title + " | Nia Schlegel"} />
  <meta property="og:image" content={"https://3nt3.de/blog/" + post.slug + "/cover"} />
  <meta property="og:type" content="article" />
</svelte:head>

<main
  class="flex flex-col items-center justify-center bg-zinc-950 pb-12 text-zinc-200 min-h-screen p-8"
>
  <img
    class="w-full h-80 object-cover"
    src={post.slug + "/cover"}
    alt="Cover"
  />
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
    <div id="post-content" bind:this={container}>
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

    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #c27aff;
      font-family: "Space Mono", monospace;
      font-weight: 600;
    }

    a {
      color: #c27aff;
      text-decoration: underline;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    pre {
      border-radius: 0.5rem;
      font-family: "Fira Code", monospace;

      font-size: 0.8rem;

      line-height: 1.5;
    }

    table {
      background-color: #1e1e1e;
      margin: auto 0;

      border-radius: 0.5rem;
      border: 1px solid #333;

      tr {
        padding: 8px;
        text-align: center;
        border: 1px solid #333;
      }
    }
  }
</style>

<script lang="ts">
  interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  const projects: Project[] = [
  {
    title: "Nia's Portfolio",
    description: "This website! I built it with SvelteKit and TailwindCSS.",
    image: "portfolio.webp",
    link: "https://github.com/3nt3/3nt3.de-rewrite"
  }
  ];

  let index = 0;
</script>

<div class="flex">
{#each projects as p}
  <div class="h-36 w-36" style={`background-image: url('/projects/${p.image}') cover`}></div>
{/each}
</div>

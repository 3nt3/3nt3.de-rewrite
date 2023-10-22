<script lang="ts">
  import MediaQuery from "svelte-media-queries";
  let className: string;
  export { className as class };

  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  async function loadComponent(name: string) {
    return await import(`${name}.svelte`);
  }

  import Fa from "svelte-fa";
  import {
    faC,
    faIcons,
    faLink,
    type IconDefinition,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faReact,
    faNodeJs,
    faNode,
    faGithub,
    faRust,
    faJs,
    faGolang,
    faPython,
    faHtml5,
    faCss3,
  } from "@fortawesome/free-brands-svg-icons";

  interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    icons: string[];
    faIcons: IconDefinition[];
  }
  const projects: Project[] = [
    {
      title: "Nia's Portfolio",
      description: "This website! I built it with SvelteKit and TailwindCSS.",
      image: "portfolio.webp",
      link: "https://github.com/3nt3/3nt3.de-rewrite",
      icons: ["./SvelteLogo", "./TailwindLogo"],
      faIcons: [],
    },
    {
      title: "Gymhaan Tutoring Website",
      description:
        "A full-stack project for my school to help connect students with tutors. Built with React and Next.js",
      image: "tutoring.webp",
      link: "https://nachhilfe.gymhaan.de",
      icons: [],
      faIcons: [faReact, faNodeJs],
    },
    {
      title: "Soccerbot at Bohlebots",
      description:
        "A full-stack project for my school to help connect students with tutors. Built with React and Next.js",
      image: "digital.webp",
      link: "https://github.com/bohlebots-digital",
      icons: [],
      faIcons: [faC, faRust],
    },
  ];

  let index = 0;
</script>

<MediaQuery query="(max-width: 1024px)" let:matches>
  <Splide
    options={{ type: "loop", perPage: matches ? 2 : 3, perMove: 1 }}
    class={className}
  >
    {#each projects as p}
      <SplideSlide class="px-3 pb-10">
        <img
          src="/projects/{p.image}"
          alt={p.title}
          class="h-72 object-cover rounded-xl w-full"
        />
        <h2 class="max-w-fit mt-2 text-lg font-bold flex gap-1 wrap">
          {p.title} <a href={p.link}><Fa icon={faLink} class="inline" /></a>
          <div class="inline-flex gap-1 items-center leading-5">
            {#each p.icons as icon}
              {#await loadComponent(icon) then component}
                <div class="inline-block w-5">
                  <svelte:component this={component.default} />
                </div>
              {/await}
            {/each}
          </div>
          <div class="inline-flex gap-1 items-center">
            {#each p.faIcons as icon}
              <div class="inline-block w-5">
                <Fa {icon} />
              </div>
            {/each}
          </div>
        </h2>
        <p class="max-w-fit text-sm">{p.description}</p>
      </SplideSlide>
    {/each}
    <SplideSlide>
      <div
        class="bg-zinc-900 h-72 rounded-xl w-full p-6 pb-10 flex justify-center flex-col gap-3 pt-10"
      >
        <div>
          <div class="flex gap-3 overflow-hidden">
            <!-- svelte-ignore missing-declaration -->
            {#each [faRust, faJs, faPython, faC, faGolang, faHtml5, faCss3] as icon}
              <Fa {icon} />
            {/each}
          </div>
        </div>
        <h1 class="font-serif italic text-3xl">
          Check out my GitHub for more.
        </h1>
        <a
          class="block text-zinc-200 bg-purple-500 px-6 py-2 mr-auto text-lg rounded-full hover:shadow-[0px_0px_10px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3"
          href="https://github.com/3nt3"
          >GitHub <Fa class="inline" icon={faGithub} />
        </a>
      </div>
    </SplideSlide>
  </Splide>
</MediaQuery>

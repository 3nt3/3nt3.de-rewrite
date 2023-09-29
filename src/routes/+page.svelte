<main class="flex h-screen items-center justify-center bg-zinc-950 p-32">
  <div class="flex h-full justify-center lg:items-center  gap-16 w-full z-10">
    <div class="flex flex-col justify-start">
      <h1
        class="font-display text-8xl -ml-1 bg-clip-text text-transparent bg-display-gradient"
      >
        Hi there,
      </h1>
      <h2 class="font-serif text-3xl text-zinc-100 mt-1 z-10">
        <!-- the escaped thing is a left quote -->
        I&#8217;m Nia and I do
        <span class="italic">
          multiple
          <!-- TODO: make this work -->
          <!-- <svg
            class="relative inline-block translate-x-[-75%] translate-y-[-10%] scale-[70%] "
            width="221"
            height="73"
            viewBox="0 0 221 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title />
            <path
              d="M101.993 27.1737C45.3577 23.7347 -1.04368 31.3341 3.27957 49.4614C7.60282 67.5887 108.838 69.9661 108.838 69.9661C108.838 69.9661 218 71.7491 218 49.4614C218 27.1737 89.0236 -5.81202 47.953 5.18323"
              stroke="#C285FF"
              stroke-opacity="0.82"
              stroke-width="5"
            />
          </svg> -->
        </span> things.
      </h2>

      <button
        class="text-zinc-100 mt-8 mr-auto bg-purple-500 px-24 py-5 text-2xl rounded-full shadow-[0px_0px_30px_0px_rgba(161,103,234,0.60)]"
      >
        Find out more
      </button>
    </div>
    <img
      class="object-scale-down h-[140%] lg:block hidden -z-10 -ml-40"
      src="/hero image.png"
      alt="Hero displaying a couple of projects."
    />
  </div>
  <div
    class="text-zinc-900 opacity-50 absolute left-0 top-0 lg:text-6xl text-4xl font-serif text-justify overflow-clip h-full w-screen"
  >
  {#each Array(20) as _}
    Frontend Development &bull;&nbsp;Backend Development &bull; Electronics &bull;
    Mechanical Engineering &bull;&nbsp;Linux Admin &bull; Embedded Development &bull;
    Typography &bull;&nbsp;Web Design &bull; Linguistics Nerdiness &bull; PCB Design
    &bull;&nbsp;Thinking about Stuff Real Hard &bull; Frontend Development &bull;
  {/each}
  </div>
</main>

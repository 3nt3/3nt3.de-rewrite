<nav
  class="sticky top-0 w-screen flex bg-zinc-900 h-20 z-30 lg:px-40 px-20 items-center text-xl text-zinc-100"
>
  <ul class="flex justify-between w-full">
    <li class="font-display text-purple-400 text-2xl"><a href="/">Nia Schlegel</a></li>
    <ul class="flex gap-8">
      <li class=""><a href="#about">About</a></li>
      <li class=""><a href="/">Contact</a></li>
    </ul>
  </ul>
</nav>
<main
  class="flex lg:h-screen items-center justify-center bg-zinc-950 lg:p-40 px-20 py-40"
>
  <div class="flex h-full lg:items-center justify-between w-full z-10">
    <div class="flex flex-col justify-start flex-1 lg:-mr-40">
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

      <a
        class="block text-zinc-100 mt-8 mr-auto bg-purple-500 px-24 py-5 text-2xl rounded-full hover:shadow-[0px_0px_30px_0px_rgba(161,103,234,0.60)] transition-shadow"
        href="#about"
      >
        Find out more
      </a>
    </div>
    <img
      class="object-scale-down w-[80%] lg:block hidden -z110 flex-initial"
      src="/hero image.png"
      alt="Hero displaying a couple of projects."
    />
  </div>
  <!-- <div -->
  <!--   class="text-zinc-900 opacity-50 absolute left-0 top-0 lg:text-6xl text-4xl font-serif text-justify overflow-clip lg:h-full w-screen select-none z-0 h-[120%]" -->
  <!-- > -->
  <!--   {#each Array(20) as _} -->
  <!--     Frontend Development &bull;&nbsp;Backend Development &bull; Electronics -->
  <!--     &bull; Mechanical Engineering &bull;&nbsp;Linux Admin &bull; Embedded -->
  <!--     Development &bull; Typography &bull;&nbsp;Web Design &bull; Linguistics -->
  <!--     Nerdiness &bull; PCB Design &bull;&nbsp;Thinking about Stuff Real Hard -->
  <!--     &bull; Frontend Development &bull; -->
  <!--   {/each} -->
  <!-- </div> -->
</main>
<section class="bg-zinc-950 text-zinc-100 lg:p-40 p-20 z-10" id="about">
  <div class="flex lg:flex-row flex-col-reverse lg:gap-16 gap-8 items-center lg:items-stretch">
    <div
      class="lg:w-2/6 w-3/4 rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow relative "
    >
      <img
        src="/portrait.jpg"
        alt="Portrait of myself"
        class="rounded-xl h-full object-cover "
      />
      <span class="absolute bottom-4 ml-4 z-10">That's me!</span>
    </div>
    <section
      class="flex-1 flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow "
    >
      <h1
        class="font-display text-5xl -ml-1 bg-clip-text text-transparent bg-display-gradient-lighter"
      >
        Passionate about software development since the first day.
      </h1>
      <p class="font-serif text-xl text-zinc-100">
        My experience stems from great personal interest in everything
        engineering/computer related since childhood. I have been programming as
        a pastime since 2013.
      </p>
      <div class="flex flex-col gap-4 w-full items-end mt-4">
        <div class="w-[90%] font-bold bg-amber-500 px-4 py-2 rounded-lg">
          Frontend ★
        </div>
        <div class="w-[75%] font-bold bg-amber-500 px-4 py-2 rounded-lg">
          Backend ★
        </div>
        <div class="w-[65%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          Data-Science
        </div>
        <div class="w-[35%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          Embedded
        </div>
        <div class="w-[30%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          Gamedev
        </div>
      </div>
      <p class="font-serif text-sm text-zinc-500">
        Note: unmarked x axis for added credibility.
      </p>
    </section>
  </div>
</section>

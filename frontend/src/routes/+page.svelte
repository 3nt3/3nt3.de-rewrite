<script>
  import Carousel from "../components/Carousel.svelte";
  import Fa from "svelte-fa";
  import {
    faPaperPlane,
    faGraduationCap,
    faWrench,
  } from "@fortawesome/free-solid-svg-icons";

  import HCaptcha from "svelte-hcaptcha";

  let captchaCompleted = $state(false);
</script>

<main
  class="flex lg:h-[90vh] items-center justify-center bg-zinc-950 lg:p-40 px-8 py-40"
>
  <div class="flex h-full lg:items-center justify-between w-full z-10">
    <div class="flex flex-col justify-start flex-1 lg:-mr-40">
      <h1
        class="font-display text-8xl -ml-1 bg-clip-text text-transparent bg-display-gradient"
      >
        Hi there,
      </h1>
      <h2 class="font-serif text-3xl text-zinc-200 mt-1 z-10">
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
        class="block text-zinc-200 mt-8 mr-auto bg-purple-500 px-24 py-5 text-2xl rounded-full hover:shadow-[0px_0px_30px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3"
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
<section
  class="bg-zinc-950 text-zinc-200 lg:px-40 lg:pt-40 px-8 pt-20 z-10 pb-10"
  id="about"
>
  <div
    class="flex xl:flex-row flex-col-reverse xl:gap-16 gap-8 items-center xl:items-stretch"
  >
    <div
      class="xl:w-2/6 w-full lg:h-auto rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow relative overflow-hidden"
    >
      <img
        src="/portrait.jpg"
        alt="Portrait of myself"
        class="rounded-xl w-full h-96 xl:h-full object-cover overflow-hidden"
      />
      <span class="absolute bottom-4 ml-4 z-10 font-serif text-xl"
        >That's me!</span
      >
    </div>
    <section
      class="flex-1 flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow"
    >
      <h1
        class="font-display text-5xl -ml-1 bg-clip-text text-transparent bg-display-gradient-lighter"
      >
        Passionate about software development since forever.
      </h1>
      <p class="font-serif text-xl text-zinc-200">
        My experience stems from great personal interest in everything
        engineering/computer related since childhood. I have been programming as
        a pastime since 2013.
      </p>
      <div class="flex flex-col gap-4 w-full items-end mt-4">
        <div class="w-[90%] font-bold bg-amber-500 px-4 py-2 rounded-lg">
          Frontend ★
        </div>
        <div class="w-[80%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          UI/UX Design
        </div>
        <div class="w-[75%] font-bold bg-amber-500 px-4 py-2 rounded-lg">
          Backend ★
        </div>
        <div class="w-[60%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          Mechanical Engineering
        </div>
        <div class="w-[50%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">
          Embedded/Electronics
        </div>
      </div>
      <p class="font-serif">★ Featured Skill</p>
      <p class="font-serif text-sm text-zinc-500">
        Note: unmarked x-axis for added credibility.
      </p>
    </section>
  </div>
</section>
<section class="text-zinc-200 bg-zinc-950 lg:px-40 lg:py-12 px-8 z-10 py-12">
  <h1
    class="font-display bg-clip-text text-transparent bg-display-gradient-lighter text-5xl max-w-fit mx-auto"
  >
    PROJECTS
  </h1>
  <h2 class="italic font-serif text-xl mx-auto max-w-fit">
    What I've been up to.
  </h2>
  <Carousel class="mt-10" />
</section>
<section class="text-zinc-200 bg-zinc-950 lg:px-40 lg:py-12 px-8 z-10 py-12">
  <div class="flex justify-center gap-8 lg:flex-row flex-col">
    <div class="flex-1 bg-purple-500 p-8 rounded-xl">
      <h3 class="font-display text-4xl text-purple-200">
        EDUCATION <Fa class="inline ml-4" icon={faGraduationCap} />
      </h3>
      <div class="p-2 text-lg">
        <ul
          class="flex flex-col gap-2 mt-4 border-dashed border-l-2 border-purple-200"
        >
          {#each ["2015–2023 Abitur, Gymnasium Haan", "2023–2024 B. Sc., Computer Engineering, Cologne University of Applied Sciences (dropped out)", "2024–now B. Eng., Mechanical Engineering, Bochum University of Applied Sciences"] as item}
            <li class="flex gap-4">
              <div class="mt-1 -ml-2 w-4 h-4 rounded-full bg-purple-200"></div>
              <div class="flex-1">
                <span class="font-bold">{item.split(",")[0]},</span>
                {item.split(",").slice(1).join(",")}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="flex-1 bg-purple-500 p-8 rounded-xl">
      <h3 class="font-display text-4xl text-purple-200">
        WORK <Fa class="inline ml-4" icon={faWrench} />
      </h3>
      <div class="p-2 text-lg">
        <ul
          class="flex flex-col gap-2 mt-4 border-dashed border-l-2 border-purple-200"
        >
          {#each ["2019–2023, Newspaper Delivery Job (2 hours/week)", "2023–2024, Working Student Full-Stack Development (React, PHP), Biz Factory GmbH (20 hours/week)", "2024, Working Student DevOps (Linux, PHP, Docker), Check24 Ferienwohnungen GmbH (16 hours/week)", "2024–now, Dual Student Mechanical Engineering, Rheinbahn AG (39 hours/week)"] as item}
            <li class="flex gap-4">
              <div class="mt-1 -ml-2 w-4 h-4 rounded-full bg-purple-200"></div>
              <div class="flex-1">
                <span class="font-bold">{item.split(",")[0]},</span>
                {item.split(",").slice(1).join(",")}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
<section
  class="text-zinc-200 bg-zinc-950 lg:p-40 lg:pt-12 px-8 z-10 pt-12"
  id="contact"
>
  <div class="bg-zinc-900 p-12 rounded-xl gap-16 flex">
    <div class="w-2/6 min-h-[300px] hidden lg:block text-clip">
      <h1
        class="font-display text-zinc-500 text-5xl break-all [word-spacing: -20px] text-block select-none aria-hidden"
      >
        LEAVE A MESSAGE AT THE TONE — LEAVE A MESSAGE AT THE TONE — LEAVE A
        MESSAGE AT THE TONE
      </h1>
    </div>
    <div class="flex flex-col w-full items-center">
      <h1
        class="font-display text-5xl bg-display-gradient-lighter bg-clip-text text-transparent"
      >
        CONTACT
      </h1>
      <h2 class="italic font-serif text-xl text-zinc-200">
        For personal or business inquiries. Only say nice things.
      </h2>
      <form class="w-full flex flex-col mt-8" action="?/contact" method="POST">
        <div class="w-full flex flex-col gap-4 lg:flex-row justify-stretch>">
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg flex-1"
            required
          />
          <input
            type="email"
            placeholder="E-Mail"
            name="email"
            class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg flex-1"
            required
          />
        </div>
        <textarea
          placeholder="Message"
          name="message"
          class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg mt-4 h-48"
          required
        ></textarea>
        <div class="flex flex-col md:flex-row md:justify-evenly mt-4 md:items-center justify-center gap-4">
          <div class="flex-1 flex justify-center">
            <HCaptcha
              sitekey={"e190725a-e624-4dc0-a10c-622a0524443e"}
              theme="dark"
              on:success={(event) => {
                console.log("Captcha success:", event.detail);
                captchaCompleted = true;
              }}
              on:error={(event) => {
                console.error("Captcha error:", event.detail);
                captchaCompleted = false;
              }}
            />
          </div>
          <!-- Tooltip wrapper -->
          <div class="relative flex-1 group shrink" style="min-width: 120px;">
            <button
              disabled={!captchaCompleted}
              class="bg-purple-500 text-zinc-200 p-4 font-bold rounded-full hover:shadow-[0px_0px_10px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3 w-full disabled:opacity-50 pointer"
            >
              SEND IT <Fa class="inline ml-2" icon={faPaperPlane} />
            </button>

            {#if !captchaCompleted}
              <div
                class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded bg-purple-500 text-white text-xs whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Please complete the captcha first
              </div>
            {/if}
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

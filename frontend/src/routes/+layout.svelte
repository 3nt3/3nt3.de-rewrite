<script lang="ts">
  import "../app.css";
</script>

<nav
  class="sticky top-0 w-full flex bg-zinc-900 h-20 z-30 px-12 items-center text-lg text-zinc-300 justify-center"
>
  <ul class="flex justify-between w-full max-w-[1600px]">
    <li class="font-display text-purple-400 text-xl font-bold">
      <a href="/">Nia Schlegel</a>
    </li>
    <ul class="gap-8 font-bold flex">
      <li class=""><a href="/blog">Blog</a></li>
      <li class="md:block hidden"><a href="/#about">About</a></li>
      <li class="md:block hidden"><a href="/#contact">Contact</a></li>
    </ul>
  </ul>
</nav>
<slot />

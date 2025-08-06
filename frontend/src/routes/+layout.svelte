<script lang="ts">
  import "../app.css";
</script>

<nav
  class="sticky top-0 w-screen flex bg-zinc-900 h-20 z-30 lg:px-40 px-8 items-center text-lg text-zinc-300"
>
  <ul class="flex justify-between w-full">
    <li class="font-display text-purple-400 text-xl font-bold">
      <a href="/">Nia Schlegel</a>
    </li>
    <ul class="flex gap-8 font-bold">
      <li class=""><a href="/blog">Blog</a></li>
      <li class=""><a href="/#about">About</a></li>
      <li class=""><a href="/#contact">Contact</a></li>
    </ul>
  </ul>
</nav>
<slot />

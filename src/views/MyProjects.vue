<script setup lang="ts">
import HomeIcons from "../components/HomeIcons.vue";
</script>
<template>
  <main class="bg-white dark:bg-black h-screen pt-12 px-4 md:px-12 lg:px-24">
    <h1 class="font-Revolution text-4xl dark:text-white text-center">
      My Projects
    </h1>
    <div class="grid grid-cols-10 gap-4 mt-4">
      <div class="col-span-1">
        <HomeIcons />
      </div>
      <ul
        class="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <li
          class="rounded-full flex flex-col items-center justify-around bg-pinky-500 p-4 text-white"
        >
          <img
            class="inline-block mr-2"
            src="@/assets/leafBloom.svg"
            alt="Leaf & Bloom"
          />
          <a
            href="https://leaf-bloom.vercel.app/"
            target="_blank"
            class="underline"
            >Leaf & Bloom</a
          >
        </li>
      </ul>
    </div>
  </main>
</template>

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
          <div class="flex items-center justify-center">
            <a
              href="https://leaf-bloom.vercel.app/"
              target="_blank"
              class="underline"
            >
              <img
                src="data:image/png;base64,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"
                alt="brown-hair-lady-window"
              />
            </a>
            <a href="https://github.com/Gehadazzam/leaf-bloom" target="_blank">
              <img
                class="w-8 h-8"
                src="@/assets/icons/github-svgrepo-com.svg"
                alt="GitHub"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

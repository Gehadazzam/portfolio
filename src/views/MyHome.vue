<script setup lang="ts">
import HomeIcons from "../components/HomeIcons.vue";
</script>
<template>
  <main class="bg-black h-screen px-4 flex md:px-12 lg:px-24 text-white">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-auto gap-12 place-items-center"
    >
      <div class="col-span-2">
        <h1 class="text-8xl font-Revolution my-8">{{ $t("name") }}</h1>
        <p class="text-3xl">{{ $t("description") }}</p>
      </div>
      <div
        class="bg-pinky-500 rounded-full flex w-[70%] justify-center items-center col-span-3 aspect-square"
      >
        <img class="w-full" src="@/assets/kitty.svg" alt="Me" />
      </div>
      <HomeIcons />
    </div>
  </main>
</template>

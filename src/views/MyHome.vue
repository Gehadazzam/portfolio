<script setup lang="ts"></script>
<template>
  <main class="bg-pinky-400 h-screen px-4 md:px-12 lg:px-24 text-white">
    <div class="flex flex-col sm:flex-row items-center">
      <div>
        <h1 class="text-8xl my-8">{{ $t("name") }}</h1>
        <p class="text-3xl">{{ $t("description") }}</p>
      </div>
      <img class="w-11/12 md:w-3/4" src="@/assets/kitty.svg" alt="Me" />
    </div>
  </main>
</template>

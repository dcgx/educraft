<template>
  <div>
    <div class="grid grid-cols-2 max-w-screen-xl mx-auto mt-60">
      <div class="text-left">
        <h2 class="title">
          <span class="text-primary">Trivilingo</span>
        </h2>
        <p class="font-sans text-2xl mt-2">
          A trivia app to have some fun and learn
        </p>
        <div
          class="
            w-full
            flex
            justify-start
            mt-5
            items-center
            border border-white
          "
        >
          <e-button @click="$router.push('/difficulty')">Get Started</e-button>
        </div>
      </div>
      <div class="w-full px-36 flex items-center border border-white"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onStart = () => router.push({ name: "start" });
</script>

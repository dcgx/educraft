<template>
  <section class="flex justify-center items-center p-14">
    <div>
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
        alt=""
      />
    </div>

    <div class="w-3/5 m-10">
      <h1 class="mb-8">
        ¡La forma divertida, efectiva y gratis de aprender un idioma!
      </h1>
      <button class="btn btn-primary" @click="onStart">Empezar</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()

const onStart = () => router.push({ name: "start" })
</script>

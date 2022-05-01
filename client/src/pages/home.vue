<template>
  <div>
    <div class="grid grid-cols-2 max-w-screen-xl mx-auto mt-60">
      <div class="text-left">
        <h2 class="title">
          En <span class="text-primary">Edulingo</span> aprendes a tu ritmo.
        </h2>
        <p class="font-sans">
          Si quieres triunfar, no te quedes mirando la escalera. Empieza a
          subir, escalón por escalón, hasta que llegues a la cima.
        </p>
      </div>
      <div class="border h-52"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onStart = () => router.push({ name: "start" });
</script>

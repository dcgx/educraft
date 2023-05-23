<template>
    <div class="h-screen flex items-start justify-center flex-col">
        <h2 class="text-5xl font-bold text-slate-700">
            En <span class="text-blue-900">Edulingo</span> aprendes <br />
            a tu ritmo.
        </h2>
        <p class="py-4">
            Si quieres triunfar, no te quedes mirando la escalera. Empieza a
            subir, escalón por escalón, hasta que llegues a la cima.
        </p>
        <button class="border-2 border-blue-900 px-4 py-1 rounded-md">
            <i class="fas fa-play"></i>Saber Más
        </button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onStart = () => router.push({ name: "start" });
</script>

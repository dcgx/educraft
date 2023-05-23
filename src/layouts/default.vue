<template>
  <div>
    <header class="flex justify-between items-center m-4 top-0">
      <h1 class="text-slate-900 text-3xl font-bold">EduLingo</h1>
      <button>Ingresar</button>
    </header>
    <main class="max-w-7xl w-full mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  setup() {},
});
</script>

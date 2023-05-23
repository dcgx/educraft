<template>
  <div>
    <header class="flex justify-between items-center m-4 top-0">
      <h1 class="text-primary text-3xl font-bold">Trivilingo</h1>
    </header>
    <main>
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

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <default-layout>
    <router-view></router-view>
  </default-layout>
</template>

<script lang="ts">
import DefaultLayout from "./layouts/default.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { DefaultLayout },
  setup() {},
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


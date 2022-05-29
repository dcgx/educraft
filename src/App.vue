<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import DefaultLayout from "./layouts/default.vue";
import LearnLayout from "./layouts/learn.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { DefaultLayout, LearnLayout },
  setup() {},
  computed: {
    layout() {
      const layout = this.$route.meta.layout || "default";
      return layout + "-layout";
    },
  },
});
</script>

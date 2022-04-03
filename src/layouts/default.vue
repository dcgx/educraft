<template>
  <div style="background: #235390">
    <header class="header">
      <div class="logo">trifuzt</div>
    </header>

    <main class="main-wrapper">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "DefaultLayout",
  setup() {},
})
</script>

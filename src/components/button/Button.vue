<template>
  <button class="btn" :class="{ primary, outlined, block, transparent }">
    <slot></slot>
  </button>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EButton",
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
    },
    transparent: {
      type: Boolean,
    },
  },
  setup() {},
});
</script>


<style lang="scss">
.btn {
  padding: 6px 5rem;
  font-weight: 700;
  font-size: 1rem;
  border: solid;
  border-radius: 16px;
  border-width: 2px 2px 4px;
  width: auto;
  background: #fab731;
  &.outlined {
    background: #fff;
  }
}
</style>
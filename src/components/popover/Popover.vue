<template>
  <div class="popover" v-if="opened" ref="popoverRef">
    <div class="popover-body">
      <h3 class="font-bold text-white">Unidad 1</h3>
      <p class="font-medium text-white mt-1">Sesión 1: Introducción</p>

      <e-button class="mt-4" transparent>Ver clase</e-button>
      <e-button class="mt-2" outlined>Practicar</e-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  setup(props, { emit }) {
    const popoverRef = ref(null);

    onClickOutside(popoverRef, (event) => {
      emit("close", false);
    });

    return { popoverRef, onClickOutside };
  },
  props: {
    opened: {
      type: [Boolean, String],
    },
  },
});
</script>


<style lang="scss">
.popover {
  display: block;
  background: red;
  max-width: 275px;
  width: 250px;
  position: absolute;
  border: 0;
  border-radius: 15px;
  left: -70px;
  top: 10rem;
  .popover-body {
    padding: 24px 16px;
  }
}
</style>
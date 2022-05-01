<template>
  <div class="session" @click="onClickSession">
    <div class="session__outside">
      <div class="session__content">
        <div class="bg-red-600">
          <img src="https://edulingo.vercel.app/assets/svg/egg.svg" alt="" />
        </div>
        <div class="session__crown">2</div>
      </div>
    </div>
    <h5 class="font-semibold text-black text-center mt-2">Intro</h5>

    <e-popover
      :opened="isSessionPopoverOpened"
      @close="isSessionPopoverOpened = false"
    ></e-popover>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isSessionPopoverOpened = ref(false);

    const onClickSession = () => (isSessionPopoverOpened.value = true);

    return {
      isSessionPopoverOpened,
      onClickSession,
    };
  },
});
</script>




<style lang="scss">
.session {
  width: 110px;
  height: 110px;
  position: relative;
  cursor: pointer;
  .session__outside {
    border: 10px solid #e5e5e5;
    border-radius: 50%;
    .session__content {
      position: relative;

      div {
        border-radius: 50%;
        border: 4px solid #fff;
      }
      .session__crown {
        position: absolute;
        background-color: #e5e5e5;
        color: #999591;
        bottom: 0;
        right: -10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 700;
        border: none;
      }
    }
  }
}
</style>
<template>
  <div>
    <header class="learn-header border py-2">
      <nav class="flex justify-between max-w-screen-lg mx-auto">
        <div class="flex">
          <a
            class="
              flex
              items-center
              text-sm text-blue-900
              font-bold
              uppercase
              cursor-pointer
            "
          >
            <img
              class="mr-2"
              src="https://edulingo.vercel.app/assets/svg/learn.svg"
              alt=""
            />
            Aprender
          </a>
          <a
            class="
              ml-5
              flex
              items-center
              text-sm text-gray-500
              font-bold
              uppercase
              cursor-pointer
            "
          >
            <img
              class="mr-1"
              src="https://d35aaqx5ub95lt.cloudfront.net/vendor/d3f3ad5d80a9a934e00054f56ec5fbe9.svg"
              alt=""
            />
            mas
          </a>
        </div>
        <div class="flex items-center">
          <a class="text-md font-bold text-red-600 mr-5">
            <img
              class="mr-2 inline-block"
              src="https://d35aaqx5ub95lt.cloudfront.net/vendor/aed279fcbad509208b45ca7a17f3e8dc.svg"
              alt=""
            />
            74</a
          >
          <div class="border-gray-200 rounded-full border-4">
            <img class="w-8 rounded-full" alt="" />
          </div>
        </div>
      </nav>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LearnLayout",
  setup() {},
});
</script>

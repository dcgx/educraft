<template>
  <div class="h-screen w-screen flex items-center flex-col justify-center">
    <h2 class="font-semibold text-2xl">Select difficulty</h2>

    <div class="my-5">
      <div
        v-for="difficulty in difficulties"
        :key="difficulty"
        @click="$router.push('/category')"
        class="
          border
          px-48
          py-2
          cursor-pointer
          text-center
          my-6
          rounded
          border-orange-600
          hover:bg-orange-700
        "
      >
        {{ difficulty }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficulties: ["Easy", "Medium", "Hard"],
    };
  },
};
</script>
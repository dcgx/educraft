<template>
  <div
    class="
      border border-blue
      h-screen
      w-screen
      flex
      items-center
      flex-col
      justify-center
    "
  >
    <h2 class="font-semibold text-2xl">Select difficulty</h2>

    <div class="my-5">
      <div
        @click="$router.push('/category')"
        class="
          border
          px-48
          py-2
          cursor-pointer
          rounded
          border-orange-600
          hover:bg-orange-700
        "
      >
        Easy
      </div>
    </div>
  </div>
</template>
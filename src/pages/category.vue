<template>
  <div class="flex flex-col max-w-screen-lg mx-auto justify-center h-screen">
    <div class="grid grid-cols-3 gap-3">
      <div
        @click="$router.push('/quiz')"
        class="border bg-yellow-50 rounded"
        v-for="category in 9"
        :key="category"
      >
        Category {{ category }}
      </div>
    </div>
  </div>
</template>
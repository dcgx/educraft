<template>
  <div
    class="flex flex-col items-start max-w-3xl px-8 mx-auto my-16 sm:px-0"
  >
    <div class="flex p-4 my-5 border-none bg-slate-800 rounded-lg">
      <InfoIcon class="w-12 h-12 mr-3 text-blue-400" />
      <div>
        <h2 class="text-xl font-bold text-white">Create a course</h2>
        <p class="text-white">
          Educraft is a platform for educators to share their knowledge with
          others. You can create courses and share them with the world.
        </p>
      </div>
    </div>

    <CreateCourseForm />
  </div>
</template>

<script setup>
import { InfoIcon } from "lucide-vue-next";
import CreateCourseForm from "../../components/form/CreateCourseForm.vue";
</script>

<template>
  <div class="border rounded-lg border-secondary">
    <div class="relative">
      <router-link
        :href="`/course/${course.id}/0/0`"
        class="relative block w-fit"
      >
        <img
          :src="course.image"
          class="object-cover w-full max-h-[300px] rounded-t-lg"
          width="300"
          height="300"
          alt="picture of the course"
        />
        <span
          class="absolute px-2 py-1 text-white rounded-md bg-black/60 w-fit bottom-2 left-2 right-2"
        >
          {{ course.name }}
        </span>
      </router-link>
    </div>

    <div class="p-4">
      <h4 class="text-sm text-secondary-foreground/60">Units</h4>
      <div class="space-y-1">
        <router-link
          v-for="unit in course.units"
          :key="unit.id"
          :href="`/course/${course.id}/${unit.id}/0`"
          class="block text-sm text-secondary-foreground/60 hover:text-secondary-foreground/80"
        >
          {{ unit.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>

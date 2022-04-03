<template>
  <section style="background: #fff">
    <div v-if="isLoading">loading...</div>
    <div v-else class="w-4/5 m-auto p-10">
      <ul class="topic-list cursor-pointer pt-10">
        <li
          v-for="item in [1, 2, 3, 4, 5]"
          :key="item"
          @click="$router.push({ name: 'topic', params: { topicId: 1550 } })"
          class="p-4 flex flex-col justify-center align-center hover:bg-slate-50"
        >
          <img
            src="https://triviafun.netlify.app/assets/movie-icon.15443898.svg"
            alt=""
          />
          <h2 class="mt-5 text-xl text-black">Film</h2>
          <p class="mt-4">23 questions</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue"
import { useTopicStore } from "../store/topic"

const props = defineProps({
  name: { type: String },
})

const store = useTopicStore()
const topics = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  await loadTopics()
})

async function loadTopics() {
  try {
    isLoading.value = true
    setTimeout(() => (isLoading.value = false), 1000)
  } catch (err) {
    console.log(err)
  }
}
</script>

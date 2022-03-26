<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    {{ topicStore.currentTopic }}
    <router-link :to="{ name: 'topic', params: { topic: 'music' } }">
      Music questions
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { useTopicStore } from "../store/topic";

const topicStore = useTopicStore();
</script>


<template>
  <Avatar>
    <template v-if="user.image">
      <div class="relative w-full h-full aspect-square">
        <img
          :src="user.image"
          alt="user profile"
          referrerPolicy="no-referrer"
        />
      </div>
    </template>
    <template v-else>
      <AvatarFallback>
        <span class="sr-only">{{ user?.name }}</span>
      </AvatarFallback>
    </template>
  </Avatar>
</template>

<script setup>
import { ref } from "vue";
import { Avatar, AvatarFallback } from "../ui/avatar";

const props = defineProps(["user"]);
</script>

<style scoped>
/* Add your scoped styles here */
</style>

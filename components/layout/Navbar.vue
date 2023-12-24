<template>
  <nav
    class="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2"
  >
    <div
      class="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl"
    >
      <router-link to="/gallery" class="items-center hidden gap-2 sm:flex">
        <p
          class="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white"
        >
          Learning Journey YT
        </p>
      </router-link>
      <div class="flex items-center">
        <router-link to="/gallery" class="mr-3"> Gallery </router-link>
        <template v-if="session && session.user">
          <router-link to="/create" class="mr-3"> Create Course </router-link>
          <router-link to="/settings" class="mr-3"> Settings </router-link>
        </template>
        <ThemeToggle class="mr-3" />
        <div class="flex items-center">
          <template v-if="session && session.user">
            <UserAccountDropdown :user="session.user" />
          </template>
          <template v-else>
            <!-- <SignInButton /> -->
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ThemeToggle from "../theme/ThemeToggle.vue";
import UserAccountDropdown from '../user/UserAccountDropdown.vue';
const session = ref(null);
</script>

<style scoped>
/* Add your scoped styles here */
</style>

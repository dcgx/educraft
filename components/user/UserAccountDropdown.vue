<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <UserAvatar :user="user" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <div class="flex items-center justify-start gap-2 p-2">
        <div class="flex flex-col space-y-1 leading-none">
          <p v-if="user && user.name" class="font-medium">{{ user.name }}</p>
          <p
            v-if="user && user.email"
            class="w-[200px] truncate text-sm text-secondary-foreground"
          >
            {{ user.email }}
          </p>
        </div>
      </div>

      <DropdownMenuSeparator />
      <DropdownMenuItem @select="onSignOut" class="text-red-600 cursor-pointer">
        Sign out
        <LogOut class="w-4 h-4 ml-2" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup>
import { ref } from "vue";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

import { LogOut } from "lucide-vue-next";

const props = defineProps(["user"]);

const onSignOut = () => {};
</script>

<style scoped>
/* Add your scoped styles here */
</style>

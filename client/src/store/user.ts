import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {
            data: { name: "John" },
            token: null,
        },
    }),
});

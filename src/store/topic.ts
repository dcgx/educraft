import { defineStore } from "pinia";

export const useTopicStore = defineStore("topoc", {
  state: () => ({
    currentTopic: "Música",
    topics: [],
  }),

  actions: () => ({}),
});

import { ref } from "vue";

const useTopic = () => {
  const topics = ref([{ name: "Música" }]);

  return {
    topics,
  };
};

export default useTopic;

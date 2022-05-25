import { ref } from "vue";
import { Quiz } from "../types/quiz";

export default function useGame(initialState: Quiz) {
    const loading = ref<boolean>(false);

    const startLoading = () => {};

    const finishLoading = () => {};
}

import { ref } from "vue";
import { Howl } from "howler";

export default function useSound(src: string | String[]) {
    // const sound = ref(new Howl({ src }));

    const play = () => {
        // sound.current.play();
    };

    const stop = () => {};

    return { play, stop };
}

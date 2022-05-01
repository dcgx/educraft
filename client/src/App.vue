<template>
    <router-view :key="$route.path"></router-view>
    <!-- <component :is="layout">
        <router-view></router-view>
    </component> -->
</template>

<script lang="ts">
import { useUserStore } from "./store/user";
// import LandingLayout from "./layouts/landing.vue";
// import LearnLayout from "./layouts/learn.vue";
import { defineComponent } from "vue";
export default defineComponent({
    // components: { LandingLayout, LearnLayout },
    setup() {
        console.log("stup");
        const store = useUserStore();
        console.log({ store });
        return { store };
    },
    computed: {
        // layout() {
        //     const layout = this.$route.meta.layout || "default";
        //     return layout + "-layout";
        // },
    },
});
</script>

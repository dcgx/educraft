<template>
    <div>
        <header class="flex justify-between items-center m-4 top-0">
            <h1 class="text-blue-900 text-3xl font-bold">SurvLingo</h1>
            <router-link
                to="/learn"
                class="font-sans border-2 font-semibold border-blue-900 rounded-full py-2 px-5"
            >
                Ingresar
            </router-link>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DefaultLayout",
    setup() {},
});
</script>

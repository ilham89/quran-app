<template>
    <div class="hello">{{ title }} + {{ msg }}</div>
    <div class="text-red-900">haloo</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    props: {
        msg: String,
    },
    setup() {
        const title = ref("halo ini string dari komponen");
        return {
            title,
        };
    },
};
</script>

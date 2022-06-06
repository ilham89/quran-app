<template>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="text-3xl font-bold underline text-red-500">
        halo ini pake style tailwind {{ nama }}
    </div>
    <CardSurah :msg="'wahyu'" />
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    setup() {
        const nama = ref("ilham");
        return {
            nama,
        };
    },
};
</script>



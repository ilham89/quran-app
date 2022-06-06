<template>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="text-3xl font-bold underline text-red-500">
        halo ini pake style tailwind {{ nama }}
    </div>
    <button @click="$router.push('/user/1')">Redirect to "/user/1"</button>
    <CardSurah :msg="'wahyu'" />
</template>

<script>
import { ref } from "@vue/reactivity";
// import { useRouter } from "vue-router";
export default {
    setup() {
        const nama = ref("ilham");
        return {
            nama,
        };
    },
};
</script>



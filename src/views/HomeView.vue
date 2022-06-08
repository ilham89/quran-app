<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="text-center bg-blue-500">wkwkwk</div>
    <div
        class="
            text-3xl
            font-bold
            underline
            text-yellow-500
            rounded
            bg-sky-500
            h-10
        "
    >
        halo ini pake style tailwind {{ nama }}
    </div>
    <button @click="$router.push('/user/1')">Redirect to "/user/1"</button>
    <CardSurah />
    <Footer />
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



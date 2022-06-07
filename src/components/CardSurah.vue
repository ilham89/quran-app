<script>
import { onMounted, reactive } from "vue";
import { getSurah } from "../services/index";
export default {
    setup() {
        const surahs = reactive({
            list: [],
        });
        const getList = async () => {
            await getSurah().then((res) => {
                surahs.list = res.data;
            });
        };
        onMounted(() => {
            getList();
        });

        return {
            surahs,
        };
    },
};
</script>

<template>
    <div
        class="
            my-10
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
        "
    >
        <div
            v-for="surah in surahs.list"
            :key="surah.number"
            class="card bg-neutral text-[#fffffe] shadow-xl"
        >
            <div class="card-body">
                <h2 class="card-title">
                    <span class="badge badge-primary badge-outline badge-md">{{
                        surah.number
                    }}</span
                    >{{ surah.name.transliteration.id }}
                </h2>
                <p class="text-[#ddd6d6]">Surah {{ surah.revelation.id }}</p>
                <p class="text-[#ddd6d6]">{{ surah.numberOfVerses }} Ayat</p>
                <div class="card-actions mt-3 justify-end">
                    <router-link
                        class="btn btn-sm btn-primary btn-block"
                        :to="`/surah/${surah.number}`"
                        >Baca
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
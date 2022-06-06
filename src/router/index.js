import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import SurahView from "../views/SurahView.vue";

const router = createRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        // {
        //     path: "/surah/:number",
        //     name: "surah",
        //     component: SurahView,
        // },
    ],
});

export default router;

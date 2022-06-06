import { createRouter, createWebHistory } from "vue-router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/surah/:number",
            name: "Surah",
            component: () => import("../views/SurahView.vue"),
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: () => import("../views/NotFound.vue"),
        },
    ],
});
router.beforeResolve((to, _from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});
router.afterEach(() => {
    NProgress.done();
});

export default router;

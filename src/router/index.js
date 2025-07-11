import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        alias: "/",
        path: "/home",
        name: "homeView",
        component: () => import("@/views/homeView"),
    },
    {
        path: "/axiosView",
        name: "axiosView",
        component: () => import("@/views/axiosView"),
    },
    {
        path: "/pinia",
        name: "pinia",
        component: () => import("@/views/piniaView"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

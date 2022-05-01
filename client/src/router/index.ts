import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import DashboardPage from "../pages/dashboard.vue";
import LoginPage from "../pages/login.vue";
import RegisterPage from "../pages/register.vue";

import DefaultLayout from "../layouts/default.vue";
import AuthLayout from "../layouts/auth.vue";

// import HomePage from "../pages/home.vue";
// import LearnPage from "../pages/learn.vue";
// import TipsPage from "../pages/tips.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "dashboard",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: { requiresAuth: false },
        children: [
            { path: "/dashboard", name: "dashboard", component: DashboardPage },
        ],
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "auth",
        component: AuthLayout,
        children: [
            {
                path: "/login",
                name: "login",
                component: LoginPage,
            },
            {
                path: "/register",
                name: "register",
                component: RegisterPage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;

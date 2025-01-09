import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/MyHome.vue") },
    { path: "/projects", component: () => import("../views/MyProjects.vue") },
    { path: "/about", component: () => import("../views/AboutMe.vue") },
    { path: "/contact", component: () => import("../views/MyContact.vue") },
    { path: "/skills", component: () => import("../views/MySkills.vue") },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});

export default router;

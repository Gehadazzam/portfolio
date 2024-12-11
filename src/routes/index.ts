import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/', component: () => import('../views/MyHome.vue')},
      {path: '/projects', component: () => import('../views/MyProjects.vue')},
    ]
})

export default router;
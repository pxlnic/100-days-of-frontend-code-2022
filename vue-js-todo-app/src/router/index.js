import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/todo-list',
            name: 'todoList',
            component: () => import('../views/TodosView.vue')
        },
        {
            path: '/todo-stats',
            name: 'todoStats',
            component: () => import('../views/TodoStatsView.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../views/SettingsView.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/AuthView.vue')
        },
    ]
})

export default router

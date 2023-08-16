import {createRouter, createWebHistory} from 'vue-router'

import Users from "@/pages/Users.vue";
import Comments from "@/pages/Comments.vue";

const routes = [
    {
        path: '/',
        name: 'users',
        component: Users,
    },
    {
        path: '/comments/:userId ',
        name: 'comments',
        component: Comments,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
import {createRouter, createWebHistory} from 'vue-router'

import Users from "@/pages/Users.vue";
import Comments from "@/pages/Comments.vue";
import Error from "@/pages/Error.vue";

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
    { 
        path: "/:catchAll(.*)",
        name: 'error',
        component: Error 
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
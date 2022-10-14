import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'homepage',
            component: () =>
                import ('../views/homepage/index.vue'),
        },
        {
            path: '/who-we-are',
            name: 'who-we-are',
            component: () =>
                import ('../views/who-we-are/index.vue'),
        },
    ],
});

export default router;
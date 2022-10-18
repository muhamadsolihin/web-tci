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
        {
            path: '/our-work',
            name: 'our-work',
            component: () =>
                import ('../views/our-work/index.vue'),
        },
        {
            path: '/test2',
            name: 'test2',
            component: () =>
                import ('../views/test/test2.vue'),
        },
    ],
});

export default router;
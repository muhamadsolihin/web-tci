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
            path: '/our-gallery',
            name: 'our-gallery',
            component: () =>
                import ('../views/our-gallery/index.vue'),
        },
        {
            path: '/careers',
            name: 'careers',
            component: () =>
                import ('../views/careers/index.vue'),
        },
        {
            path: '/media-gallery',
            name: 'Media-Gallery',
            component: () =>
                import ('../views/media-gallery/index.vue'),
        },
        {
            path: '/third-party',
            name: 'Third-Party',
            component: () =>
                import ('../views/third-party/index.vue'),
        },
        {
            path: '/contact-us',
            name: 'Contact-Us',
            component: () =>
                import ('../views/contact-us/index.vue'),
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
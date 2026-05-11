import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

import Home from '@/pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
        ],
    },
];

let country = window.location.pathname.split('/').slice(0, -1).join('/');
const router = createRouter({
    history: createWebHistory(country ? country : '/sg'),
    routes,
});

export default router;

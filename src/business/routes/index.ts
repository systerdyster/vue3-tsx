import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteNameDefinitions } from '__definitions/RouteNameDefinitions';

const Start = () => import(/* webpackChunkName: "module" */ '../../components/Start.vue');

export const routes = [
    {
        name: RouteNameDefinitions.START,
        path: '/',
        component: Start,
        props: false
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

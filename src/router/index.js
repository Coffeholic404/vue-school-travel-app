import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/brazil', name: 'Brazil', component: () => import('../views/Brazil.vue') },
    { path: '/hawaii', name: 'Hawaii', component: () => import('../views/Hawaii.vue') },
    { path: '/jamaica', name: 'Jamaica', component: () => import('../views/Jamaica.vue') },
    { path: '/panama', name: 'Panama', component: () => import('../views/Panama.vue') },
    { path: '/destination/:id', name: 'Destination', component: () => import('../views/DestinationShow.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    //here where we will define our routes
    routes,
    // linkActiveClass: 'vue-school-active-link'
})

export default router;
import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

import App from './App.vue';

// Lazy loading des routes
const Home = defineAsyncComponent(() => import('./home.vue'));
const Coin = defineAsyncComponent(() => import('./coin.vue'));


const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/coin/:id', component: Coin, name: 'Coin' }

];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');

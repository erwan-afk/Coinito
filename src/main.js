import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CoinPage from './coin.vue';
import Home from './home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/coin/:id', component: CoinPage, name: 'CoinDetail', }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

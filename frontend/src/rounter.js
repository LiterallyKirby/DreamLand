// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue'; // First screen
import SearchPage from './views/SearchPage.vue'; // Second screen

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Search',
    name: 'Search',
    component: SearchPage, // Fixed the import here
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

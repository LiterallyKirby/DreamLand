// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue'; // First screen
import SearchPage from './views/SearchPage.vue'; // Second screen
import InstallScreen from './components/InstallScreen.vue';

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
  {
    path: '/Install',
    name: 'Install',
    component: InstallScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

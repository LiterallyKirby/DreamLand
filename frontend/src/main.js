// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './rounter'; // Ensure this points to src/router.js

const app = createApp(App);
app.use(router);
app.mount('#app');

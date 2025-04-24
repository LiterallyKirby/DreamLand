import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  
  plugins: [vue()],
  server: {
    port: 5174,  // Ensure this is the port Vite will run on
  },
});

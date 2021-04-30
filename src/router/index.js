import { createRouter, createWebHistory } from 'vue-router';
import Index from './modules/index';

const routes = [
  Index,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

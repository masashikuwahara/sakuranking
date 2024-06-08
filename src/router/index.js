import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
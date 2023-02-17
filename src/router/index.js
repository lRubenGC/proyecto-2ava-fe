import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView';
import CarListView from '@/views/CarListView';
import CarDetailedView from '@/views/CarDetailedView';

const routes = [
  {
    path: '/',
    name: 'login-view',
    component: LoginView
  },
  {
    path: '/listado',
    name: 'car-list-view',
    component: CarListView
  },
  {
    path: '/listado/coche:id',
    name: 'car-detailed-view',
    component: CarDetailedView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

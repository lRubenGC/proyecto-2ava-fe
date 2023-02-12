import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView';
import CarListView from '@/views/CarListView';

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
  // {
  //   path: '/listado/coche',
  //   name: 'car-list-view',
  //   component: CarDetailedView
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

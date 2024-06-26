import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView';
import CarListView from '@/views/CarListView';
import CarDetailedView from '@/views/CarDetailedView';
import MyCarsView from '@/views/MyCarsView';
import PageNotFound from '@/views/PageNotFoundView';

const routes = [
  {
    path: '/:catchAll(.*)*',
    name: 'page-not-found',
    component: PageNotFound
  },
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
  },
  {
    path: '/mis-coches',
    name: 'my-cars-view',
    component: MyCarsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

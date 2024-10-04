import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('./pages/login.vue'),
  },
  {
    path: '/layout',
    component: () => import('./layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('./pages/home.vue'),
      },
      {
        path: '/customer-service',
        component: () => import('./pages/customer-service.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router

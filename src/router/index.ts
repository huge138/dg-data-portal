import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/ai-toolbox',
    name: 'AIToolbox',
    component: () => import('@/views/ai-toolbox/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

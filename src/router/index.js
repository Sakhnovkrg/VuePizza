import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Checkout from '@/views/Checkout'

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
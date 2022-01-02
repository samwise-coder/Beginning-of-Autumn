import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('../views/Grid.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('../views/Canvas.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('../views/Animation.vue')
  },
  {
    path: '/es6',
    name: 'Es6',
    component: () => import('../views/ES6.vue')
  },
  {
    path: '/ts',
    name: 'Ts',
    component: () => import('../views/Ts.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/maifang',
    name: 'maifang',
    component: () => import('../views/MaiFang.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

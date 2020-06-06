import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import systemManage from './systemManage'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/Index/index.vue')
  },
  systemManage
]

const router = new VueRouter({
  routes
})

export default router

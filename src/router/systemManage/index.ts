import { RouteConfig } from 'vue-router'

const systeManage: RouteConfig = {
  path: '/systemManage/departmentManage',
  name: 'departmentManage',
  component: () => import('@/views/SystemManage/index.vue')
}

export default systeManage

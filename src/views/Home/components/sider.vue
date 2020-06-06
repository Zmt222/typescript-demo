<template>
  <div class="sider">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="[menuList[0].id]">
        <template v-for="item in menuList">
          <a-menu-item v-if="!item.children.length" :key="item.id">
            <a-icon type="user" />
            <span>{{ item.name }}</span>
            <router-link :to="item.router" />
          </a-menu-item>
        </template>
        <template v-for="item in menuList">
          <a-sub-menu v-if="item.children.length" :key="item.id" >
          <span slot="title"><a-icon type="mail" /><span>{{ item.name }}</span></span>
            <a-menu-item v-for="child in item.children" :key="child.id">
              {{ child.name }}
              <router-link :to="child.router" />
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
interface MenuObject {
  id: number;
  name: string;
  router: string;
  icon: string;
  children: Array<MenuObject>;
}

@Component
export default class Sider extends Vue {
  @Prop({ default: false }) collapsed!: boolean
  menuList: Array<MenuObject> = [
    {
      id: 1,
      name: '首页',
      router: '/index',
      icon: 'menu01',
      children: []
    },
    {
      id: 2,
      name: '系统管理',
      router: '/systemManage',
      icon: 'menu02',
      children: [
        {
          id: 3,
          name: '部门管理',
          router: '/systemManage/departmentManage',
          icon: 'menu03',
          children: []
        }
      ]
    }
  ]
}
</script>

<style lang="scss">
.sider {
  min-height: 600px;
  .ant-menu {
    min-height: 600px;
  }
  .ant-layout-sider-children {
    height: 100%;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

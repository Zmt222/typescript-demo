<template>
  <a-layout>
    <Sider :collapsed="collapsed" />
    <a-layout>
      <Hearder :collapsed="collapsed" @getCollapsed="getCollapsed"/>
      <Content />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Hearder from './components/hearder.vue'
import Sider from './components/sider.vue'
import Content from './components/content.vue'

@Component({
  components: {
    Hearder,
    Sider,
    Content
  }
})
export default class Home extends Vue {
  collapsed = false

  private getCollapsed(val: boolean) {
    this.collapsed = val
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleClick" />
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'

@Component
export default class Hearder extends Vue {
  @Prop({ default: false }) collapsed!: boolean

  @Emit('getCollapsed')
  private handleClick() {
    return !this.collapsed
  }
}
</script>

<style lang="scss" scoped>

</style>

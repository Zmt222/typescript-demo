<template>
  <div id="app">
    <Home />
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Home from './views/Home/index.vue'

@Component({
  components: { Home }
})

export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>

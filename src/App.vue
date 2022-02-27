<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
        <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
      </md-button>
      <h3 class="md-title">Primary</h3>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="showNavigation" md-swipeable md-persistent="mini" id="navbar">
      <Menu></Menu>
    </md-app-drawer>
    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
import Menu from './components/Drawer/Menu'

import SvgIcon from '@jamescoyle/vue-icon'

import { mdiMenu } from '@mdi/js'

export default {
  data () {
    return {
      showNavigation: false,

      mdiMenu: mdiMenu
    }
  },
  components: {
    Menu,
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 100vh;
}
</style>

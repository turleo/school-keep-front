<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
        <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
      </md-button>
      <h3 class="md-title">{{ $t(currentRouteName) }}</h3>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="showNavigation" :md-persistent="persistent" id="navbar" @click.native="closeNavigation">
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
      persistent: window.screen.width > 700 || window.screen.orientation.type.startsWith('landscape') ? 'mini' : 'full',

      mdiMenu: mdiMenu
    }
  },
  components: {
    Menu,
    SvgIcon
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  },
  methods: {
    closeNavigation () {
      this.showNavigation = false
    }
  }
}
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 100vh;
}
.md-app-drawer {
  max-width: 250px;
}
</style>

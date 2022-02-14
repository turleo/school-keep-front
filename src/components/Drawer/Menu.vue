<template>
  <md-list>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">School Sync</span>
    </md-toolbar>

    <div v-if="loggedIn">
      <router-link to="/">
        <md-list-item>
          <md-icon><svg-icon type="mdi" :path="mdiHome"></svg-icon></md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>
      </router-link>

      <router-link to="/about">
        <md-list-item>
          <md-icon><svg-icon type="mdi" :path="mdiInformation"></svg-icon></md-icon>
          <span class="md-list-item-text">About</span>
        </md-list-item>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/login">
        <md-list-item>
          <md-icon><svg-icon type="mdi" :path="mdiLoginVariant"></svg-icon></md-icon>
          <span class="md-list-item-text">Login</span>
        </md-list-item>
      </router-link>
    </div>
  </md-list>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLoginVariant, mdiHome, mdiInformation } from '@mdi/js'

export default {
  name: 'Menu',
  components: {
    SvgIcon
  },
  data () {
    return {
      loggedIn: localStorage.getItem('token'),

      mdiLoginVariant: mdiLoginVariant,
      mdiHome: mdiHome,
      mdiInformation: mdiInformation
    }
  }
}
</script>

<style scoped>

</style>

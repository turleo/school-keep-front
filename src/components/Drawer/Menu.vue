<template>
  <md-list>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">{{ $t("title") }}</span>
    </md-toolbar>

    <div v-if="loggedIn">
      <Item to="/" :icon="mdiHome" title="drawer.home"></Item>

      <Item to="/countdown" :icon="mdiCameraTimer" title="drawer.countdown"></Item>

      <Item to="/settings" :icon="mdiCog" title="drawer.settings"></Item>

      <Item to="/about" :icon="mdiInformation" title="drawer.about"></Item>

    </div>
    <div v-else>
      <Item to="/login" :icon="mdiLoginVariant" title="drawer.login"></Item>
    </div>
  </md-list>
</template>

<script>
import { mdiLoginVariant, mdiHome, mdiInformation, mdiCog, mdiCameraTimer } from '@mdi/js'
import Item from './Item'

export default {
  name: 'Menu',
  components: {
    Item
  },
  data () {
    return {
      loggedIn: localStorage.getItem('token'),

      mdiLoginVariant: mdiLoginVariant,
      mdiHome: mdiHome,
      mdiInformation: mdiInformation,
      mdiCog: mdiCog,
      mdiCameraTimer: mdiCameraTimer
    }
  }
}
</script>

<style scoped>

</style>

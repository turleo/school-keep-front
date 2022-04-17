<template>
  <md-list>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">{{ $t("title") }}</span>
    </md-toolbar>

    <div v-if="loggedIn">
      <Item to="/" :icon="mdiHome" title="drawer.home"></Item>

      <Item to="/countdown" :icon="mdiCameraTimer" title="drawer.countdown"></Item>
      <Item to="/homework/0" :icon="mdiFormatListChecks" title="drawer.homework"></Item>
      <Item to="/homework/all" :icon="mdiFormatListCheckbox" title="drawer.allHomework"></Item>

      <Item to="/settings" :icon="mdiCog" title="drawer.settings"></Item>
    </div>
    <div v-else>
      <Item to="/login" :icon="mdiLoginVariant" title="drawer.login"></Item>
      <Item to="/register" :icon="mdiAccountPlus" title="drawer.register"></Item>
    </div>
  </md-list>
</template>

<script>
import {
  mdiLoginVariant,
  mdiHome,
  mdiInformation,
  mdiCog,
  mdiCameraTimer,
  mdiFormatListChecks,
  mdiFormatListCheckbox, mdiAccountPlus
} from '@mdi/js'
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
      mdiCameraTimer: mdiCameraTimer,
      mdiFormatListChecks: mdiFormatListChecks,
      mdiFormatListCheckbox: mdiFormatListCheckbox,
      mdiAccountPlus: mdiAccountPlus
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <md-list>
    <Item to="settings/lessons" :icon="mdiBell" title="Bell times"></Item>

    <md-divider></md-divider>

    <Item to="settings/devices" :icon="mdiDevices" title="Authorised devices"></Item>
  </md-list>
</template>

<script>
import Item from './components/Drawer/Item'
import { mdiBell, mdiDevices } from '@mdi/js'

export default {
  name: 'Settings',
  components: { Item },
  data () {
    return {
      mdiBell: mdiBell,
      mdiDevices: mdiDevices
    }
  }
}
</script>

<style scoped>

</style>

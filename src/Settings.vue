<template>
  <md-list>
    <Item to="settings/timetable" :icon="mdiTimetable" title="Timetable"></Item>
    <Item to="settings/lessons" :icon="mdiBell" title="Bell times"></Item>
    <Item to="settings/subjects" :icon="mdiChairSchool" title="Subjects"></Item>

    <md-divider></md-divider>

    <Item to="settings/devices" :icon="mdiDevices" title="Authorised devices"></Item>
  </md-list>
</template>

<script>
import Item from './components/Drawer/Item'
import { mdiBell, mdiChairSchool, mdiDevices, mdiTimetable } from '@mdi/js'

export default {
  name: 'Settings',
  components: { Item },
  data () {
    return {
      mdiBell: mdiBell,
      mdiChairSchool: mdiChairSchool,
      mdiDevices: mdiDevices,
      mdiTimetable: mdiTimetable
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <md-list>
    <Item to="settings/subjects" :icon="mdiChairSchool" title="settings.main.subjects"></Item>
    <Item to="settings/lessons" :icon="mdiBell" title="settings.main.bells"></Item>
    <Item to="settings/timetable" :icon="mdiTimetable" title="settings.main.timetable"></Item>
    <Item to="/onboarding" :icon="mdiRestart" title="settings.main.onboarding"></Item>
  </md-list>
</template>

<script>
import Item from './components/Drawer/Item'
import { mdiBell, mdiChairSchool, mdiDevices, mdiRestart, mdiTimetable } from '@mdi/js'

export default {
  name: 'Settings',
  components: { Item },
  data () {
    return {
      mdiBell: mdiBell,
      mdiChairSchool: mdiChairSchool,
      mdiDevices: mdiDevices,
      mdiTimetable: mdiTimetable,
      mdiRestart: mdiRestart
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <md-toolbar>
    <router-link :to="prev">
      <md-button class="md-icon-button right-button">
        <md-icon><svg-icon type="mdi" :path="mdiChevronLeft"></svg-icon></md-icon>
      </md-button>
    </router-link>
    <p class="centered">{{ text }}</p>
    <router-link :to="next">
      <md-button class="md-icon-button left-button">
        <md-icon><svg-icon type="mdi" :path="mdiChevronRight"></svg-icon></md-icon>
      </md-button>
    </router-link>
  </md-toolbar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default {
  name: 'DateSwitcher',
  components: {
    SvgIcon
  },
  data () {
    return {
      mdiChevronLeft: mdiChevronLeft,
      mdiChevronRight: mdiChevronRight
    }
  },
  props: [
    'date',
    'text'
  ],
  computed: {
    prev () {
      return `/homework/${this.date - 1}`
    },
    next () {
      return `/homework/${parseInt(this.date) + 1}`
    }
  }
}
</script>

<style scoped>
  .left-button {
    margin-left: 0;
  }
  .right-button {
    margin-left: auto;
  }
  .centered {
    margin: auto;
  }
</style>

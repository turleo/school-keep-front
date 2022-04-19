<template>
  <md-dialog :md-active.sync="opened">
    <md-button @click="toggle" class="close">
      <md-icon><svg-icon type="mdi" :path="mdiClose"></svg-icon></md-icon>
    </md-button>
    <md-list>
      <md-list-item v-for="subject in subjects" v-bind:key="subject.id" @click="create(subject)">
        <md-button class="item-button">{{ subject.icon }} {{ subject.title }}</md-button>
      </md-list-item>
    </md-list>
  </md-dialog>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'SelectSubject',
  data () {
    return {
      opened: false,
      mdiClose: mdiClose
    }
  },
  components: {
    SvgIcon
  },
  props: [
    'date'
  ],
  methods: {
    toggle () {
      this.opened = !this.opened
    },
    create (subject) {
      console.log(subject)
      window.ws.hometaskClass.change({
        subject: subject,
        deadline: this.date.toISOString().substring(0, 10)
      })
      this.toggle()
    }
  },
  computed: {
    subjects: () => { return window.store.state.subjects.subjects }
  }
}
</script>

<style>
  .item-button {
    text-align: left;
    width: 300px;
    margin: auto;
  }
  .md-list-item {
    margin-left: auto;
    margin-right: auto;
  }
  .close {
    position: absolute !important;
    right: 2px;
    min-width: 16px !important;
    max-width: 16px !important;
  }
</style>

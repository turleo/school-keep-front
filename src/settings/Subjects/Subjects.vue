<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head style="width: 100px">Icon</md-table-head>
        <md-table-head>Subject</md-table-head>
        <md-table-head>Room</md-table-head>
        <md-table-head>Teacher</md-table-head>
      </md-table-row>

      <md-table-row v-for="subject in subjects" v-bind:key="subject.id" @click="setEdit(subject)">
        <md-table-cell><p class="emoji-icon">{{ subject.icon }}</p></md-table-cell>
        <md-table-cell>{{ subject.title }}</md-table-cell>
        <md-table-cell>{{ subject.room }}</md-table-cell>
        <md-table-cell>{{ subject.teacher }}</md-table-cell>
      </md-table-row>
    </md-table>
    <Edit :subject="edit_subject" ref="editModal"></Edit>
    <md-button class="md-fab" @click="setEdit({
        id: 0,
        title: '',
        icon: '🧑‍🏫',
        room: '',
        teacher: ''
      })">
      <md-icon><svg-icon type="mdi" :path="add"></svg-icon></md-icon>
    </md-button>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlus } from '@mdi/js'
import Edit from './Edit'

export default {
  name: 'Subjects',
  components: {
    Edit,
    SvgIcon
  },
  data () {
    return {
      subjects: [],
      edit_subject: {
        id: 0,
        title: '',
        icon: '🧑‍🏫',
        room: '',
        teacher: ''
      },

      add: mdiPlus
    }
  },
  methods: {
    getSubjects (e) {
      this.subjects = e
    },
    setEdit (subject) {
      this.edit_subject = subject
      this.$refs.editModal.toggle()
    }
  },
  async mounted () {
    window.ws.setListener(this.getSubjects)
    window.ws.send({ event: 'timetable.subjects.fetch' })
  }
}
</script>

<style scoped>
  .md-fab {
    position: absolute;
    bottom: 16px;
    right: 16px
  }
  .emoji-icon {
    font-size: 30px;
    margin: auto;
  }
</style>

<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>{{ $t('hometask.see.task') }}</md-dialog-title>
    <div class="md-layout-item">
      <md-field>
        <label for="subject">{{ $t('hometask.see.subject') }}</label>
        <md-select v-model="hometask.subject.id" name="subject" id="subject" @md-selected="save">
          <md-option v-for="subject in subjects" v-bind:key="subject.id" :value="subject.id">{{ subject.icon }} {{ subject.title }}</md-option>
        </md-select>
      </md-field>
    </div>
    <div class="md-layout-item">
      <md-datepicker v-model="hometask.deadline" name="deadline" @md-closed="delayedSave">
        <label>{{ $t('hometask.see.deadline') }}</label>
      </md-datepicker>
    </div>
    <div class="md-layout-item">
      <ToDoList :tasks="hometask.tasks"></ToDoList>
    </div>
  </md-dialog>
</template>

<script>
import ToDoList from './ToDoList'

export default {
  name: 'SeeTask',
  components: { ToDoList },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    toggle () {
      this.showDialog = !this.showDialog
    },
    delayedSave () {
      setTimeout(this.save, 100)
    },
    save () {
      window.ws.hometaskClass.change(this.hometask)
    }
  },
  props: [
    'hometask'
  ],
  computed: {
    subjects () {
      return window.ws.subjectClass.data.subjects
    }
  },
  mounted () {
    this.$material.locale.firstDayOfAWeek = 1
  }
}
</script>

<style scoped>
  .md-layout-item {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>

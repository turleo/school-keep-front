<template>
  <md-list>
    <md-list-item v-for="task in tasks" v-bind:key="task.id" @click="changeTask(task)">
      <div>
        <md-checkbox v-model="task.done" @change="changeTask(task)"></md-checkbox>
      </div>
      <md-field>
        <md-input v-model="task.text" @focusout="changeTask(task)"></md-input>
      </md-field>
    </md-list-item>
    <md-list-item>
      <md-field>
        <label>{{ $t("hometask.see.tasks.new") }}</label>
        <md-input v-model="newText" @keyup.enter="newTask"></md-input>
        <md-button @click="newTask">
          <md-icon><svg-icon type="mdi" :path="mdiPlus"></svg-icon></md-icon>
        </md-button>
      </md-field>
    </md-list-item>
  </md-list>
</template>

<script>
import { mdiPlus } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: 'ToDoList',
  data () {
    return {
      newText: '',
      mdiPlus: mdiPlus
    }
  },
  components: {
    SvgIcon
  },
  props: [
    'tasks',
    'hometaskId'
  ],
  methods: {
    changeTask (task) {
      task.homework_id = this.hometaskId
      window.ws.hometaskClass.changeTask(task)
    },
    newTask () {
      const task = {
        homework_id: this.hometaskId,
        text: this.newText
      }
      window.ws.hometaskClass.changeTask(task)
      this.newText = ''
    }
  }
}
</script>

<style>
  .md-ripple {
    max-height: 50px;
  }
</style>
<style scoped>
  .md-button {
    max-height: 25px;
    min-width: 16px !important;
  }
</style>

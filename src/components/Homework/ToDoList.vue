<template>
  <md-list>
    <md-list-item v-for="task in tasks" v-bind:key="task.id" @click="changeTask(task)">
      <div>
        <md-checkbox v-model="task.done"></md-checkbox>
      </div>
      <md-field>
        <md-input v-model="task.text" @focusout="changeTask"></md-input>
      </md-field>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'ToDoList',
  props: [
    'tasks'
  ],
  methods: {
    changeTask (task) {
      window.ws.hometaskClass.changeTask(task)
    }
  }
}
</script>

<style>
  .md-ripple {
    max-height: 50px;
  }
</style>

<template>
  <div>
    <md-list>
      <md-list-item v-for="i in getHometasks" v-bind:key="i.id" :class="{ 'fired': i.fired }">
        <md-checkbox v-model="i.done" @change="markAsDone(i)">
          <span :title="i.subject.title">{{ i.subject.icon }}</span>
          {{ i.text }}
          <time class="deadline">{{ i.deadline }}</time></md-checkbox>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'AllHomework',
  methods: {
    markAsDone (task) {
      window.ws.hometaskClass.changeTask({ id: task.id, done: task.done, text: task.text, homework_id: task.hometask_id })
    }
  },
  computed: {
    getHometasks () {
      const allHometasks = window.store.state.hometasks.tasks_by_server_id
      console.log(allHometasks)
      const undoneTasks = []
      for (const hometask of Object.values(allHometasks)) {
        for (const task of Object.values(hometask.tasks)) {
          if (!task.done) {
            undoneTasks.push({
              id: task.id,
              subject: hometask.subject,
              text: task.text,
              deadline: hometask.deadline,
              fired: Date.parse(hometask.deadline) <= Date.now(),
              done: task.done,
              hometask_id: hometask.id
            })
          }
        }
      }
      undoneTasks.sort((a, b) => {
        return Date.parse(a.deadline) - Date.parse(b.deadline)
      })
      return undoneTasks
    }
  }
}
</script>

<style scoped>
  .fired {
    background-color: #ffb6c1;
  }
  .md-list-item {
    width: 100%;
  }
  time {
    color: gray;
  }
</style>

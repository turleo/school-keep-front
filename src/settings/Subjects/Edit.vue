<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>Edit subject</md-dialog-title>

    <div id="inputs">

      <md-field>
        <label for="title">It is...</label>
        <md-input v-model="subject.title" id="title" required></md-input>
      </md-field>
      <md-field>
        <label for="icon">It's icon...</label>
        <md-input v-model="subject.icon" id="icon"></md-input>
      </md-field>
      <md-field>
        <label for="room">It is located in room...</label>
        <md-input v-model="subject.room" id="room"></md-input>
      </md-field>
      <md-field>
        <label for="teacher">Teacher</label>
        <md-input v-model="subject.teacher" id="teacher"></md-input>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button class="md-accent" @click="deleteSubject">Delete</md-button>
      <md-button class="md-primary" @click="toggle">Close</md-button>
      <md-button class="md-primary" @click="save">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      opened: false
    }
  },
  methods: {
    toggle () {
      this.opened = !this.opened
    },
    save () {
      const data = {
        id: this.subject.id,
        title: this.subject.title,
        icon: this.subject.icon,
        room: this.subject.room,
        teacher: this.subject.teacher
      }
      console.log(data)

      window.ws.send({ event: 'timetable.subjects.change', data: data })
      this.toggle()
    },
    deleteSubject () {
      window.ws.send({ event: 'timetable.subjects.delete', id: this.subject.id })
    }
  },
  props: ['subject']
}
</script>

<style scoped>
#inputs {
  margin: 16px;
}
</style>

<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>Edit bell</md-dialog-title>

    <div id="inputs">

      <md-field>
        <label for="start">Start time</label>
        <md-input v-model="bell.start" id="start" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="end">End time</label>
        <md-input v-model="bell.end" id="end" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="days">Days</label>
        <md-select v-model="bell.days" name="days" id="days" md-dense multiple>
          <md-option value="mo">Monday</md-option>
          <md-option value="tu">Tuesday</md-option>
          <md-option value="we">Wednesday</md-option>
          <md-option value="th">Thursday</md-option>
          <md-option value="fr">Friday</md-option>
          <md-option value="sa">Saturday</md-option>
          <md-option value="su">Sunday</md-option>
        </md-select>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button class="md-accent" @click="deleteBell">Delete</md-button>
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
        id: this.bell.id,
        start: this.bell.start,
        end: this.bell.end,
        days: this.bell.days
      }

      window.ws.send({ event: 'timetable.bells.change', data: data })
      this.toggle()
    },
    deleteBell () {
      window.ws.send({ event: 'timetable.bells.delete', id: this.bell.id })
    }
  },
  props: ['bell']
}
</script>

<style scoped>
  #inputs {
    margin: 16px;
  }
</style>

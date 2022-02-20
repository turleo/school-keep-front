<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>Edit bell</md-dialog-title>

    <div id="inputs">

      <md-field>
        <label for="start">Start time</label>
        <md-input v-model="start" id="start" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="end">End time</label>
        <md-input v-model="end" id="end" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="days">Days</label>
        <md-select v-model="days" name="days" id="days" md-dense multiple>
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
      <md-button class="md-primary" @click="opened = false">Close</md-button>
      <md-button class="md-primary">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      opened: true,
      start: '',
      end: '',
      days: []
    }
  }
}
</script>

<style scoped>
  #inputs {
    margin: 16px;
  }
</style>

<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>{{ $t("common.edit.edit") }}</md-dialog-title>

    <div id="inputs">

      <md-field>
        <label for="start">{{ $t("settings.bells.start") }}</label>
        <md-input v-model="bell.start" id="start" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="end">{{ $t("settings.bells.end") }}</label>
        <md-input v-model="bell.end" id="end" type="time"></md-input>
      </md-field>

      <md-field>
        <label for="days">{{ $t("settings.bells.days") }}</label>
        <md-select v-model="bell.days" name="days" id="days" md-dense multiple>
          <md-option value="mo">{{ $t("common.days.monday") }}</md-option>
          <md-option value="tu">{{ $t("common.days.tuesday") }}</md-option>
          <md-option value="we">{{ $t("common.days.wednesday") }}</md-option>
          <md-option value="th">{{ $t("common.days.thursday") }}</md-option>
          <md-option value="fr">{{ $t("common.days.friday") }}</md-option>
          <md-option value="sa">{{ $t("common.days.saturday") }}</md-option>
          <md-option value="su">{{ $t("common.days.sunday") }}</md-option>
        </md-select>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button class="md-accent" @click="deleteBell">{{ $t("common.edit.delete") }}</md-button>
      <md-button class="md-primary" @click="toggle">{{ $t("common.edit.cancel") }}</md-button>
      <md-button class="md-primary" @click="save">{{ $t("common.edit.save") }}</md-button>
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
      window.ws.bellClass.change(this.bell)
      this.toggle()
    },
    deleteBell () {
      window.ws.bellClass.delete(this.bell)
      this.toggle()
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

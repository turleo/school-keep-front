<template>
  <div>
    <DateSwitcher :date="$route.params.day" :text="date.toLocaleDateString()"></DateSwitcher>
    <md-list>
      <md-ripple v-for="(hometask, i) in hometasks" v-bind:key="hometask.id" @click.native="setEdit(i)">
        <md-list-item>
          <md-icon>{{ hometask.subject.icon }}</md-icon>
          <span class="md-list-item-text">{{ hometask.subject.title }}</span>
        </md-list-item>
      </md-ripple>
    </md-list>
    <SeeTask :hometask="openedHometask" ref="editModal"></SeeTask>
  </div>
</template>

<script>
import DateSwitcher from '../components/Homework/DateSwitcher'
import SeeTask from '../components/Homework/SeeTask'
export default {
  name: 'Homework',
  components: { SeeTask, DateSwitcher },
  data () {
    return {
      openedHometaskId: 0
    }
  },
  computed: {
    date () {
      const day = new Date()
      day.setDate(day.getDate() + parseInt(this.$route.params.day))
      return day
    },
    hometasks () {
      return window.ws.hometaskClass.data.tasks[this.date.toLocaleDateString()]
    },
    hometasksByServerId () {
      return window.ws.hometaskClass.data.tasks_by_server_id
    },
    openedHometask () {
      if (this.hometasks === undefined) {
        return { subject: { id: 0 } }
      }
      return this.hometasksByServerId[this.openedHometaskId]
    }
  },
  methods: {
    setEdit (hometaskId) {
      this.openedHometaskId = hometaskId
      this.$refs.editModal.toggle()
    }
  }
}
</script>

<style scoped>

</style>

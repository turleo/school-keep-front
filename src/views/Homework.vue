<template>
  <div v-hammer:swipe="changeDay" style="min-height: calc(100vh - 100px)">
    <DateSwitcher :date="$route.params.day" ref="dateChange"
                  :text="`${date.toLocaleDateString()} ${days_names[date.getDay()]}`"></DateSwitcher>
    <md-list>
      <md-ripple v-for="hometask in hometasks" v-bind:key="hometask.id" @click.native="setEdit(hometask.id)">
        <md-list-item>
          <md-icon>{{ hometask.subject.icon }}</md-icon>
          <span class="md-list-item-text">{{ hometask.subject.title }}</span>
        </md-list-item>
      </md-ripple>
      <md-ripple @click.native="createNew">
        <md-list-item>
          <md-icon><svg-icon type="mdi" :path="mdiPlus"></svg-icon></md-icon>
          <span class="md-list-item-text">{{ $t('hometask.new') }}</span>
        </md-list-item>
      </md-ripple>
    </md-list>
    <SeeTask :hometask="openedHometask" ref="editModal"></SeeTask>
    <SelectSubject :date="date" ref="selectSubject"></SelectSubject>
  </div>
</template>

<script>
import DateSwitcher from '../components/Homework/DateSwitcher'
import SeeTask from '../components/Homework/SeeTask'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlus } from '@mdi/js'
import SelectSubject from '../components/Homework/SelectSubject'
export default {
  name: 'Homework',
  components: {
    SelectSubject,
    SeeTask,
    DateSwitcher,
    SvgIcon
  },
  data () {
    return {
      openedHometaskId: 0,
      days_names: [
        this.$t('common.days_short.monday'),
        this.$t('common.days_short.tuesday'),
        this.$t('common.days_short.wednesday'),
        this.$t('common.days_short.thursday'),
        this.$t('common.days_short.friday'),
        this.$t('common.days_short.saturday'),
        this.$t('common.days_short.sunday')
      ],
      mdiPlus: mdiPlus
    }
  },
  computed: {
    date () {
      const day = new Date()
      day.setDate(day.getDate() + parseInt(this.$route.params.day))
      return day
    },
    hometasks () {
      return window.store.state.hometasks.tasks[this.date.toLocaleDateString()]
    },
    hometasksByServerId () {
      return window.store.state.hometasks.tasks_by_server_id
    },
    openedHometask () {
      if (this.hometasks === undefined || !(this.openedHometaskId in this.hometasksByServerId)) {
        return { subject: { id: 0 } }
      }
      return this.hometasksByServerId[this.openedHometaskId]
    }
  },
  methods: {
    setEdit (hometaskId) {
      this.openedHometaskId = hometaskId
      this.$refs.editModal.toggle()
    },
    createNew () {
      this.$refs.selectSubject.toggle()
    },
    changeDay (e) {
      if (e.direction === 2) {
        this.$router.push(this.$refs.dateChange.next)
      } else if (e.direction === 4) {
        this.$router.push(this.$refs.dateChange.prev)
      }
    }
  }
}
</script>

<style scoped>
  .md-icon {
    margin-left: 0 !important;
  }
</style>

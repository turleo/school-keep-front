<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>{{ $t("common.days.monday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.tuesday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.wednesday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.thursday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.friday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.saturday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.sunday") }}</md-table-head>
      </md-table-row>

      <md-table-row v-for="(n, i) in max_bells" v-bind:key="i">
        <md-table-cell @click.native="setEdit(lessons.mo[bells.mo[i].id], bells.mo[i], 'mo')">
          <p v-if="bells.mo[i]" class="emoji-icon">
            <span v-if="lessons.mo[bells.mo[i].id]">{{ lessons.mo[bells.mo[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.tu[bells.tu[i].id], bells.tu[i], 'tu')">
          <p v-if="bells.tu[i]" class="emoji-icon">
            <span v-if="lessons.tu[bells.tu[i].id]">{{ lessons.tu[bells.tu[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.we[bells.we[i].id], bells.we[i], 'we')">
          <p v-if="bells.we[i]" class="emoji-icon">
            <span v-if="lessons.we[bells.we[i].id]">{{ lessons.we[bells.we[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.th[bells.th[i].id], bells.th[i], 'th')">
          <p v-if="bells.th[i]" class="emoji-icon">
            <span v-if="lessons.th[bells.th[i].id]">{{ lessons.th[bells.th[i].id].subject.icon }}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.fr[bells.fr[i].id], bells.fr[i], 'fr')">
          <p v-if="bells.fr[i]" class="emoji-icon">
            <span v-if="lessons.fr[bells.fr[i].id]">{{ lessons.fr[bells.fr[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.sa[bells.sa[i].id], bells.sa[i], 'sa')">
          <p v-if="bells.sa[i]" class="emoji-icon">
            <span v-if="lessons.sa[bells.sa[i].id]">{{ lessons.sa[bells.sa[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
        <md-table-cell @click.native="setEdit(lessons.su[bells.su[i].id], bells.su[i], 'su')">
          <p v-if="bells.su[i]" class="emoji-icon">
            <span v-if="lessons.su[bells.su[i].id]">{{ lessons.su[bells.su[i].id].subject.icon}}</span>
            <span v-else>🚫</span>
          </p>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <Edit :bell="edit_bell" :lesson="edit_lesson" ref="edit"></Edit>
  </div>
</template>

<script>
import Edit from '../Timetable/Edit'
export default {
  name: 'Timetable',
  components: { Edit },
  data () {
    return {
      bells_orig: [],
      edit_bell: {
        start: '00:00',
        end: '00:00',
        days: []
      },
      edit_lesson: {}
    }
  },
  computed: {
    bells: () => { return window.ws.bellClass.data.bells },
    max_bells: () => { return window.ws.bellClass.data.max_bells },
    lessons: () => { return window.ws.lessonsClass.data.lessons }
  },
  methods: {
    setEdit (lesson, bell, day) {
      this.edit_bell = bell
      this.edit_lesson = lesson
      if (this.edit_lesson === undefined) {
        this.edit_lesson = { subject: {}, bell: this.edit_bell, day: day }
      }
      this.$refs.edit.toggle()
    }
  }
}
</script>

<style scoped>
.emoji-icon {
  font-size: 40px;
}
</style>

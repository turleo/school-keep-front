<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>{{ $t("common.edit.edit") }}</md-dialog-title>
    <md-content>
      <p>{{ bell.start }} - {{ bell.end }}</p>
      <md-radio v-for="subject in subjects" v-bind:key="subject.id" :value="subject" v-model="lesson.subject" @click.native="change">{{ subject.icon }} {{ subject.title }}</md-radio>
    </md-content>
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
    },
    change () {
      if (this.lesson.bell === undefined) {
        this.lesson.bell = this.bell
      }
      if (this.lesson.day === undefined) {
        this.lesson.day = this.day
      }
      window.ws.lessonsClass.change(this.lesson)
      this.toggle()
    }
  },
  props: [
    'lesson',
    'bell'
  ],
  computed: {
    subjects: () => { return window.store.state.subjects.subjects }
  }
}
</script>

<style scoped>
.md-content {
  margin: 16px;
  overflow: scroll;
}
.md-radio {
  display: flex;
}
</style>

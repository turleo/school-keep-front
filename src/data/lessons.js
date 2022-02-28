import Vue from 'vue'

export default class Lessons {
  constructor () {
    this.ask = 'timetable.lessons.fetch'
    this.subjects = []
    this.orig = []
    this.data = new Vue({
      data: {
        lessons: {
          mo: {},
          tu: {},
          we: {},
          th: {},
          fr: {},
          sa: {},
          su: {}
        },
        max_bells: 0
      }
    })
  }

  listener (e) {
    this.orig = e.data
    console.log(this.orig)
    this.orig.forEach(e => {
      this.data.lessons[e.day][e.bell.id] = e
    })
  }

  change (lesson) {
    window.ws.send({ event: 'timetable.lessons.change', data: lesson })
  }

  delete (subject) {
    window.ws.send({ event: 'timetable.lessons.delete', id: subject.id })
  }
}

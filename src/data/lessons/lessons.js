export default class Lessons {
  constructor () {
    this.ask = 'timetable.lessons.fetch'
    this.subjects = []
  }

  change (lesson) {
    window.ws.send({ event: 'timetable.lessons.change', data: lesson })
  }

  delete (subject) {
    window.ws.send({ event: 'timetable.lessons.delete', id: subject.id })
  }
}

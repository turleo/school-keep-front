export default class Subjects {
  constructor () {
    this.ask = 'timetable.subjects.fetch'
  }

  change (subject) {
    const data = {
      id: subject.id,
      title: subject.title,
      icon: subject.icon,
      room: subject.room,
      teacher: subject.teacher
    }
    console.log(data)

    window.ws.send({ event: 'timetable.subjects.change', data: data })
  }

  delete (subject) {
    window.ws.send({ event: 'timetable.subjects.delete', id: subject.id })
  }
}

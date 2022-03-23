export default class Bells {
  constructor () {
    this.ask = 'timetable.bells.fetch'
  }

  change (bell) {
    const data = {
      id: bell.id,
      start: bell.start,
      end: bell.end,
      days: bell.days
    }

    window.ws.send({ event: 'timetable.bells.change', data: data })
  }

  delete (bell) {
    window.ws.send({ event: 'timetable.bells.delete', id: bell.id })
  }
}

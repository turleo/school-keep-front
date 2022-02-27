import Vue from 'vue'

export default class Bells {
  constructor () {
    this.ask = 'timetable.bells.fetch'
    this.bells_orig = []
    this.data = new Vue({
      data: {
        bells: {
          mo: [],
          tu: [],
          we: [],
          th: [],
          fr: [],
          sa: [],
          su: []
        },
        max_bells: 0
      }
    })
  }

  bellsListener (e) {
    this.data.bells = {
      mo: [],
      tu: [],
      we: [],
      th: [],
      fr: [],
      sa: [],
      su: []
    }

    this.bells_orig = e.data
    this.bells_orig.forEach(e => {
      if (e.days.includes('mo')) {
        this.data.bells.mo.push(e)
      }
      this.data.bells.mo = this.data.bells.mo.sort()
      if (e.days.includes('tu')) {
        this.data.bells.tu.push(e)
      }
      this.data.bells.tu = this.data.bells.tu.sort()
      if (e.days.includes('we')) {
        this.data.bells.we.push(e)
      }
      this.data.bells.we = this.data.bells.we.sort()
      if (e.days.includes('th')) {
        this.data.bells.th.push(e)
      }
      this.data.bells.th = this.data.bells.th.sort()
      if (e.days.includes('fr')) {
        this.data.bells.fr.push(e)
      }
      this.data.bells.fr = this.data.bells.fr.sort()
      if (e.days.includes('sa')) {
        this.data.bells.sa.push(e)
      }
      this.data.bells.sa = this.data.bells.sa.sort()
      if (e.days.includes('su')) {
        this.data.bells.su.push(e)
      }
      this.data.bells.su = this.data.bells.su.sort()
    })
    this.data.max_bells = Math.max(
      this.data.bells.mo.length,
      this.data.bells.tu.length,
      this.data.bells.we.length,
      this.data.bells.th.length,
      this.data.bells.fr.length,
      this.data.bells.sa.length,
      this.data.bells.su.length
    )
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

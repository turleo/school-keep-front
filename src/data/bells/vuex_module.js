export default {
  state: {
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
  },
  mutations: {
    changeBells (state, bellsOrig) {
      function compare (a, b) {
        if (a.start > b.start) {
          return 1
        } else if (a.start < b.start) {
          return -1
        } else {
          return 0
        }
      }

      const bells = {
        mo: [],
        tu: [],
        we: [],
        th: [],
        fr: [],
        sa: [],
        su: []
      }

      bellsOrig.forEach(e => {
        if (e.days.includes('mo')) {
          bells.mo.push(e)
        }
        bells.mo = bells.mo.sort(compare)
        if (e.days.includes('tu')) {
          bells.tu.push(e)
        }
        bells.tu = bells.tu.sort(compare)
        if (e.days.includes('we')) {
          bells.we.push(e)
        }
        bells.we = bells.we.sort(compare)
        if (e.days.includes('th')) {
          bells.th.push(e)
        }
        bells.th = bells.th.sort(compare)
        if (e.days.includes('fr')) {
          bells.fr.push(e)
        }
        bells.fr = bells.fr.sort(compare)
        if (e.days.includes('sa')) {
          bells.sa.push(e)
        }
        bells.sa = bells.sa.sort(compare)
        if (e.days.includes('su')) {
          bells.su.push(e)
        }
        bells.su = bells.su.sort(compare)
      })
      state.max_bells = Math.max(
        bells.mo.length,
        bells.tu.length,
        bells.we.length,
        bells.th.length,
        bells.fr.length,
        bells.sa.length,
        bells.su.length
      )
      state.bells = bells
    }
  },
  getters: {
    getBells (state) {
      return {
        bells: state.bells,
        max_bells: state.max_bells
      }
    }
  },
  actions: {
    changeBell (bell) {
      const data = {
        id: bell.id,
        start: bell.start,
        end: bell.end,
        days: bell.days
      }

      window.ws.send({ event: 'timetable.bells.change', data: data })
    },
    deleteBell (bell) {
      window.ws.send({ event: 'timetable.bells.delete', id: bell.id })
    }
  }
}

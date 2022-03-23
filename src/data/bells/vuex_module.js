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
    max_bells: 0,
    current: new Date()
  },
  mutations: {
    updateTime (state) {
      state.current = new Date()
    },
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
    },

    todayBells (state, getters) {
      let bells
      switch (new Date().getDay()) {
        case 1:
          bells = state.bells.mo
          break
        case 2:
          bells = state.bells.tu
          break
        case 3:
          bells = state.bells.we
          break
        case 4:
          bells = state.bells.th
          break
        case 5:
          bells = state.bells.fr
          break
        case 6:
          bells = state.bells.sa
          break
        case 7:
          bells = state.bells.su
          break
      }
      state.todayBells = bells
      return bells
    },
    nextBell (state, getters) {
      return getters.todayBells[getters.nowBellId]
    },
    nowBellId (state, getters) {
      let nowLesson = 0
      const nowTime = state.current.getHours() * 60 * 60 + state.current.getMinutes() * 60 + state.current.getSeconds()
      for (let i = getters.todayBells.length; i--; i > 0) {
        const delta = nowTime - strToTime(getters.todayBells[i].end)
        if (delta < 0) {
          nowLesson = i
        }
      }
      return nowLesson
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

function strToTime (str) {
  const hours = parseInt(str.slice(0, 2))
  let minutes = parseInt(str.slice(3, 5))
  let seconds = parseInt(str.slice(6, 8))
  minutes += hours * 60
  seconds += minutes * 60
  return seconds
}

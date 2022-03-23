export default {
  state: {
    lessons: {
      mo: {},
      tu: {},
      we: {},
      th: {},
      fr: {},
      sa: {},
      su: {}
    }
  },
  mutations: {
    changeLessons (state, orig) {
      orig.forEach(e => {
        state.lessons[e.day][e.bell.id] = e
      })
    }
  },
  getters: {}
}

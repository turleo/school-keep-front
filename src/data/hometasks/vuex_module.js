export default {
  state: {
    tasks: {},
    tasks_by_server_id: {}
  },
  mutations: {
    changeHometasks (state, data) {
      state.tasks = {}
      state.tasks_by_server_id = {}
      data.forEach(hometask => {
        let deadline = hometask.deadline
        deadline = new Date(deadline).toLocaleDateString()
        if (!(deadline in state.tasks)) {
          state.tasks[deadline] = []
        }
        state.tasks[deadline].push(hometask)
        state.tasks_by_server_id[hometask.id] = hometask
      })
    }
  }
}

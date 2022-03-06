import Vue from 'vue'

export default class Hometask {
  constructor () {
    this.ask = 'hometask.fetch'
    this.data = new Vue({
      data: {
        tasks: {}
      }
    })
  }

  listener (e) {
    this.data.tasks = {}
    e.data.forEach(hometask => {
      let deadline = hometask.deadline
      deadline = new Date(deadline).toLocaleDateString()
      if (!(deadline in this.data.tasks)) {
        this.data.tasks[deadline] = []
      }
      this.data.tasks[deadline].push(hometask)
    })
  }

  changeTask (task) {
    window.ws.send({ event: 'hometask.task.change', data: task })
  }

  change (hometask) {
    const data = {
      id: hometask.id,
      deadline: hometask.deadline,
      subject: hometask.subject.id
    }
    console.log(data)

    window.ws.send({ event: 'hometask.change', data: data })
  }

  delete (subject) {
    window.ws.send({ event: 'timetable.subjects.delete', id: subject.id })
  }
}

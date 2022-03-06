import Vue from 'vue'

export default class Hometask {
  constructor () {
    this.ask = 'hometask.fetch'
    this.data = new Vue({
      data: {
        tasks: {},
        tasks_by_server_id: {}
      }
    })
  }

  listener (e) {
    this.data.tasks = {}
    this.data.tasks_by_server_id = {}
    e.data.forEach(hometask => {
      let deadline = hometask.deadline
      deadline = new Date(deadline).toLocaleDateString()
      if (!(deadline in this.data.tasks)) {
        this.data.tasks[deadline] = []
      }
      this.data.tasks[deadline].push(hometask)
      this.data.tasks_by_server_id[hometask.id] = hometask
    })
  }

  changeTask (task) {
    const newTask = {
      id: task.id,
      done: task.done,
      text: task.text,
      homework_id: task.homework_id
    }
    window.ws.send({ event: 'hometask.task.change', data: newTask })
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

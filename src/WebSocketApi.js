import router from './router'
import Bells from './data/bells/bells'
import Subjects from './data/subjects'
import Lessons from './data/lessons/lessons'
import Hometask from './data/hometask'

export default class WebSocketApi {
  constructor () {
    this.connect()
    this.ready = false
    this.queue = []
    this.listeners = {}

    setInterval(this.reconnect, 1000)

    this.setListeners()
  }

  setListeners () {
    this.bellClass = new Bells()
    this.send({ event: this.bellClass.ask })

    this.subjectClass = new Subjects()
    this.send({ event: this.subjectClass.ask })

    this.lessonsClass = new Lessons()
    this.send({ event: this.lessonsClass.ask })

    this.hometaskClass = new Hometask()
    this.send({ event: this.hometaskClass.ask })
  }

  localListener (ev) {
    const data = JSON.parse(ev.data)
    switch (data.event) {
      case 'authentication.auth': {
        const token = localStorage.getItem('token')
        if (token === null) {
          router.push('/login').then(() => {}).catch(() => {})
        } else {
          window.ws.send({ event: 'authentication.token', token: token })
        }
        window.ws.ready = true
        window.ws.send()
        break
      }
      case 'authentication.token':
        localStorage.setItem('token', data.token)
        window.ws.ready = true
        if (router.currentRoute.path === '/login') {
          router.push('/').then(() => {}).catch(() => {})
          router.go(router.currentRoute)
        }
        break
      case 'authentication.error':
        localStorage.removeItem('token')
        router.push('/login').then(() => {}).catch(() => {})
        break
      case 'timetable.bells':
        window.store.commit('changeBells', data.data)
        break
      case 'timetable.subjects':
        window.ws.subjectClass.listener(data)
        break
      case 'timetable.lessons':
        window.store.commit('changeLessons', data.data)
        break
      case 'hometask':
        window.ws.hometaskClass.listener(data)
        break
    }
    if (window.ws.listeners[data.event] !== undefined && window.ws.ready) {
      window.ws.listeners[data.event](data)
    }
  }

  connect () {
    console.clear()
    console.log('Connecting...')
    this.websocket = new WebSocket(process.env.VUE_APP_WEBSOCKET_URL)

    this.websocket.onmessage = this.localListener
  }

  reconnect () {
    if (window.ws.websocket.readyState === WebSocket.CLOSED) {
      window.ws.connect()
    }
  }

  setListener (listener, event) {
    window.ws.listeners[event] = listener
  }

  send (data) {
    if (data !== undefined) {
      if (data.event.startsWith('authentication.')) {
        this.websocket.send(JSON.stringify(data))
      } else {
        this.queue.push(data)
      }
    }
    if (this.ready) {
      this.queue.forEach(e => {
        this.websocket.send(JSON.stringify(e))
      })
      this.queue = []
    }
  }
}

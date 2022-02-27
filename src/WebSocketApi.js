import router from './router'
import Bells from './data/bells'
import Subjects from './data/subjects'

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
      case 'authentication.error':
        localStorage.removeItem('token')
        router.push('/login').then(() => {}).catch(() => {})
        break
      case 'timetable.bells':
        window.ws.bellClass.bellsListener(data)
        break
      case 'timetable.subjects':
        window.ws.subjectClass.listener(data)
        break
    }
    if (window.ws.listeners[data.event] !== undefined && window.ws.ready) {
      window.ws.listeners[data.event](data)
    }
  }

  connect () {
    console.log('Connecting...')
    this.websocket = new WebSocket('ws://127.0.0.1:8000/wsapi/')

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

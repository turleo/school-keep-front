import router from './router'

export default class WebSocketApi {
  constructor () {
    this.connect()
    this.ready = false
    this.queue = []

    setInterval(this.reconnect, 1000)
  }

  localListener (ev) {
    const data = JSON.parse(ev.data)
    if (data.event === 'authentication.auth') {
      const token = localStorage.getItem('token')
      if (token === null) {
        router.push('/login').then(() => {}).catch(() => {})
      } else {
        window.ws.send({ event: 'authentication.token', token: token })
      }
      window.ws.ready = true
      window.ws.send()
    } else if (data.event === 'authentication.error') {
      localStorage.removeItem('token')
      router.push('/login').then(() => {}).catch(() => {})
    }
    if (window.ws.listener !== undefined && window.ws.ready) {
      window.ws.listener(data)
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

  setListener (listener) {
    window.ws.listener = listener
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
    }
  }
}

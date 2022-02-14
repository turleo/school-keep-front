import router from './router'

export default class WebSocketApi {
  constructor () {
    this.connect()
  }

  localListener (ev) {
    const data = JSON.parse(ev.data)
    if (data.event === 'authentication.auth') {
      const token = localStorage.getItem('token')
      if (token === null) {
        router.push('/login').then(() => {}).catch(() => {})
      } else {
        this.send({ event: 'authentication.token', token: token })
      }
    }
    if (window.ws.listener !== undefined) {
      window.ws.listener(data)
    }
  }

  connect () {
    console.log('Disconnected(( Fixing...')
    this.websocket = new WebSocket('ws://127.0.0.1:8000/wsapi/')
    this.websocket.onclose = this.connect
    this.websocket.onmessage = this.localListener
  }

  setListener (listener) {
    window.ws.listener = listener
  }

  send (data) {
    this.websocket.send(JSON.stringify(data))
  }
}

import router from './router'

export default class WebSocketApi {
  constructor () {
    this.websocket = new WebSocket('ws://127.0.0.1:8000/wsapi/')
    this.websocket.onmessage = this.localListener
  }

  localListener (ev) {
    const data = JSON.parse(ev.data)
    if (data.event === 'auth') {
      router.push('/login')
    }
    if (window.ws.listener !== undefined) {
      window.ws.listener(data)
    }
  }

  setListener (listener) {
    window.ws.listener = listener
  }

  send (data) {
    this.websocket.send(JSON.stringify(data))
  }
}

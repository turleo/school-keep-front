<template>
  <form>
    <h1 class="md-title">Login</h1>
    <md-field :class="loginClass">
      <label for="username">Username</label>
      <md-input name="username" id="username" v-model="username" :disabled="sending" required
                @keydown="error = false" />
      <span class="md-error" v-if="error">Wrong username</span>
    </md-field>
    <md-field :class="loginClass">
      <label for="password">Password</label>
      <md-input name="password" id="password" v-model="password" :disabled="sending" required
          @keydown="error = false" type="password" />
      <span class="md-error" v-if="error">Wrong password</span>
    </md-field>
    <md-button class="md-primary" :disabled="sending" @click="send" >Login</md-button>
  </form>
</template>

<script>
import router from '../router'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      sending: false,
      error: false
    }
  },
  methods: {
    send () {
      this.sending = true
      window.ws.setListener(this.checkAnswer)
      window.ws.send({ event: 'authentication.user', username: this.username, password: this.password })
    },
    checkAnswer (data) {
      console.log(data)
      if (data.event === 'authentication.error') {
        this.sending = false
        this.error = true
      } else if (data.event === 'authentication.token') {
        localStorage.setItem('token', data.token)
        router.back()
      }
    }
  },
  computed: {
    loginClass () {
      return {
        'md-invalid': this.error
      }
    }
  }

}
</script>

<style scoped>
  form {
    max-width: 500px;
    margin: 0 auto;
  }
</style>

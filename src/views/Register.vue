<template>
  <form>
    <h1 class="md-title">{{ $t("drawer.register") }}</h1>
    <md-field :class="loginClass">
      <label for="username">{{  $t("login.username") }}</label>
      <md-input name="username" id="username" v-model="username" :disabled="sending" required
                @keydown="error = false" v-on:keyup.enter="focusNext" autofocus type="email" />
      <span class="md-error" v-if="error">{{ $t("login.wrongUsername") }}</span>
    </md-field>
    <md-field :class="loginClass">
      <label for="password">{{ $t("login.password") }}</label>
      <md-input name="password" id="password" v-model="password" :disabled="sending" required
                @keydown="error = false" type="password" v-on:keyup.enter="send" />
      <span class="md-error" v-if="error">{{ $t("login.wrongPassword") }}</span>
    </md-field>
    <md-button class="md-primary right-button" :disabled="sending" @click="send">{{ $t("drawer.login") }}</md-button>

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
      window.ws.setListener(this.checkAnswer, 'authentication.token')
      window.ws.send({ event: 'authentication.register', username: this.username, password: this.password })
    },
    checkAnswer (data) {
      if (data.event === 'authentication.error') {
        this.sending = false
        this.error = true
      } else if (data.event === 'authentication.token') {
        localStorage.setItem('token', data.token)
        router.push('/settings')
        window.location.reload()
      }
    },
    focusNext (e) {
      const inputs = Array.from(e.target.form.querySelectorAll('input'))
      const index = inputs.indexOf(e.target)

      if (index < inputs.length) {
        inputs[index + 1].focus()
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
.right-button {
  display: block;
  margin-left: auto;
}
</style>

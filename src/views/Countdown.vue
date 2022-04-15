<template>
  <div>
    <md-progress-bar md-mode="determinate" :md-value="progress" class="time"></md-progress-bar>
    <h1 v-if="!ended" class="lesson-progress">{{ $t(template, { time: nowLesson + 1 }) }} <br> {{ deltaToStr }}</h1>
    <h1 v-else class="lesson-progress">{{ $t('countdown.ended') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  data () {
    return {
      current: new Date(),
      nowLesson: 0,
      template: 'countdown.tillEnd'
    }
  },
  methods: {
    strToTime (str) {
      const hours = parseInt(str.slice(0, 2))
      let minutes = parseInt(str.slice(3, 5))
      let seconds = parseInt(str.slice(6, 8))
      minutes += hours * 60
      seconds += minutes * 60
      return seconds
    },
    getDelta (a, b) {
      return a - b
    },
    checkStarted (delta) {
      if (delta > this.bellLength) {
        this.template = 'countdown.tillStart'
      } else {
        this.template = 'countdown.tillEnd'
      }
    }
  },
  computed: {
    showDelta () {
      const nowTime = this.current.getHours() * 60 * 60 + this.current.getMinutes() * 60 + this.current.getSeconds()
      let delta = -this.getDelta(nowTime, this.strToTime(window.store.getters.nextBell.end))
      this.checkStarted(delta)
      if (this.template === 'countdown.tillStart') {
        delta -= this.bellLength
      }
      return delta
    },
    deltaToStr () {
      let delta = this.showDelta
      const hours = Math.floor(delta / (60 * 60))
      delta -= hours * 60 * 60
      const minutes = Math.floor(delta / 60)
      delta -= minutes * 60
      return `${hours}:${minutes.toString().padStart(2, '0')}:${delta.toString().padStart(2, '0')}`
    },
    bellLength () {
      return this.getDelta(this.strToTime(window.store.getters.nextBell.end), this.strToTime(window.store.getters.nextBell.start))
    },
    progress () {
      return (1 - this.showDelta / this.bellLength) * 100
    },
    ended () {
      return this.showDelta < 0
    }
  },
  mounted () {
    setInterval(() => {
      this.current = new Date()
      const nowTime = this.current.getHours() * 60 * 60 + this.current.getMinutes() * 60 + this.current.getSeconds()
      for (let i = window.store.getters.todayBells.length; i--; i > 0) {
        const delta = this.getDelta(nowTime, this.strToTime(window.store.getters.todayBells[i].end))
        if (delta < 0) {
          this.nowLesson = i
        }
      }
    }, 1000)
  }
}
</script>

<style scoped>
h1 {
  font-size: 10vw;
  line-height: 15vw;
  grid-area: 1 / 1;
  z-index: 1;
  margin: 0;
}
.md-progress-bar {
  max-width: 91vw;
  height: 30vw;
  grid-area: 1 / 1;
  z-index: 0;
}

div {
  display: grid;
}
</style>

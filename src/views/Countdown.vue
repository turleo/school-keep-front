<template>
  <div>
    <md-progress-bar md-mode="determinate" :md-value="progress" class="time"></md-progress-bar>
    <h1>{{ $t('countdown.tillEnd', { time: nowLesson + 1 }) }} <br> {{ deltaToStr }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  data () {
    return {
      current: new Date(),
      nowLesson: 0
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
    }
  },
  computed: {
    showDelta () {
      const nowTime = this.current.getHours() * 60 * 60 + this.current.getMinutes() * 60 + this.current.getSeconds()
      return -this.getDelta(nowTime, this.strToTime(window.store.getters.nextBell.end))
    },
    deltaToStr () {
      let delta = this.showDelta
      const hours = Math.floor(delta / (60 * 60))
      delta -= hours * 60 * 60
      const minutes = Math.floor(delta / 60)
      delta -= minutes * 60
      return `${hours}:${minutes}:${delta}`
    },
    bellLength () {
      return this.getDelta(this.strToTime(window.store.getters.nextBell.end), this.strToTime(window.store.getters.nextBell.start))
    },
    progress () {
      console.log(this.bellLength, this.showDelta)
      return (1 - this.showDelta / this.bellLength) * 100
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
  position: absolute;
  top: 0vh;
  margin-left: 50px;
  line-height: 15vw;
}
.md-progress-bar {
  max-width: 91vw;
  height: 30vw;
}
</style>

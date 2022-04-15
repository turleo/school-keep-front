<template>
  <div class="home">
    <Countdown class="countdown" />
    <h1 class="title">{{ $t('drawer.homework') }}</h1>
    <AllHomework class="homework" />
  </div>
</template>

<script>
import Countdown from './Countdown'
import AllHomework from './AllHomework'

export default {
  name: 'Home',
  components: {
    AllHomework,
    Countdown
  },
  mounted () {
    console.log(this.$store.state.test)
  }
}
</script>

<style scoped>
  >>> .lesson-progress {
    font-size: 50px!important;
  }
  >>> .md-progress-bar {
    max-height: 100px;
  }
  .homework {
    overflow-y: hidden;
  }
</style>

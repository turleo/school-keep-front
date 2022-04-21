<template>
  <md-steppers :md-active-step.sync="active" md-linear>
    <md-step id="first" :md-label="$t('onboarding.title')" :md-done.sync="welcome_now">
      <h1>{{ $t("onboarding.welcome") }}</h1>
      <h2>{{ $t("onboarding.welcome_subtitle") }}</h2>
      <md-button class="md-raised md-primary" @click="setDone('first', 'subjects_now')">{{ $t("onboarding.start") }}</md-button>
      <br>
      <router-link to="settings"><md-button class="md-primary">{{ $t("onboarding.skip") }}</md-button></router-link>
    </md-step>

    <md-step id="subjects_now" :md-label="$t('onboarding.step2')" :md-done.sync="subjects_now">
      <h1>{{ $t('onboarding.subjects_title') }}</h1>
      <Subjects></Subjects>
      <md-button class="md-raised md-primary" @click="setDone('subjects_now', 'bells_now')">{{ $t("onboarding.next") }}</md-button>
    </md-step>

    <md-step id="bells_now" :md-label="$t('onboarding.step3')"  :md-done.sync="bells_now">
      <h1>{{ $t('onboarding.bells_title') }}</h1>
      <Bells></Bells>
      <md-button class="md-raised md-primary" @click="setDone('bells_now', 'timetable_now')">{{ $t("onboarding.next") }}</md-button>
    </md-step>

    <md-step id="timetable_now" :md-label="$t('onboarding.step4')"  :md-done.sync="timetable_now">
      <h1>{{ $t('onboarding.timetable_title') }}</h1>
      <p>{{ $t('onboarding.timetable_subtitle') }}</p>
      <Timetable></Timetable>
      <md-button class="md-raised md-primary" @click="setDone('timetable_now', 'congratulations')">{{ $t("onboarding.next") }}</md-button>
    </md-step>

    <md-step id="congratulations" :md-label="$t('onboarding.step5')" :md-done.sync="welcome_now">
      <p style="font-size: 250px; margin-bottom: 150px; margin-top: 150px">🥳</p>
      <h1>{{ $t("onboarding.congratulations.title") }}</h1>
      <a @click="$router.push('/').then(() => { $router.go() })">{{ $t("onboarding.congratulations.link") }}</a>
    </md-step>
  </md-steppers>
</template>

<script>
import Subjects from '../settings/Subjects/Subjects'
import Bells from '../settings/Bells/Bells'
import Timetable from '../settings/Timetable/Timetable'
export default {
  name: 'OnBoarding',
  components: { Timetable, Bells, Subjects },
  data: () => ({
    active: 'first',
    welcome_now: false,
    subjects_now: false,
    bells_now: false,
    timetable_now: false,
    congratulations: false
  }),
  methods: {
    setDone (id, index) {
      this[id] = true

      if (index) {
        this.active = index
      }
    }
  }
}
</script>

<style scoped>
>>> .md-fab {
  position: unset;
}
</style>

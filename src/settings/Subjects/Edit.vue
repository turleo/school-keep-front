<template>
  <md-dialog :md-active.sync="opened">
    <md-dialog-title>{{ $t("common.edit.edit") }}</md-dialog-title>

    <div id="inputs">

      <md-field>
        <label for="title">{{ $t("settings.subjects.edit.name") }}</label>
        <md-input v-model="subject.title" id="title" required></md-input>
      </md-field>
      <div>
        <p>{{ $t("settings.subjects.edit.icon") }}</p>
        <md-button id="icon" class="md-dense md-primary"
                   style="height: 100px; font-size: 90px"
                   @click="showEmoji = !showEmoji">{{ subject.icon }}</md-button>
        <br>
        <VEmojiPicker @select="selectEmoji" v-show="showEmoji"
                      :style="{ width: '340px', height: '440px'}"/>
      </div>
      <md-field>
        <label for="room">{{ $t("settings.subjects.edit.room") }}</label>
        <md-input v-model="subject.room" id="room"></md-input>
      </md-field>
      <md-field>
        <label for="teacher">{{ $t("settings.subjects.edit.teacher") }}</label>
        <md-input v-model="subject.teacher" id="teacher"></md-input>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button class="md-accent" @click="deleteSubject">{{  $t("common.edit.delete") }}</md-button>
      <md-button class="md-primary" @click="toggle">{{  $t("common.edit.cancel") }}</md-button>
      <md-button class="md-primary" @click="save">{{  $t("common.edit.save") }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { VEmojiPicker } from 'v-emoji-picker'

export default {
  name: 'Edit',
  data () {
    return {
      opened: false,
      showEmoji: false
    }
  },
  components: {
    VEmojiPicker
  },
  methods: {
    toggle () {
      this.opened = !this.opened
    },
    save () {
      window.ws.subjectClass.change(this.subject)
      this.toggle()
    },
    deleteSubject () {
      window.ws.subjectClass.delete(this.subject)
      this.toggle()
    },

    selectEmoji (emoji) {
      this.subject.icon = emoji.data
      this.showEmoji = false
    }
  },
  props: ['subject']
}
</script>

<style scoped>
#inputs {
  margin: 16px;
}
</style>

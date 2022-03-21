<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>{{ $t("common.days.monday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.tuesday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.wednesday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.thursday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.friday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.saturday") }}</md-table-head>
        <md-table-head>{{ $t("common.days.sunday") }}</md-table-head>
      </md-table-row>

      <md-table-row v-for="(n, i) in max_bells" v-bind:key="i">
        <md-table-cell @click.native="setEdit(bells.mo[i])"><p v-if="bells.mo[i]">{{ bells.mo[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.tu[i])"><p v-if="bells.tu[i]">{{ bells.tu[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.we[i])"><p v-if="bells.we[i]">{{ bells.we[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.th[i])"><p v-if="bells.th[i]">{{ bells.th[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.fr[i])"><p v-if="bells.fr[i]">{{ bells.fr[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.sa[i])"><p v-if="bells.sa[i]">{{ bells.sa[i]['start'] }}</p></md-table-cell>
        <md-table-cell @click.native="setEdit(bells.su[i])"><p v-if="bells.su[i]">{{ bells.su[i]['start'] }}</p></md-table-cell>
      </md-table-row>

    </md-table>
    <Edit :bell="edit_bell" ref="editModal"></Edit>
    <md-button class="md-fab" @click="setEdit({id: 0, start: '00:00', end: '00:00', days: []})">
      <md-icon><svg-icon type="mdi" :path="add"></svg-icon></md-icon>
    </md-button>
  </div>
</template>

<script>
import Edit from './Edit'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlus } from '@mdi/js'

export default {
  name: 'Bells',
  components: {
    Edit,
    SvgIcon
  },
  data () {
    return {
      bells_orig: [],
      edit_bell: {
        start: '00:00',
        end: '00:00',
        days: []
      },
      add: mdiPlus
    }
  },
  computed: {
    bells: () => {
      return window.store.getters.getBells.bells
    },
    max_bells: () => {
      console.log(window.store.state)
      return window.store.getters.getBells.max_bells
    }
  },
  methods: {
    setEdit (bell) {
      this.edit_bell = bell
      this.$refs.editModal.toggle()
    }
  }
}
</script>

<style scoped>
  .md-fab {
    position: absolute;
    bottom: 16px;
    right: 16px
  }
</style>

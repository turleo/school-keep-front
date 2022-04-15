<template>
  <router-link :to="to">
    <md-ripple>
      <md-list-item>
        <md-icon><svg-icon type="mdi" :path="icon"></svg-icon></md-icon>
        <span class="md-list-item-text">{{ $t(title) }}</span>
      </md-list-item>
    </md-ripple>
  </router-link>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: 'Item',
  components: {
    SvgIcon
  },
  props: ['to', 'icon', 'title']
}
</script>

<style scoped>
  .md-list-item-text {
    color: var(--md-theme-default-text-primary-on-background);
  }
</style>

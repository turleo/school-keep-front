<template>
  <article class="about">
    <img src="../assets/logo.png" alt="logo" width="200" height="200" />
    <h1 style="margin-bottom: 8px">{{ $t('title') }}</h1>
    <p style="margin-top: 0; font-size: 13px">{{  $t('about.subtitle') }}</p>
    <p>{{ $t('about.description') }}</p>
    <a :href="$t('about.presentation_url')" target="_blank" rel="noopener">{{ $t('about.presentation') }}</a>
    <a :href="$t('about.feedback_url')" target="_blank" rel="noopener">{{ $t('about.feedback') }}</a>
  </article>
</template>

<style scoped>
a {
  display: block;
  margin-bottom: 8px;
}
</style>

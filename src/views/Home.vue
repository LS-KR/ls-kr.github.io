<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import homeHtml from '@/assets/Home.md'

@Component({})
export default class Home extends Vue {
  html = homeHtml
}
</script>

<template>
  <div class="markdown" v-html="html"></div>
</template>

<style lang="scss">
@import '@/css/markdown';
</style>

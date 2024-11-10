<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ContactList from '@/components/ContactList.vue'
import { Component, Vue } from 'vue-facing-decorator'
import aboutHtml from '@/assets/About.md'

@Component({
  components: { ContactList }
})
export default class About extends Vue {
  html = aboutHtml
}
</script>

<template>
  <div class="markdown">
    <h2>Contact with me?</h2>
  </div>
  <ContactList />
  <hr />
  <div class="markdown" v-html="html"/>
</template>

<style lang="scss">
@import "@/css/latte.scss";
@import "@/css/markdown";

hr {
  display: block;
  height: 0;
  border-width: 0.5px;
  border-style: solid;
  border-image: repeating-linear-gradient(45deg, $pink 0, $pink 20px, $maroon 20px, $maroon 40px) 0.5;
  width: calc(100% - 4rem);
  margin: 1em auto;
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import { dataHost } from '@/logic/config'
import { Component, Vue } from 'vue-facing-decorator'
import docs_image from '@/data/docs-image.yaml'

@Component({
  components: { BlogCard }
})
export default class Articles extends Vue {
  docs_image = docs_image
  list = [] as string[]

  created() {
    fetch(dataHost + 'list.json').then(it => it.text()).then(it => {
      this.list = JSON.parse(it) as string[]
    })
  }

  getImage(name: string): string {
    if (this.docs_image[name].image) return this.docs_image[name].image
    return ''
  }

  getDescription(name: string): string {
    if (this.docs_image[name].description) return this.docs_image[name].description
    return ''
  }
}
</script>

<template>
  <BlogCard v-for="(article, index) in list" :key="index" :title="article" :description="getDescription(article)" :image="getImage(article)" />
</template>

<style lang="scss"></style>

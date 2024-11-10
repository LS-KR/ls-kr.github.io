<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { Project } from '@/logic/data'
import { Component, Vue } from 'vue-facing-decorator'
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/data/projects.json'
import projectHtml from '@/assets/Projects.md'

@Component({ components: { ProjectCard } })
export default class Projects extends Vue {
  projects = projects as Project[]
  html = projectHtml
}
</script>

<template>
  <div class="project-placeholder"></div>
  <div class="container">
    <ProjectCard v-for="card in projects" :project="card" :index="card.title" :key="card.title"/>
  </div>
  <div v-html="html" />
</template>

<style lang="scss">
.project-placeholder {
  width: 100%;
  height: 15px;
}

.container {
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

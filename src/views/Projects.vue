<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { Project } from '@/logic/data'
import { Component, Vue } from 'vue-facing-decorator'
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/data/projects.json'

@Component({ components: { ProjectCard } })
export default class Projects extends Vue {
  projects = projects as Project[]
}
</script>

<template>
  <div class="container">
    <ProjectCard v-for="card in projects" :project="card" :index="card.title"/>
  </div>
</template>

<style lang="scss">
.container {
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1rem;
}
</style>

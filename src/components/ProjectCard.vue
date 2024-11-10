<script lang="ts">
import { Project } from '@/logic/data'
import { Icon } from '@iconify/vue'
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({ components: { Icon } })
export default class ProjectCard extends Vue {
  @Prop({ required: true }) project!: Project
}
</script>

<template>
  <div class="project-card">
    <a class="title" :href="project.url" target="_blank">{{ project.title }}</a>
    <div class="bottom">
      <p class="description">{{ project.description }}</p>
      <div class="links">
        <a
          v-for="(link, index) in project.links"
          :key="index"
          class="link"
          :href="link.url"
          target="_blank"
        >
          <Icon class="icon" :icon="link.icon" />
        </a>
        <a class="link" :href="project.url" target="_blank">
          <Icon class="icon" icon="mynaui:link-solid" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/css/latte';
@import '@/css/fonts.css';

.project-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 400px;
  height: 80px;
  background-color: $crust;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  margin: auto 1rem;
  padding: 0 1rem;

  .title {
    flex: 1;
    color: $text;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    &:active {
      color: $text;
      text-decoration: none;
    }
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .description {
      margin: 0;
      font-family: 'LXGW WenKai', 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      gap: 3px;

      .icon {
        width: 1.4rem;
        height: 1.4rem;
        color: $lavender;
        vertical-align: middle;
      }
    }
  }
}
</style>

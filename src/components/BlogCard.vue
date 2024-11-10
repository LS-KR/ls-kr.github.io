<script lang="ts">
import { router } from '@/router'
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class BlogCard extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: true }) description!: string
  @Prop({ required: true }) image!: string

  push() {
    router.push(`/docs/${this.title}`)
  }
}
</script>

<template>
  <div class="blog-card">
    <div class="left">
      <img class="image" :src="image" :alt="title" />
    </div>
    <div class="right">
      <h2 class="title" @click="push()">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '../css/latte';
@import '../css/motion';

.blog-card {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: start;
  width: 100%;
  max-width: 800px;
  height: 200px;
  margin: 0.75rem auto;
  overflow: hidden;
  border: 1px solid $maroon;
  border-radius: 50px;

  .left {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    margin: 12.5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 0 2rem;

    h2 {
      position: relative;
      color: $flamingo;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $flamingo;
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.5s $ease-out-back;
      }

      &:hover {
        &:before {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }

    p {
      color: $subtext0;
      text-align: start;
      text-wrap: stable;
    }
  }
}

[data-theme='dark'] {
  .blog-card {
    border: 1px solid hsl(355deg, 71%, 77%);

    .right {
      h2 {
        color: hsl(0deg, 58%, 86%);

        &:before {
          background-color: hsl(0deg, 58%, 86%);
        }
      }

      p {
        color: hsl(228deg, 39%, 80%);
      }
    }
  }
}
</style>

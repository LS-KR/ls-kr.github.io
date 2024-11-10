<script lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { randint } from '@/logic/helper'
import { Component, Vue } from 'vue-facing-decorator'
import avatars from '@/data/avatar.json'

@Component({
  components: { ThemeButton }
})
export default class App extends Vue {
  avatar = ''

  created() {
    this.avatar = avatars[randint(0, avatars.length - 1)]
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-avatar">
        <img :src="avatar" alt="Avatar" />
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/articles">Articles</router-link>
    </div>
    <div class="nav-right">
      <ThemeButton />
    </div>
  </div>
  <div class="placeholder"></div>
  <router-view />
</template>

<style lang="scss">
@import '@/css/latte.scss';
@import '@/css/motion.scss';

* {
  transition: all 0.5s $ease-out-cric;
}

body {
  background: $base;
}

#app {
  min-height: 95vh;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background: hsl(342, 100%, 73%);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

  .nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0 1rem;
    gap: 1rem;

    .nav-avatar {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 36px;
      overflow: hidden;
      transition: all 0.5s $ease-out-back;

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      &:hover {
        transform: rotate(-360deg);
      }
    }

    a {
      text-decoration: none;
      color: $mantle;

      &.router-link-exact-active {
        text-decoration: none;
        color: $lavender
      }
    }
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    gap: 1rem;
  }
}

.placeholder {
  width: 100%;
  height: 50px;
  display: block;
}

[data-theme="dark"] {
  body {
    background: #0e0e0e;
  }

  .nav {
    background: hsl(339, 66%, 25%)
  }
}
</style>

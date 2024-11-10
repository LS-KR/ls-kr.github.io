<script lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { randint } from '@/logic/helper'
import { Component, Vue } from 'vue-facing-decorator'
import avatars from '@/data/avatar.json'
import contacts from '@/data/contacts.json'
import { Contact } from './logic/data'
import { Icon } from '@iconify/vue'

@Component({
  components: { ThemeButton, Icon },
})
export default class App extends Vue {
  avatar = ''
  contacts = contacts as Contact[]

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
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        :href="contact.url"
        :title="contact.url"
        target="_blank"
      >
        <Icon :icon="contact.icon" class="nav-contact-icon" />
      </a>
      <ThemeButton />
    </div>
  </div>
  <div class="placeholder"></div>
  <router-view />
</template>

<style lang="scss">
@import '@/css/latte.scss';
@import '@/css/motion.scss';
@import '@/css/fonts.css';

* {
  transition: all 0.5s $ease-out-cric;
  font-family: 'PingFang SC', 'LXGW Wenkai', 'Microsoft YaHei', '微软雅黑', Arial, Helvetica,
    sans-serif;
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
        color: $lavender;
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

    a {
      &:hover {
        filter: drop-shadow(0px 0px 3px #fff);
      }

      .nav-contact-icon {
        width: 24px;
        height: 24px;
        color: #fff;
        vertical-align: middle;
      }
    }
  }
}

.placeholder {
  width: 100%;
  height: 60px;
  display: block;
}

[data-theme='dark'] {
  body {
    background: #0e0e0e;
  }

  .nav {
    background: hsl(339, 66%, 25%);
  }
}
</style>

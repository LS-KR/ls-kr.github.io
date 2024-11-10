<script lang="ts">
import contacts from '@/data/contacts.json'
import { Contact } from '@/logic/data'
import { Icon } from '@iconify/vue'
import { Component, Vue } from 'vue-facing-decorator'

@Component({ components: { Icon } })
export default class ContactList extends Vue {
  contacts = contacts as Contact[]

  openLink(link: string) {
    window.open(link, '_blank')
  }
}
</script>

<template>
  <div class="contact-list">
    <div
      class="contact-list__item"
      v-for="(contact, index) in contacts"
      :key="index"
      v-on:click="openLink(contact.url)"
    >
      <Icon class="icon" :icon="contact.icon" />
      <h1 class="title">{{ contact.title }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/css/latte';
@import '@/css/fonts.css';

.contact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  flex-direction: row;
  gap: 1rem;
  margin: 0 auto;

  .contact-list__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: calc(400px - 2rem);
    height: 36px;
    position: relative;
    gap: 14px;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $sky;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      transform-origin: top left;
    }

    &:hover {
      &:before {
        transform: scaleX(1);
      }
    }

    .icon {
      width: 24px;
      height: 24px;
      color: $sky;
    }

    h1 {
      font-size: 24px;
      line-height: 24px;
      text-align: start;
      font-weight: 400;
      font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: $sky;
    }
  }
}

[data-theme='dark'] {
  .contact-list {
    .contact-list__item {
      &:before {
        background-color: hsl(189deg, 48%, 73%);
      }

      .icon {
        color: hsl(189deg, 48%, 73%);
      }

      h1 {
        color: hsl(189deg, 48%, 73%);
      }
    }
  }
}
</style>

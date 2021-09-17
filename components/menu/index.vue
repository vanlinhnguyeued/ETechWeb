<template>
  <div class="menu">
    <NuxtLink
      v-for="item in navs"
      :key="item.key"
      :to="`#${item.key}`"
      class="menu__item"
    >
      <div @click="onClick(item.key)">
        {{ item.name }}
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      navs: [
        { name: this.$t('header.about'), key: 'about-us' },
        { name: this.$t('header.games'), key: 'our-games' },
        { name: this.$t('header.partners'), key: 'our-partners' },
        { name: this.$t('header.contact'), key: 'contact-us' },
      ],
    }
  },
  methods: {
    onClick(item) {
      this.$router.push(`#${item.key}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;

  &__item {
    margin-right: 84px;
    font-family: Montserrat;
    font-weight: Bold;
    font-size: 14px;
    line-height: 17.5px;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
  .nuxt-link-active::before,
  &__item::before {
    content: '';
    width: 0%;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    bottom: -10px;
    transition: 0.3s;
  }
  .nuxt-link-active::before {
    width: 100%;
  }

  @include desktop-down {
    &__item {
      margin-right: 40px;
    }
  }
}
</style>

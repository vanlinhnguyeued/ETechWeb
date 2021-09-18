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
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .nuxt-link-active {
    opacity: 0.5;
  }

  @include desktop-down {
    &__item {
      margin-right: 40px;
    }
  }

  @include tablet-landscape-down {
    &__item {
      margin-right: 15px;
    }
  }
}
</style>

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

<style lang="scss" scoped src="~/styles/modules/menu.scss" />

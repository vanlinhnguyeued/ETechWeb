<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="header">
          <div class="dropdown-lang__container">
            <Dropdown :for-mobile="true" />
          </div>
          <div class="btn-close" @click="close">
            <img src="~/assets/icons/close.svg" />
          </div>
        </div>
        <ul class="navbar-nav">
          <NuxtLink
            v-for="item in navs"
            :key="item.key"
            :to="`#${item.key}`"
            class="nuxt-link"
          >
            <li @click="clickNav(item.key)">
              {{ item.name }}
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MenuCollapse',
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
    close() {
      this.$emit('close')
    },
    clickNav(item) {
      this.$router.push(`#${item.key}`)
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped src="~/styles/modules/menu-collapse.scss" />

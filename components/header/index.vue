<template>
  <div :class="[!isVisibleBacground ? 'header' : 'header fixed', 'noselect']">
    <NuxtLink :to="localePath('/')" class="header__logo">
      <img src="~/assets/images/logo.svg" class="logo" />
    </NuxtLink>
    <div class="header__menu">
      <Menu />
      <Dropdown />
    </div>
    <div class="header__menu--mobile" @click="openMenu">
      <img src="~/assets/icons/menu.svg" />
    </div>
    <MenuCollapse v-show="isShowMenu" @close="closeMenu" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isVisibleBacground: false,
      isShowMenu: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.onWindowScroll)
  },

  mounted() {
    const isTop =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) +
        window.innerHeight ===
      document.documentElement.offsetHeight
    this.isVisibleBacground = !isTop
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll)
  },

  methods: {
    onWindowScroll() {
      this.isVisibleBacground = window.pageYOffset > 0
    },
    closeMenu() {
      this.isShowMenu = false
      document.body.classList.remove('modal-open')
    },
    openMenu() {
      this.isShowMenu = true
      document.body.classList.add('modal-open')
    },
  },
}
</script>

<style lang="scss" scoped src="~/styles/modules/header.scss" />

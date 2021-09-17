<template>
  <div :class="[!isVisibleBacground ? 'header' : 'header fixed', 'noselect']">
    <NuxtLink :to="localePath('/')" class="header--left">
      <img src="~/assets/images/logo.png" class="logo" />
    </NuxtLink>
    <div class="header--right">
      <Menu />
      <Dropdown />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isVisibleBacground: false,
      isNavCollapseVisible: false,
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
    closeNavCollapse() {
      this.isNavCollapseVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 200;
  width: 100%;
  top: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
  &.fixed {
    background: #441dbb;
  }
  &--left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 80px;
    padding-top: 20px;
    .logo {
      width: 109px;
      height: 64px;
    }
  }
  &--right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: row;
    padding-right: 80px;
    padding-top: 40px;
  }
}
</style>

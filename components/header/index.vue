<template>
  <div :class="[!isVisibleBacground ? 'header' : 'header fixed', 'noselect']">
    <NuxtLink :to="localePath('/')" class="header__logo">
      <img src="~/assets/images/logo.svg" class="logo" @click="onClick" />
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
    onClick() {
      this.$router.push('/')
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
  padding: 20px 80px;

  &.fixed {
    background: #5851e3;
    padding: 10px 80px;

    .logo {
      width: auto;
      height: 44px;
    }

    .header__menu {
      padding-top: 0px;
    }
  }

  &__logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .logo {
    width: 109px;
    height: 64px;
    transition: 0.4s;
  }

  &__menu {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 20px;
    transition: 0.4s;
  }

  &__menu--mobile {
    display: none;
    width: 40px;
    height: 40px;
    align-self: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @include tablet-landscape-down {
    padding: 24px 16px;
    &.fixed {
      background: #441dbb;
      padding: 10px 16px;
    }
  }

  @include tablet-portrait-down {
    &__menu {
      display: none;
    }

    &__menu--mobile {
      display: flex;
    }
  }
}
</style>

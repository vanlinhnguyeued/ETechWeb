<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="header">
          <div class="dropdown-lang__container">
            <Dropdown :forMobile="true" />
          </div>
          <div class="btn-close" @click="close">
            <img src="~/assets/icons/close.png" />
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
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
}

.modal {
  background-color: #ffffff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
  }
  .navbar-nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 40px 16px;

    .nuxt-link {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 24px;
      margin-bottom: 24px;
      font-family: 'Montserrat', serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 17.5px;
      color: #000000;
      text-align: center;
      text-transform: uppercase;
    }
    .nuxt-link-active {
      color: #441dbb;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>

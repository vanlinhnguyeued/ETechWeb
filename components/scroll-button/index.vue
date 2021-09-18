<template>
  <div class="scroll-button" @click="onClick()">
    <img src="~/assets/icons/arrow-circle.png" :class="isDown && 'up'" />
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isDown: false,
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
    this.isDown = !isTop
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll)
  },

  methods: {
    onWindowScroll() {
      this.isDown = window.pageYOffset > 0
    },
    onClick() {
      if (this.isDown) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        const element = document.getElementById('about-us')
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped src="~/styles/modules/scroll-button.scss" />

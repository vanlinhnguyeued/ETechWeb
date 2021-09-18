<template>
  <div class="scroll-button" @click="onClick()">
    <img src="../../assets/icons/arrow-circle.svg" :class="isDown && 'up'" />
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

<style lang="scss" scoped>
.scroll-button {
  position: fixed;
  bottom: 44.67px;
  right: 80px;
  z-index: 2;
  cursor: pointer;
  width: 66.67px;
  height: 66.67px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: auto;
    transition: 0.4s;
  }

  .up {
    transform: rotate(180deg);
    transform-origin: center;
  }

  @include tablet-portrait-down {
    right: 16px;
    bottom: 16px;
  }
}
</style>

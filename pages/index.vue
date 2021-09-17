<template>
  <div class="landing-page">
    <ScrollButton />
    <Header />
    <Banner />
    <AboutUs />
    <Games />
    <Partners />
    <Contact />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>
<style lang="scss" scoped>
.landing-page {
  width: 100%;
}
</style>

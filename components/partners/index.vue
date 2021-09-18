<template>
  <section id="our-partners" class="our-partners">
    <div class="our-partners__title">{{ $t('ourPartners.title') }}</div>
    <div class="our-partners__slide">
      <button class="btn btn--prev" @click="showPrev()">
        <img src="~/assets/icons/arrow-square-left.svg" />
      </button>
      <div class="slide__container">
        <client-only>
          <VueSlickCarousel
            ref="carousel"
            :arrows="false"
            :dots="false"
            :slides-to-show="5"
            :slides-to-scroll="1"
            :swipe="true"
            :responsive="slickResponsive"
            :speed="1000"
            :autoplay-speed="2500"
            :autoplay="true"
            :touch-move="true"
          >
            <div v-for="item in partners" :key="item.id" class="slide__item">
              <img :src="item.image" class="item__content" />
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
      <button class="btn btn--next" @click="showNext()">
        <img src="~/assets/icons/arrow-square-left.svg" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurPartners',
  data() {
    return {
      partners: [
        { id: 1, image: require('~/assets/images/partners/partner1.png') },
        { id: 2, image: require('~/assets/images/partners/partner2.png') },
        { id: 3, image: require('~/assets/images/partners/partner3.png') },
        { id: 4, image: require('~/assets/images/partners/partner4.png') },
        { id: 5, image: require('~/assets/images/partners/partner5.png') },
        { id: 6, image: require('~/assets/images/partners/partner6.png') },
        { id: 7, image: require('~/assets/images/partners/partner7.png') },
      ],
      slickResponsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
          },
        },
      ],
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss" scoped src="~/styles/modules/partners.scss" />

<template>
  <section id="our-partners" class="our-partners">
    <div class="our-partners__title">{{ $t('ourPartners.title') }}</div>
    <div class="our-partners__slide">
      <button class="btn btn--prev" @click="showPrev()">
        <img src="../../assets/icons/arrow-square-left.svg" />
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
        <img src="../../assets/icons/arrow-square-left.svg" />
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
        { id: 1, image: require('../../assets/images/partners/partner1.png') },
        { id: 2, image: require('../../assets/images/partners/partner2.png') },
        { id: 3, image: require('../../assets/images/partners/partner3.png') },
        { id: 4, image: require('../../assets/images/partners/partner4.png') },
        { id: 5, image: require('../../assets/images/partners/partner5.png') },
        { id: 6, image: require('../../assets/images/partners/partner6.png') },
        { id: 7, image: require('../../assets/images/partners/partner7.png') },
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

<style lang="scss" scoped>
.our-partners {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 120px 190px;
  background-color: #f6f6f6;

  &__title {
    font-family: 'Playfair Display';
    font-size: 60px;
    font-weight: 900;
    line-height: 80px;
    letter-spacing: 3.6px;
    color: #000000;
    margin-bottom: 80px;
  }

  &__slide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1540px;
  }
  .slide__container {
    width: calc(100% - (40px * 2));
  }

  .slide__item {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .item__content {
    width: 260px;
    height: 100px;
  }

  .btn {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;
    cursor: pointer;
    padding: unset;
    border-radius: 10px;
    z-index: 99;
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  .btn--next {
    img {
      transform: rotate(180deg);
    }
  }

  @include medium-desktop-down {
    padding: 60px 100px;
  }

  @include tablet-landscape-down {
    padding: 60px;
  }

  @include tablet-portrait-down {
    padding: 0;
    padding-bottom: 40px;
    padding-top: 100px;
    margin-top: -100px;
    &__title {
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.6px;
      margin: 40px 16px;
    }

    &__slide {
      position: relative;
    }

    .slide__container {
      width: 100%;
    }

    .slide__item {
      width: 200px !important;
      height: 72px;
      padding-inline: 6px;
    }

    .item__content {
      width: 188px;
      height: 72px;
    }

    .btn {
      position: absolute;
      left: 16px;
    }

    .btn--next {
      right: 16px;
      left: unset;
    }
  }
}
</style>

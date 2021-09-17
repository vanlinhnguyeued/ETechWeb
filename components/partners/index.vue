<template>
  <section id="our-partners" class="our-partners">
    <div class="our-partners__title">{{ $t('ourPartners.title') }}</div>
    <div class="our-partners__slide">
      <button class="btn--prev" @click="showPrev()">
        <img src="../../assets/icons/slick.png" />
      </button>
      <div class="slide__container">
        <VueSlickCarousel
          :arrows="false"
          :dots="false"
          :slidesToShow="5"
          :slidesToScroll="1"
          :swipe="false"
          ref="carousel"
        >
          <div class="slide__item" v-for="item in partners" :key="item.id">
            <div class="item__content">
              <img :src="item.image" />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <button class="btn--next" @click="showNext()">
        <img src="../../assets/icons/slick.png" />
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
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .btn--prev,
  .btn--next {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;
    cursor: pointer;
    padding: unset;
    width: 40px;
    height: 40px;
    border-radius: 10px;
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
}
</style>

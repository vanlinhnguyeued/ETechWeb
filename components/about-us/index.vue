<template>
  <section id="about-us" class="about">
    <div class="about__intro">
      <div class="about__intro-left">
        <div class="intro__title">{{ $t('about.title') }}</div>
        <div class="intro__descript">
          {{ $t('about.descript') }}
        </div>
        <div class="achievement">
          <div class="achievement__item">
            <div class="achievement__value">600<span>M</span>+</div>
            <div class="achievement__name">{{ $t('about.user') }}</div>
          </div>
          <div class="achievement__item">
            <div class="achievement__value">135+</div>
            <div class="achievement__name">{{ $t('about.games') }}</div>
          </div>
        </div>
      </div>
      <div class="about__intro-right">
        <div v-for="item in info" :key="item.id" class="info">
          <img :src="item.image" class="info__image" />
          <div class="info__container">
            <div class="info__title">{{ item.title }}</div>
            <div class="info__descript">
              {{ item.descript }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about__footer">
      <img src="~/assets/images/illustrator.png" class="witch" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      info: [
        {
          id: 0,
          image: require('~/assets/images/info1.svg'),
          title: this.$t('about.infoTitle1'),
          descript: this.$t('about.infoDescript1'),
        },
        {
          id: 1,
          image: require('~/assets/images/info2.svg'),
          title: this.$t('about.infoTitle2'),
          descript: this.$t('about.infoDescript2'),
        },
        {
          id: 2,
          image: require('~/assets/images/info3.svg'),
          title: this.$t('about.infoTitle3'),
          descript: this.$t('about.infoDescript3'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped src="~/styles/modules/about.scss" />

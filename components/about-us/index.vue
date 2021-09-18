<template>
  <section id="about-us" class="about">
    <div class="about__intro">
      <div class="about__intro__left">
        <div class="intro__title">{{ $t('about.title') }}</div>
        <div class="intro__descript">
          {{ $t('about.descript') }}
        </div>
        <div class="achievement">
          <div class="achievement__item">
            <div class="achievement__item__value">600<span>M</span>+</div>
            <div class="achievement__item__name">{{ $t('about.user') }}</div>
          </div>
          <div class="achievement__item">
            <div class="achievement__item__value">135+</div>
            <div class="achievement__item__name">{{ $t('about.games') }}</div>
          </div>
        </div>
      </div>
      <div class="about__intro__right">
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

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 157px 370px 0;

  &__intro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1160px;
  }

  &__intro__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    margin-right: 20px;

    .intro__title {
      font-family: 'Playfair Display', serif;
      font-size: 60px;
      font-weight: bold;
      line-height: 60px;
      letter-spacing: 3.6px;
      color: #000000;
      margin-bottom: 40px;
    }

    .intro__descript {
      font-family: 'Montserrat', serif;
      font-size: 14px;
      line-height: 20px;
      color: #757575;
      margin-bottom: 79.29px;
    }

    .achievement {
      display: flex;
      flex-direction: column;

      &__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 39px;
      }

      &__item__value {
        font-family: 'Montserrat', serif;
        font-size: 80px;
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 97.52px;
        color: #079bee;
        span {
          font-size: 40px;
        }
      }

      &__item__name {
        font-family: 'Montserrat', serif;
        font-size: 24px;
        font-weight: bold;
        line-height: 30px;
        color: #000000;
        margin-top: 4px;
      }
    }
  }

  &__intro__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 620px;
    padding: 113px 75px;
    background: #eeeeee;
    margin-left: 20px;

    .info {
      display: flex;
      flex-direction: row;
      width: 100%;

      &__image {
        width: 50px;
        height: 50px;
        margin-right: 24px;
      }

      &__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      &__title {
        font-family: 'Montserrat', serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        color: #000000;
        margin-bottom: 8.08px;
      }

      &__descript {
        font-family: 'Montserrat', serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #757575;
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 28px;
    background-image: url('~/assets/images/map.png');
    background-position: bottom;
    background-size: 100% auto;
    background-repeat: no-repeat;
    min-height: 766px;

    .witch {
      max-width: 95%;
      width: 533px;
      height: 437px;
      animation: jump 3s linear 0s infinite;
      transform-style: preserve-3d;
    }
  }

  @include big-desktop-down {
    padding: 157px 200px 0;
  }

  @include medium-desktop-down {
    padding: 157px 80px 0;
    &__intro__right {
      height: unset;
    }
  }

  @include desktop-down {
    &__intro__right {
      padding: 100px 50px;
    }
  }

  @include tablet-landscape-down {
    padding: 80px 0 0;
    &__intro {
      margin-bottom: 40px;
      flex-direction: column;
    }

    &__footer {
      min-height: 600px;
    }

    &__intro__left {
      width: 100%;
      margin: unset;
      padding-inline: 40px;
      .intro__descript {
        margin-bottom: 39.5px;
      }
      .achievement {
        width: 100%;
        flex-direction: row;
        &__item {
          flex: 1;
        }
      }
    }

    &__intro__right {
      padding: 60px;
      width: 100%;
      margin-left: 0;
      .info {
        margin-bottom: 40px;
      }
    }
  }

  @include tablet-portrait-down {
    padding-top: 90px;
    margin-top: -50px;

    &__footer {
      min-height: 345px;
      .witch {
        width: 300px;
        height: 243px;
      }
    }

    &__intro__left {
      padding-inline: 16px;
      .intro__title {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 16px;
      }
      .achievement {
        &__item {
          margin-bottom: 39.5px;
        }

        &__item__value {
          font-size: 44px;
          line-height: 53.64px;
          span {
            font-size: 20px;
            line-height: 24.38px;
          }
        }
      }
    }

    &__intro__right {
      padding: 40px 16px;
      .info {
        &__image {
          margin-right: 20px;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-25px);
  }
  50% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(-75px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>

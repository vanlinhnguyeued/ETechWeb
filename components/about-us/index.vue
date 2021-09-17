<template>
  <section id="about-us" class="about">
    <div class="intro">
      <div class="intro--left">
        <div class="title">{{ $t('about.title') }}</div>
        <div class="descript">
          {{ $t('about.descript') }}
        </div>
        <div class="achievement">
          <div class="achievement__item">
            <div class="value">600<span>M</span>+</div>
            <div class="name">{{ $t('about.user') }}</div>
          </div>
          <div class="achievement__item">
            <div class="value">135+</div>
            <div class="name">{{ $t('about.games') }}</div>
          </div>
        </div>
      </div>
      <div class="intro--right">
        <div v-for="item in info" :key="item.id" class="info">
          <div class="info__image">
            <img :src="item.image" />
          </div>
          <div class="info__container">
            <div class="info__title">{{ item.title }}</div>
            <div class="info__descript">
              {{ item.descript }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <img src="../../assets/images/illustrator.png" class="witch" />
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
          image: require('../../assets/images/info1.png'),
          title: this.$t('about.infoTitle1'),
          descript: this.$t('about.infoDescript1'),
        },
        {
          id: 1,
          image: require('../../assets/images/info2.png'),
          title: this.$t('about.infoTitle2'),
          descript: this.$t('about.infoDescript2'),
        },
        {
          id: 2,
          image: require('../../assets/images/info3.png'),
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
  width: 100%;
  padding: 157px 370px 0;

  .intro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    &--left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 560px;
      margin-right: 40px;

      .title {
        font-family: 'Playfair Display', serif;
        font-size: 60px;
        font-weight: bold;
        line-height: 60px;
        letter-spacing: 3.6px;
        color: #000000;
        margin-bottom: 40px;
      }

      .descript {
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

          .value {
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

          .name {
            font-family: 'Montserrat', serif;
            font-size: 24px;
            font-weight: bold;
            line-height: 30px;
            color: #000000;
            margin-top: 4px;
          }
        }
      }
    }

    &--right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 560px;
      height: 620px;
      padding: 113px 75px;
      background: #eeeeee;

      .info {
        display: flex;
        flex-direction: row;
        width: 100%;

        &__image {
          width: 50px;
          height: auto;
          margin-right: 24px;
          img {
            width: 50px;
            height: auto;
          }
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
  }

  .footer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 28px;
    background-image: url('../../assets/images/map.png');
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
    .intro {
      &--right {
        height: unset;
      }
    }
  }

  @include desktop-down {
    padding: 157px 80px 0;
    .intro {
      &--right {
        padding: 100px 50px;
      }
    }
  }

  @include tablet-landscape-down {
    padding: 80px 0 0;
    .intro {
      margin-bottom: 40px;
      flex-direction: column;
      &--left {
        width: 100%;
        margin: unset;
        padding-inline: 40px;
        .descript {
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
      &--right {
        padding: 60px;
        width: 100%;
        .info {
          margin-bottom: 40px;
        }
      }
    }
    .footer {
      min-height: 600px;
    }
  }
  @include tablet-portrait-down {
    padding-top: 40px;
    .intro {
      &--left {
        padding-inline: 16px;
        .title {
          font-size: 40px;
          line-height: 50px;
          margin-bottom: 16px;
        }
        .achievement {
          &__item {
            margin-bottom: 39.5px;
            .value {
              font-size: 44px;
              line-height: 53.64px;
              span {
                font-size: 20px;
                line-height: 24.38px;
              }
            }
          }
        }
      }
      &--right {
        padding: 40px 16px;
        .info {
          &__image {
            margin-right: 20px;
            width: 40px;
            img {
              width: 40px;
            }
          }
        }
      }
    }
    .footer {
      min-height: 345px;
      .witch {
        width: 300px;
        height: 243px;
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

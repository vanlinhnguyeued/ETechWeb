<template>
  <div class="banner noselect">
    <div class="title">{{ $t('banner.title') }}</div>
    <div class="count-down">
      <div class="time">
        <div class="value">{{ days }}</div>
        <div class="name">{{ $t('banner.days') }}</div>
      </div>
      <span>:</span>
      <div class="time">
        <div class="value">{{ hours }}</div>
        <div class="name">{{ $t('banner.hours') }}</div>
      </div>
      <span>:</span>
      <div class="time">
        <div class="value">{{ minutes }}</div>
        <div class="name">{{ $t('banner.minutes') }}</div>
      </div>
      <span>:</span>
      <div class="time">
        <div class="value">{{ seconds }}</div>
        <div class="name">{{ $t('banner.second') }}</div>
      </div>
    </div>
    <div class="discript">
      {{ $t('banner.descript') }}
    </div>
    <div class="email">
      <input :placeholder="$t('banner.placehold')" />
      <div class="arrow-right">
        <img src="../../assets/icons/arrow-right.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return { diff: 3600 * 24 * 10, interval: null }
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days() {
      return Math.trunc(this.diff / (3600 * 24))
    },
  },
  beforeMount() {
    this.interval = setInterval(() => {
      this.diff = this.diff - 1
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../../assets/images/fairy.png'),
    url('../../assets/images/banner.png');
  background-size: auto auto, 100% 100%;
  background-position: 0px 50px, center;
  background-repeat: no-repeat;
  width: 100%;
  height: 988.64px;
  position: relative;

  .title {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 80px;
    line-height: 120px;
    letter-spacing: 0.6px;
    color: #ffffff;
    margin-top: 294px;
    text-align: center;
    max-width: 95%;
  }

  .count-down {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 26px 39px;
    width: 756px;
    height: 150px;
    background: #ffffff;
    border-radius: 21px;
    box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
    margin-top: 21px;
    color: #000000;
    max-width: 95%;

    .time {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;

      .value {
        font-family: 'Playfair Display', serif;
        font-size: 60px;
        line-height: 64px;
        letter-spacing: 4.8px;
        font-weight: bold;
        width: 80px;
        height: 80px;
        text-align: center;
      }
      .name {
        font-family: 'Montserrat', serif;
        font-weight: bold;
        font-size: 15.64px;
        line-height: 19px;
        letter-spacing: -0.65px;
        text-transform: capitalize;
      }
    }

    span {
      font-family: 'Montserrat', serif;
      font-size: 65.17px;
      font-weight: 400;
      line-height: 79.45px;
      align-self: flex-start;
    }
  }

  .discript {
    font-family: 'Montserrat', serif;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    width: 560px;
    text-align: center;
    margin-top: 97.1px;
    max-width: 95%;
  }

  .email {
    max-width: 95%;
    width: 560px;
    height: 56px;
    margin-top: 32px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;

    input {
      flex: 1;
      height: 100%;
      border: none;
      outline: none;
      padding: 18px 14px;
      font-size: 14px;
      line-height: 19.6px;
      font-family: 'Montserrat', serif;
      font-weight: 400;
    }

    .arrow-right {
      width: 24px;
      height: 24px;
      margin-right: 17px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.5);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @include medium-desktop-down {
    background-size: auto 70%, auto 100%;
    background-position: 0px 90%, center;
    .title {
      font-size: 60px;
    }
    .count-down {
      padding: 26px;
      width: 500px;
      height: 130px;
      .time {
        .value {
          font-size: 50px;
        }
        .name {
          font-size: 15px;
        }
      }
      span {
        font-size: 50px;
      }
    }
    .email,
    .discript {
      width: 500px;
    }
  }

  @include tablet-landscape-down {
    .title {
      font-size: 50px;
      margin-top: 150px;
    }
  }

  @include tablet-portrait-down {
    height: 824px;
    background-image: url('../../assets/images/fairy-crop.png'),
      url('../../assets/images/bg-mobile.png');
    background-size: auto 35%, 100% 100%;
    background-position: 70% 103%, center;

    .title {
      font-size: 40px;
      margin-top: 108px;
      line-height: 50px;
      width: 343px;
    }
    .count-down {
      width: 343px;
      height: 118px;
      .time {
        .value {
          font-size: 36px;
          width: 54px;
          height: 46px;
          line-height: 45px;
        }
        .name {
          font-size: 12px;
          margin-top: 3px;
          line-height: 15px;
        }
      }
      span {
        font-size: 40px;
      }
    }
    .email,
    .discript {
      width: 343px;
    }
    .discript {
      margin-top: 40px;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.9px;
    }
    .email {
      margin-top: 16px;
    }
  }
}
</style>

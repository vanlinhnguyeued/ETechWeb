<template>
  <div class="banner noselect">
    <img src="~/assets/images/fairy.png" class="fairy" />
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
        <img src="~/assets/icons/arrow-right.svg" />
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

<style lang="scss" scoped src="~/styles/modules/banner.scss" />

<template>
  <div
    v-click-outside="clickOutside"
    :class="!forMobile ? 'dropdown' : 'dropdown-mobile'"
    @click="onClick()"
  >
    <img :src="selected.flag" class="dropdown__flag" />
    <img :src="iconUrl" class="dropdown__icon" />
    <div :class="isShow ? 'dropdown--show' : 'dropdown--hidden'">
      <NuxtLink
        v-for="(item, index) in langs"
        :key="item.name"
        :to="switchLocalePath(`${item.code}`)"
        :class="['langs__item', index == 0 && 'boder--bottom']"
      >
        <div class="selected">
          <img
            v-show="item.name === selected.name"
            src="~/assets/icons/tick1.svg"
            class="selected-icon"
          />
        </div>
        <img :src="item.flag" class="dropdown__flag" />
        <div class="dropdown__name">{{ item.name }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  directives: {
    'click-outside': {
      bind: function (el, binding) {
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        document.addEventListener('click', handler)
      },
      unbind: function (el) {
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      },
    },
  },
  props: {
    forMobile: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isShow: false,
      langs: [
        {
          name: this.$t('header.vietnamese'),
          flag: require('~/assets/icons/flags/vietnam.png'),
          code: 'vi-vn',
        },
        {
          name: this.$t('header.english'),
          flag: require('~/assets/icons/flags/united-states.png'),
          code: 'en-us',
        },
      ],
      selected: {
        name: this.$t('header.english'),
        flag: require('~/assets/icons/flags/united-states.png'),
      },
    }
  },
  computed: {
    iconUrl() {
      return this.forMobile
        ? require('~/assets/icons/arrow-drop-down-black.svg')
        : require('~/assets/icons/arrow-drop-down.svg')
    },
  },
  mounted() {
    this.selected = this.langs.find((item) =>
      location.pathname.includes(item.code)
    )
  },
  methods: {
    clickOutside() {
      this.isShow = false
    },
    onClick() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style lang="scss" scoped src="~/styles/modules/dropdown.scss" />

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

<style lang="scss" scoped>
.dropdown-mobile,
.dropdown {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.dropdown__flag {
  width: 40px;
  height: 40px;
}

.dropdown__icon {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.dropdown--show,
.dropdown--hidden {
  width: 156px;
  height: 81px;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  bottom: -87px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  transition: all 0.3s ease-in;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  border: 1px solid #eeeeee;
}

.dropdown--hidden {
  visibility: hidden;
  opacity: 0;
}

.langs__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
  flex: 1;
}

.selected {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.selected-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.dropdown__name {
  font-family: Montserrat;
  font-size: 10px;
  font-weight: bold;
  color: #000000;
  line-height: 17.5px;
  margin-left: 4px;
  text-transform: capitalize;
}

.boder--bottom {
  border-bottom: solid 1px #c4c4c4;
}

.dropdown-mobile {
  width: 80px;
  height: 40px;
  background-color: #f6f6f6;
  border: 1px solid #afafaf;
  padding: 4px 12px;
  border-radius: 8px;
  .dropdown__flag {
    width: 32px;
    height: 32px;
  }

  .dropdown__icon {
    margin-left: 0;
  }

  .dropdown--hidden,
  .dropdown--show {
    left: 0px;
    right: unset;
  }
}
</style>

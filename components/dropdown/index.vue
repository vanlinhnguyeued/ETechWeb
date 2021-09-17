<template>
  <div
    v-click-outside="clickOutside"
    :class="!forMobile ? 'dropdown' : 'dropdown-mobile'"
    @click="onClick()"
  >
    <img :src="selected.flag" class="flag" />
    <img
      :src="
        require(`../../assets/icons/arrow-down${forMobile ? '-black' : ''}.png`)
      "
      class="icon"
    />
    <div :class="isShow ? 'dropdown--show' : 'dropdown--hidden'">
      <NuxtLink
        v-for="(item, index) in langs"
        :key="item.name"
        :to="switchLocalePath(`${item.code}`)"
        :class="['item', index == 0 && 'boder--bottom']"
      >
        <div class="checked">
          <img
            v-show="item.name === selected.name"
            src="../../assets/icons/checked.png"
            class="seleted"
          />
        </div>
        <img :src="item.flag" class="flag" />
        <div class="name">{{ item.name }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',

  props: {
    forMobile: {
      type: Boolean,
      required: false,
    },
  },

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

  data() {
    return {
      isShow: false,
      langs: [
        {
          name: this.$t('header.vietnamese'),
          flag: require('../../assets/icons/flags/vietnam.png'),
          code: 'vi-VN',
        },
        {
          name: this.$t('header.english'),
          flag: require('../../assets/icons/flags/united-states.png'),
          code: 'en-US',
        },
      ],
      selected: {
        name: this.$t('header.english'),
        flag: require('../../assets/icons/flags/united-states.png'),
      },
    }
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
  margin-left: 3.33px;
  cursor: pointer;
  position: relative;

  .flag {
    width: 33.33px;
    height: 33.33px;
  }

  .icon {
    width: 10px;
    height: 5px;
    margin-left: 14.33px;
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

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    cursor: pointer;
    flex: 1;

    .checked {
      margin-left: 2px;
      margin-right: 13.27px;
      width: 20.06px;
      height: 14.73px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .name {
      font-family: Montserrat;
      font-size: 10px;
      font-weight: bold;
      color: #000000;
      line-height: 17.5px;
      margin-left: 7.33px;
      text-transform: capitalize;
    }
  }

  .boder--bottom {
    border-bottom: solid 1px #c4c4c4;
  }
}
.dropdown-mobile {
  width: 80px;
  height: 40px;
  background-color: #f6f6f6;
  border: 1px solid #afafaf;
  padding: 4px 12px;
  border-radius: 8px;
  .icon {
    width: 10px;
    height: 5px;
    margin-left: 9.67px;
  }
  .dropdown--hidden,
  .dropdown--show {
    left: 0px;
    right: unset;
  }
}
</style>

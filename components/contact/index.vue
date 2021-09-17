<template>
  <section id="contact-us" class="contact-us">
    <div class="contact-us--left">
      <div class="logo">
        <img src="../../assets/images/logo.png" />
      </div>
      <div class="socials">
        <div class="socials__item">
          <img src="../../assets/icons/twitter.png" />
        </div>
        <div class="socials__item">
          <img src="../../assets/icons/facebook.png" />
        </div>
        <div class="socials__item">
          <img src="../../assets/icons/linkedin.png" />
        </div>
      </div>
    </div>
    <div class="contact-us--right">
      <div class="address">
        <div class="title">{{ $t('contact.address') }}</div>
        <div class="address__infor">
          <div class="icon">
            <img src="../../assets/icons/marker.png" />
          </div>
          <div class="address__branch">
            <div class="address__branch--1">
              {{ $t('contact.branch1') }}
            </div>
            <div class="address__branch--2">
              {{ $t('contact.branch2') }}
            </div>
          </div>
        </div>
        <div class="address__phone">
          <div class="icon">
            <img src="../../assets/icons/phone.png" />
          </div>
          <div class="address__phone__infor">
            (+1) 555-0108-000 <span>{{ $t('contact.or') }}</span> (+236)
            555-0108
          </div>
        </div>
      </div>
      <div class="follow">
        <div class="title">{{ $t('contact.subscribe') }}</div>
        <div class="descript">
          {{ $t('contact.subDescript') }}
        </div>
        <div class="email">
          <input :placeholder="$t('contact.email')" />
          <div class="arrow-right">
            <img src="../../assets/icons/arrow-right-white.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
}
</script>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 446px;
  padding: 104px 230px 0;
  background-image: url('../../assets/images/contact-bg.png');

  &--left {
    display: flex;
    flex-direction: column;

    .logo {
      width: 163.23px;
      height: 96px;
      margin-bottom: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .socials {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 168px;
      &__item {
        cursor: pointer;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: auto;
          height: auto;
        }
      }
    }
  }

  &--right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: 'Montserrat', serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;

    .address,
    .follow {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      max-width: 410px;
      margin-right: 40px;

      &__infor {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 40px;
      }

      &__branch {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex: 1;

        &--1 {
          margin-bottom: 12px;
        }
      }

      &__phone {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      span {
        margin-inline: 8px;
      }
    }

    .descript {
      margin-bottom: 12px;
    }

    .email {
      width: 100%;
      height: 56px;
      margin-top: 32px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      border-radius: 8px;
      border: 1px solid #ffffff;

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
        color: #ffffff;
        background-color: transparent;
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
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 8px;

    img {
      width: auto;
      height: auto;
    }
  }

  .title {
    font-family: 'Montserrat', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 40px;
  }

  ::placeholder {
    color: #ffffff;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #ffffff;
  }

  ::-ms-input-placeholder {
    color: #ffffff;
  }

  @include big-desktop-down {
    padding: 104px 130px 0;
  }
}
</style>

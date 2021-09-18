<template>
  <section id="contact-us" class="contact-us">
    <div class="contact-us__images">
      <img src="~/assets/images/logo.svg" class="image__logo" />
      <div class="image__socials">
        <img src="~/assets/icons/twitter.svg" class="image__socials__item" />
        <img src="~/assets/icons/facebook.svg" class="image__socials__item" />
        <img src="~/assets/icons/linkedin.svg" class="image__socials__item" />
      </div>
    </div>
    <div class="contact-us__info">
      <div class="info__address">
        <div class="info__title">{{ $t('contact.address') }}</div>
        <div class="address__detail">
          <img src="~/assets/icons/location.svg" class="icon" />
          <div class="address__branch">
            <div class="mg-bot-12">
              {{ $t('contact.branch1') }}
            </div>
            <div>
              {{ $t('contact.branch2') }}
            </div>
          </div>
        </div>
        <div class="address__phone">
          <img src="~/assets/icons/mobile.svg" class="icon" />
          <div class="address__phone__detail">
            <a href="tel:(+1)5550108000">(+1) 555-0108-000 </a>
            <span>{{ $t('contact.or') }}</span>
            <a href="tel:(+236)5550108"> (+236) 555-0108</a>
          </div>
        </div>
      </div>
      <div class="info__follow">
        <div class="info__title">{{ $t('contact.subscribe') }}</div>
        <div class="follow__descript">
          {{ $t('contact.subDescript') }}
        </div>
        <div class="follow__email">
          <input :placeholder="$t('contact.email')" />
          <img src="~/assets/icons/arrow-right-white.svg" class="arrow-right" />
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
<style lang="scss" scoped src="~/styles/modules/contact.scss" />

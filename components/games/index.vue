<template>
  <section id="our-games" class="our-games noselect">
    <div class="our-games__title">{{ $t('ourGame.title') }}</div>
    <div class="our-games__descript">
      {{ $t('ourGame.descript') }}
    </div>
    <div class="our-games__list">
      <div v-for="item in games" :key="item.id" class="games__item">
        <img :src="item.image" class="image__item" />
        <div class="content__item">
          <div class="title__item">{{ item.title }}</div>
          <div class="descript__item">{{ item.subTitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Games',
  data() {
    return {
      games: [
        {
          id: 1,
          title: 'E-Space',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/e-space.png'),
        },
        {
          id: 2,
          title: 'Kingland',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/king-land.png'),
        },
        {
          id: 3,
          title: 'The Last Game',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/the-last-game.png'),
        },
        {
          id: 4,
          title: 'G-Dragon',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/g-dragon.png'),
        },
        {
          id: 5,
          title: 'Pirates',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/pirates.png'),
        },
        {
          id: 6,
          title: 'Witch Party',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/witch-party.png'),
        },
        {
          id: 7,
          title: 'Rocky',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/rocky.png'),
        },
        {
          id: 8,
          title: 'Blue Fire',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/blue-fire.png'),
        },
        {
          id: 9,
          title: 'Magic tree',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/magic-tree.png'),
        },
        {
          id: 10,
          title: 'Aborigines',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/aborigines.png'),
        },
        {
          id: 11,
          title: 'Cinderella',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/cinderella.png'),
        },
        {
          id: 12,
          title: 'Egypt Game',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('~/assets/images/games/egypt-game.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped src="~/styles/modules/games.scss" />

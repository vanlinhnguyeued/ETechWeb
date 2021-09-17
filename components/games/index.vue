<template>
  <section id="our-games" class="our-games noselect">
    <div class="title">{{ $t('ourGame.title') }}</div>
    <div class="descript">
      {{ $t('ourGame.descript') }}
    </div>
    <div class="games">
      <div v-for="item in games" :key="item.id" class="item">
        <div class="item__image">
          <img :src="item.image" />
        </div>
        <div class="item__content">
          <div class="item__title">{{ item.title }}</div>
          <div class="item__descript">{{ item.subTitle }}</div>
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
          image: require('../../assets/images/games/e-space.png'),
        },
        {
          id: 2,
          title: 'Kingland',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/king-land.png'),
        },
        {
          id: 3,
          title: 'The Last Game',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/the-last-game.png'),
        },
        {
          id: 4,
          title: 'G-Dragon',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/g-dragon.png'),
        },
        {
          id: 5,
          title: 'Pirates',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/pirates.png'),
        },
        {
          id: 6,
          title: 'Witch Party',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/witch-party.png'),
        },
        {
          id: 7,
          title: 'Rocky',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/rocky.png'),
        },
        {
          id: 8,
          title: 'Blue Fire',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/blue-fire.png'),
        },
        {
          id: 9,
          title: 'Magic tree',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/magic-tree.png'),
        },
        {
          id: 10,
          title: 'Aborigines',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/aborigines.png'),
        },
        {
          id: 11,
          title: 'Cinderella',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/cinderella.png'),
        },
        {
          id: 12,
          title: 'Egypt Game',
          subTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: require('../../assets/images/games/egypt-game.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.our-games {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 128px 80px 248px;

  .title {
    font-family: 'Playfair Display', serif;
    font-size: 60px;
    line-height: 60px;
    font-weight: 900;
    letter-spacing: 3.6px;
    color: #000000;
    margin-bottom: 24.46px;
  }

  .descript {
    max-width: 840px;
    font-family: 'Montserrat', serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #757575;
    margin-bottom: 80px;
    text-align: center;
  }

  .games {
    display: grid;
    grid: auto / repeat(4, 1fr);
    gap: 40px;
    width: 100%;
    max-width: 1800px;

    .item {
      width: 100%;
      height: 560px;
      background-color: white;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;

      &:nth-child(2n) {
        transform: translateY(118px);
      }

      &__image {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: absolute;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 40.41px 32px;
      }

      &__title {
        font-family: 'Montserrat', serif;
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        left: -1px;
        max-width: 100%;
        text-align: left;
        color: #ffffff;
        margin-bottom: 15.19px;
      }

      &__descript {
        font-family: 'Montserrat', serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        max-width: 100%;
        text-align: left;
        color: #ffffff;
      }
    }
  }

  @include medium-desktop-down {
    .games {
      grid: auto / repeat(3, 1fr);
      gap: 20px;

      .item {
        &:nth-child(2n) {
          transform: unset;
        }
        &:nth-child(3n - 1) {
          transform: translateY(118px);
        }
      }
    }
  }

  @include desktop-down {
    .games {
      grid: auto / repeat(2, 1fr);
      gap: 40px;

      .item {
        &:nth-child(3n - 1) {
          transform: unset;
        }
        &:nth-child(2n) {
          transform: translateY(118px);
        }
      }
    }
  }

  @include tablet-landscape-down {
    padding: 48px 20px 248px;
    .games {
      gap: 20px;
      .item {
        height: 450px;
        &:nth-child(2n) {
          transform: translateY(36px);
        }
        &__title {
          font-size: 34px;
        }
      }
    }
  }
  @include tablet-portrait-down {
    padding: 48px 16px 87px;
    .title {
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.6px;
      margin-bottom: 16.5px;
    }

    .descript {
      max-width: 100%;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 39.5px;
    }
    .games {
      column-gap: 16px;
      row-gap: 20px;
      .item {
        height: 268px;
        &__title {
          font-size: 24px;
          line-height: 30px;
        }
        &__content {
          padding: 0 18px 11px 8px;
        }
        &__descript {
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 0.9px;
        }
      }
    }
  }
}
</style>

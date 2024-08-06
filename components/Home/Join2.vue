<template>
  <div class="join2-container">
    <div class="page-container join2">
      <div class="title">
        {{ $t('home.join2.title') }}
      </div>
      <div class="sub-title">
        <span class="s-1">{{ $t('home.join2.subTitle1') }}</span>
        <span class="s-2"></span>
        <span class="s-3">{{ $t('home.join2.subTitle3') }}</span>
        <span class="s-4">{{ $t('home.join2.subTitle4') }}</span>
        <NuxtLink class="s-5">{{ $t('home.join2.subTitle5') }}</NuxtLink>
        <span class="s-6">{{ $t('home.join2.subTitle6') }}</span>
      </div>
      <div class="list">
        <div class="item" v-for="item in i18ntext">
          <div class="person">
            <div class="left">
              <div
                class="avatar"
                :style="{
                  backgroundImage: `url(/images/home/${item.avatar}.png)`
                }"
              ></div>
            </div>
            <div class="right">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="date">
                {{ item.date }}
              </div>
            </div>
          </div>
          <div class="rank">
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    {
      avatar: 'home_avatar_1',
      name: t('WJlZ-IbbbUW727RvF9OR2'),
      date: t('xWmhGjnWK2L08lg0kx7_7'),
      title: t('X4umXmk7_ZYQ49yLOGEa4'),
      content: t('Zf3y7iKnDSqwC9u0itLND')
    },
    {
      avatar: 'home_avatar_2',
      name: t('mpnqQ5VFhWKrb-qDcLP4w'),
      date: t('TA3ZPJ7J2opFV7X-fUq8b'),
      title: t('yzhWacMx4Ku1MdQ1WgjYk'),
      content: t('PiOEw2dVaUodRXPXsJ7Y9')
    },
    {
      avatar: 'home_avatar_3',
      name: t('IxMJ0AYUiiwiWVrAfQbjy'),
      date: t('C-pHeDYJ4qUhhYWoVEaGK'),
      title: t('kGzTygEzY2AGcGf75B382'),
      content: t('vyOcf00U0e9YOdmlkraVQ')
    },
    {
      avatar: 'home_avatar_6',
      name: t('jb5YJf46ylwCFTOU61MzN'),
      date: t('EeXP7aJOZjjAU6tRDakV9'),
      title: t('yeb7j4GYWQRC-cO0qEJor'),
      content: t('jA-hkYt5VFFOCE5QcKI25')
    },
    {
      avatar: 'home_avatar_7',
      name: t('ODOZbi1Je5p-D9Wr3WP4G'),
      date: t('9KoVkpfbHWsocGC_z4j3k'),
      title: t('XAAMhg1cREnTVF7ChiwRW'),
      content: t('HNR2sQVeIZpVmDt50WWF4')
    }
  ];
});
</script>

<style lang="less" scoped>
.join2-container {
  margin-top: 150px;

  .join2 {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
      display: flex;
      align-items: center;
      justify-content: center;

      .s-1 {
      }

      .s-2 {
        display: block;
        width: 20px;
        height: 20px;
        background: url(/public/images/home/home_title_star.png) no-repeat;
        margin: 0 10px;
      }

      .s-3 {
        color: #fa9b3b;
        margin-right: 10px;
      }

      .s-4 {
      }

      .s-5 {
        color: #0ebf6a;
        text-decoration: underline;
        margin: 0 10px;
      }

      .s-6 {
      }
    }

    > .list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      > .item {
        box-sizing: border-box;
        width: 386px;
        height: 410px;
        padding: 30px;
        background: #ffffff;
        box-shadow: 0px 4px 10px 0px #f1f1f1;
        border-radius: 14px;
        border: 1px solid #e6e6e6;
        display: flex;
        flex-direction: column;

        .person {
          display: flex;

          .left {
            .avatar {
              width: 60px;
              height: 60px;
            }
          }

          .right {
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .name {
              font-weight: 500;
              font-size: 20px;
              line-height: 28px;
            }

            .date {
              font-size: 16px;
              color: #4e4e4e;
            }
          }
        }

        .rank {
          margin-top: 20px;
          display: flex;
          justify-content: flex-start;
          gap: 8px;

          .rank-item {
            width: 28px;
            height: 28px;
            border-radius: 4px;
            background: rgba(255, 252, 235, 0.7);
            box-shadow: inset 0px 1px 0px 0px #ffffff;
            border-radius: 4px;
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;

            &::before {
              content: '';
              width: 16px;
              height: 16px;
              background: url(/public/images/home/home_title_star.png) no-repeat;
              background-size: 100%;
            }
          }
        }

        .title {
          margin-top: 20px;

          font-weight: 500;
          font-size: 24px;
          line-height: 33px;
        }

        .content {
          margin-top: 10px;

          font-size: 16px;
          color: #4e4e4e;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .join2-container {
    margin-top: 6.25rem;

    .join2 {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;

        display: block;

        .s-1 {
        }

        .s-2 {
          display: inline-block;
          width: 1.88rem;
          height: 1.88rem;
          margin: 0.5rem;
          position: relative;
          top: 0.7rem;
        }

        .s-3 {
        }

        .s-4 {
        }

        .s-5 {
        }

        .s-6 {
        }
      }

      > .list {
        margin-top: 3.13rem;
        gap: 1.25rem;

        > .item {
          width: 100%;
          height: auto;
          padding: 1.88rem;

          .person {
            .left {
              .avatar {
                width: 5.63rem;
                height: 5.63rem;
              }
            }

            .right {
              margin-left: 1.25rem;

              .name {
                font-size: 1.88rem;
                line-height: 2.63rem;
              }

              .date {
                font-size: 1.38rem;
                line-height: 1.88rem;
              }
            }
          }

          .rank {
            margin-top: 2rem;
            gap: 0.75rem;

            .rank-item {
              width: 2.63rem;
              height: 2.63rem;

              &::before {
              }
            }
          }

          .title {
            margin-top: 1.25rem;

            font-size: 2.25rem;
            line-height: 3.13rem;
          }

          .content {
            margin-top: 0.63rem;

            font-size: 1.63rem;
            line-height: 2.38rem;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
import type { NumbersItem } from '~/types/tabs';

const { t } = useI18n();
const SuperCharge = computed<NumbersItem>(() => {
  return [
    {
      label: t('home.list2.numbers[0].label'),
      content: t('home.list2.numbers[0].content')
    },
    {
      label: t('home.list2.numbers[1].label'),
      content: t('home.list2.numbers[1].content')
    },
    {
      label: t('home.list2.numbers[2].label'),
      content: t('home.list2.numbers[2].content')
    },
    {
      label: t('home.list2.numbers[3].label'),
      content: t('home.list2.numbers[3].content')
    }
  ];
});
const features = computed(() => {
  return [
    {
      icon: 'home_card_ic_1_nor',
      title: 'CDN',
      content: t('home.list2.features[0].content'),
      comingSoon: ''
    },
    {
      icon: 'home_card_ic_2_nor',
      title: t('home.SupportHUB.list[2].title'),
      content: t('home.list2.features[1].content'),
      comingSoon: ''
    },
    {
      icon: 'home_card_ic_3_nor',
      title: t('home.SupportHUB.list[3].title'),
      content: t('home.list2.features[2].content'),
      comingSoon: ''
    },
    {
      icon: 'home_card_ic_4_nor',
      title: t('home.SupportHUB.list[4].title'),
      content: t('home.list2.features[3].content'),
      comingSoon: ''
    },
    {
      icon: 'home_card_ic_5_nor',
      title: 'DNS',
      content: t('home.list2.features[4].content'),
      comingSoon: ''
    },
    {
      icon: 'home_card_ic_6_nor',
      title: t('home.list2.features[5].title'),
      content: t('home.list2.features[5].content'),
      comingSoon: t('home.coming-soo')
    }
  ];
});
</script>

<template>
  <div class="list2-container">
    <div class="page-container list2">
      <div class="title">
        {{ $t('home.list2.title') }}
      </div>
      <div class="sub-title">
        {{ $t('home.list2.subTitle') }}
      </div>
      <CommonNumbers
        is-row
        is-two-row
        style="margin-top: 60px"
        :items="SuperCharge"
      />
      <div class="features">
        <div class="feature" v-for="item in features">
          <div class="left">
            <div
              class="icon"
              :style="{
                backgroundImage: `url(/images/home/${item.icon}.png)`
              }"
            ></div>
            <XsOnly>
              <span class="coming-soon" v-if="item.comingSoon">
                {{ item.comingSoon }}
              </span>
            </XsOnly>
          </div>
          <div class="right">
            <div class="title">
              {{ item.title }}
              <LgOnly>
                <span class="coming-soon" v-if="item.comingSoon">
                  {{ item.comingSoon }}
                </span>
              </LgOnly>
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list2-container {
  padding-top: 150px;

  .list2 {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
    }

    > .features {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;

      > .feature {
        width: 400px;
        height: 162px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        position: relative;
        left: -1px;
        top: -1px;

        display: flex;
        padding: 31px 40px;

        > .left {
          .icon {
            width: 44px;
            height: 44px;
          }
        }

        > .right {
          margin-left: 20px;

          > .title {
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            display: flex;
            align-items: center;

            .coming-soon {
              width: 100px;
              height: 24px;
              background-image: url(/public/images/home/home_card_tag_bg.png);
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: PingFang-SC, PingFang-SC;
              font-weight: bold;
              font-size: 12px;
              color: #ffffff;
              line-height: 17px;
              margin-left: 10px;
            }
          }

          > .content {
            margin-top: 10px;

            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list2-container {
    padding-top: 6.25rem;

    .list2 {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
      }

      > .features {
        margin-top: 3.56rem;

        > .feature {
          width: 50%;
          flex-direction: column;
          padding: 2.63rem 2.13rem 4.81rem 1.25rem;

          > .left {
            display: flex;
            align-items: center;

            .icon {
              width: 4.13rem;
              height: 4.13rem;
            }

            .coming-soon {
              margin-left: 1.88rem;

              width: 9.38rem;
              height: 1.88rem;
              background-image: url(/public/images/home/home_card_tag_bg@2x.png);

              font-size: 1.25rem;
              line-height: 1.75rem;
              color: #ffffff;

              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          > .right {
            margin-left: 0;
            margin-top: 1.63rem;

            > .title {
              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .content {
              margin-top: 0.25rem;

              font-size: 1.5rem;
              line-height: 2.19rem;
            }
          }
        }
      }
    }
  }
}
</style>

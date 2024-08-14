<script lang="ts" setup>
const curTab = ref(0);

const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      tab: t('SRErWC047dGzs1OQy-8k9'),
      pic: '/images/products/stream/player/player-1@2x.png',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      picWidth: '610px',
      picHeight: '343px',
      hint: t('UN1xdDD2SZpiBTUgEI0Mi')
    },
    {
      tab: t('g5if7890vWsiiEu2V3Mo5'),
      pic: '/images/products/stream/player/player-1@2x.png',
      picWidth: '610px',
      picHeight: '343px',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      hint: t('PkbQt_aNZup3G_fStOr6T')
    },
    {
      tab: t('ShlO2o5-hxiE3A8ezcyU1'),
      pic: '/images/products/stream/player/player-1@2x.png',
      picWidth: '610px',
      picHeight: '343px',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      hint: t('o2la-S4kDY-DUJybo0gJT')
    },
    {
      tab: t('TmeMHfFR7pGh0e_hIP_2i'),
      pic: '/images/products/stream/player/player-1@2x.png',
      picWidth: '610px',
      picHeight: '343px',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      hint: t('jSTY3_tI4giT7AR0Az9VL')
    },
    {
      tab: t('EynL-zwIxXCRaa9LNMSix'),
      pic: '/images/products/stream/player/player-1@2x.png',
      picWidth: '610px',
      picHeight: '343px',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      hint: t('DTVJ6GUcjmjM2nzHKY08D')
    },
    {
      tab: t('-TLlW7kFrWRhznrTpAPCo'),
      pic: '/images/products/stream/player/player-1@2x.png',
      picWidth: '610px',
      picHeight: '343px',
      mpicWidth: '100%',
      mpicHeight: '24.25rem',
      hint: t('sgfB_yrvgeJKF3xlSqpaZ')
    }
  ];
});
</script>

<template>
  <div class="player-features-container">
    <div class="player-features page-container">
      <div class="bg"></div>
      <div class="content">
        <div class="title">
          {{ $t('products.stream.player.playerFeatures.title') }}
        </div>
        <div class="sub-title">
          {{ $t('products.stream.player.playerFeatures.subTitle') }}
        </div>
        <CommonTabs
          :tabs="i18ntext"
          v-model:cur-tab="curTab"
        />
        <template
          v-for="(item, index) in i18ntext"
        >
          <div class="content" v-if="curTab === index">
            <div
              class="pic"
              :style="{
                backgroundImage: `url(${item.pic})`,
                width: $device.isMobile ? item.mpicWidth : item.picWidth,
                height: $device.isMobile ? item.mpicHeight : item.picHeight
              }"
            ></div>
            <div v-if="item.hint" class="hint">{{ item.hint }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.player-features-container {
  margin-top: 120px;

  .player-features {
    padding-top: 80px;
    position: relative;

    > .bg {
      position: absolute;
      width: 1720px;
      height: 754px;
      left: 50%;
      top: 0;
      margin-left: -860px;
      background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%);
      border-radius: 60px;
    }

    > .content {
      position: relative;
      z-index: 2;

      > .title {
        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
        text-align: center;
      }

      > .sub-title {
        margin-top: 18px;

        font-size: 16px;
        color: #4e4e4e;

        text-align: center;
      }

      > .content {
        margin-top: 40px;

        > .pic {
          margin: 60px auto 0;
        }

        > .hint {
          margin-top: 40px;

          font-size: 16px;
          color: #4e4e4e;

          text-align: center;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .player-features-container {
    margin-top: 6.25rem;

    .player-features {
      padding-top: 0;
      position: relative;

      > .bg {
        display: none;
      }

      > .content {
        position: relative;
        z-index: 2;

        > .title {
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 3.5rem;
          text-align: left;
        }

        > .sub-title {
          margin-top: 1rem;
          font-size: 1.75rem;
          color: #4e4e4e;
          text-align: left;
        }

        > .content {
          margin-top: 2.5rem;

          > .pic {
            margin: 0 auto 0;
          }

          > .hint {
            margin-top: 2.5rem;
            font-size: 1.63rem;
            color: #4e4e4e;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
const curTab = ref(0);
const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    tabs: [
      {
        tab: t('AXii60hnsbUHSlXPcDi-e')
      },
      {
        tab: t('52y6SnZt-jC9v8Hn8Ld3k')
      }
    ],
    items: [
      {
        title: t('FRyMaifWCuSavbEsrvSTs'),
        value: t('R-G_YQLWg2AyNNdByunix'),
        percent: 20
      },
      {
        title: t('S5oeEAcNu7sUNObIJJEcs'),
        value: '50GB',
        percent: 10
      },
      {
        title: t('nationalFlag.continentName5'),
        value: t('uUs-S8_jCrVbE4TV-bnwB'),
        percent: 0
      },
      {
        title: t('_3om_T0affkVqse-Fp1nH'),
        value: '0GB',
        percent: 0
      }
    ],
    subs: [
      {
        title: t('pjO0SL6mKVQoWvd1QsWNv'),
        value: '$3.5/month'
      },
      {
        title: t('1I8BKYX1kjYtmXOn_E9xF'),
        value: '$1.25/month'
      }
    ]
  };
});
</script>

<template>
  <div class="calculator-1-container">
    <div class="calculator-1 page-container">
      <div class="title1">{{ $t('pricing.cdn.calculator1.title') }}</div>
      <div class="title2">{{ $t('pricing.cdn.calculator1.subTitle') }}</div>
      <Line top="40px" m-top="1.87rem" />

      <CommonTabs :tabs="i18ntext.tabs" v-model:cur-tab="curTab" />
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="list">
            <div class="item" v-for="item in i18ntext.items">
              <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div class="right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div class="list2">
            <div class="item" v-for="item in i18ntext.subs">
              <div class="left">
                <span class="title">{{ item.title }}</span>
                <span class="icon"></span>
              </div>
              <div class="right">
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <a class="trail-btn" href="#">
              {{ $t('pricing.cdn.calculator1.btn') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.calculator-1-container {
  margin-top: 120px;

  .calculator-1 {
    > .title1 {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .title2 {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }

    > .content {
      margin-top: 70px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > .left {
        .pic {
          width: 406px;
          height: 239px;
          background: url(/public/images/pricing/cdn/cdn_overview_calculate_img.png);
        }
      }

      > .right {
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 576px;

          > .item {
            width: 278px;
            height: 100px;
            background: #ffffff;
            box-shadow: 0px 4px 10px 0px #f1f1f1;
            border-radius: 8px;
            border: 1px solid #e6e6e6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0 24px;

            .left {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .title {
                font-weight: 500;
                font-size: 16px;
                color: #4e4e4e;
                line-height: 22px;
              }

              .value {
                margin-top: 10px;

                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 20px;
                line-height: 26px;
              }
            }

            .right {
              .circle {
                width: 44px;
                height: 44px;
                border: 16px solid #eeeeee;
                border-radius: 50%;
              }
            }
          }
        }

        .list2 {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;

          > .item {
            width: 278px;
            height: 50px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 9px;

            .left {
              display: flex;
              align-items: center;

              .title {
                font-weight: 500;
                font-size: 16px;
                color: #ffffff;
                line-height: 22px;
              }

              .icon {
                margin-left: 8px;

                width: 24px;
                height: 24px;
                background: url(/public/images/pricing/cdn/common_price_right_wihte_ic.png);
              }
            }

            .right {
              .value {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 20px;
                color: #ffffff;
                line-height: 26px;
              }
            }
          }
        }

        .btn-container {
          margin-top: 30px;

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .calculator-1-container {
    margin-top: 6.25rem;

    .calculator-1 {
      > .title1 {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .title2 {
        margin-top: 0.94rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      > .content {
        margin-top: 1.87rem;
        flex-direction: column;

        > .left {
          .pic {
            width: 25.38rem;
            height: 14.94rem;
          }
        }

        > .right {
          margin-top: 3.19rem;

          .list {
            justify-content: space-between;
            width: 43.13rem;
            gap: 1.25rem 0;

            > .item {
              width: 20.94rem;
              height: 8.75rem;

              .left {
                .title {
                  font-size: 1.5rem;
                  line-height: 2.06rem;
                }

                .value {
                  margin-top: 0.44rem;

                  font-size: 1.88rem;
                  line-height: 2.5rem;
                }
              }

              .right {
                .circle {
                  width: 3.63rem;
                  height: 3.63rem;
                  border-width: 1.5rem;
                }
              }
            }
          }

          .list2 {
            margin-top: 1.25rem;
            flex-direction: column;
            gap: 1.25rem;

            > .item {
              width: auto;
              height: 4.38rem;

              .left {
                .title {
                  font-size: 1.63rem;
                  line-height: 2.31rem;
                }

                .icon {
                  width: 2.25rem;
                  height: 2.25rem;
                }
              }

              .right {
                .value {
                  font-size: 1.88rem;
                  line-height: 2.5rem;
                }
              }
            }
          }

          .btn-container {
          }
        }
      }
    }
  }
}
</style>

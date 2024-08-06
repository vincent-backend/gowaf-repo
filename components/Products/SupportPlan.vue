<script lang="ts" setup>
const { t } = useI18n();
const props = defineProps<
  Partial<{
    bigtitle: string;
    subTitle: string;
    icon: string;
    isHidenList: boolean;
    title: string;
    itemsContent: string;
    itemsContent1: string;
  }>
>();

const localizedDefaults: any = computed(() => {
  const obj = {
    title: t('uVLepi2MEpLLZfIfvAVGl'),
    itemsContent: t('5xhrq9_th9JuyE1lOh4Im'),
    itemsContent1: t('hdyE1v9Ss1JUbDZnHpuwb'),
    icon: '/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png'
  };
  return mergeWithDefaults(obj, props);
});
const i18ntext = computed<any>(() => {
  return [
    t('UyW_8wt9a6R_vyi2j1EaV'),
    t('network.breadCrumbs.ddosProtection'),
    t('uRao7VE1b0JinEkTtLiy9'),
    'Perma-Caching'
  ];
});
</script>
<template>
  <div class="support-plan-container">
    <h2 v-if="title">{{ localizedDefaults.bigtitle }}</h2>
    <h5 v-if="subTitle">{{ localizedDefaults.subTitle }}</h5>
    <div class="support-plan page-container">
      <div class="content">
        <div class="line"></div>
        <div class="main">
          <div class="left">
            <div class="title">{{ localizedDefaults.title }}</div>
            <div class="content">{{ localizedDefaults.itemsContent }}</div>
            <div class="content">{{ localizedDefaults.itemsContent1 }}</div>
            <Line m-top="" top="30px" v-if="!localizedDefaults.isHidenList" />
            <div class="list" v-if="!localizedDefaults.isHidenList">
              <div class="item" v-for="item in i18ntext">
                <div class="icon"></div>
                <div class="text">{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="pic" :style="{ background: `url(${localizedDefaults.icon})` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.support-plan-container {
  margin-top: 120px;
  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    font-style: normal;
    text-transform: none;
    padding-bottom: 20px;
  }
  h5 {
    font-weight: 500;
    font-size: 16px;
    color: #46cf3a;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .support-plan {
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

      text-align: center;
    }

    > .content {
      margin-top: 80px;

      background: #ffffff;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: 1px solid #e6e6e6;
      position: relative;
      padding-bottom: 55px;

      > .line {
        width: 1200px;
        height: 8px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_card_top_line.png);
      }

      > .main {
        margin-top: 22px;
        display: flex;
        justify-content: space-between;

        > .left {
          width: 600px;
          margin-left: 30px;

          > .title {
            font-weight: 500;
            font-size: 24px;

            line-height: 33px;
            white-space: pre-wrap;
          }

          > .content {
            margin-top: 20px;

            font-size: 16px;
            color: #4e4e4e;
          }

          > .title2 {
            margin-top: 30px;

            font-weight: 500;
            font-size: 24px;

            line-height: 33px;
          }

          > .list {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px 0;

            .item {
              width: 50%;
              display: flex;
              align-items: center;

              .icon {
                width: 24px;
                height: 24px;
                background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
                border-radius: 12px;

                display: flex;
                align-items: center;
                justify-content: center;

                &::before {
                  content: '';
                  width: 14px;
                  height: 14px;
                  background: url(/public/images/pricing/cdn/home_Text_list_ic_tick.png);
                }
              }

              .text {
                margin-left: 10px;

                font-weight: 500;
                font-size: 16px;

                line-height: 22px;
              }
            }
          }

          > .btn-container {
            margin-top: 30px;
          }
        }

        > .right {
          margin-right: 42px;
          padding-top: 40px;
          .pic {
            width: 400px;
            height: 312px;
            background: url(/public/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png)
              no-repeat 0 0px;
            background-size: 400px 312px !important;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .support-plan-container {
    margin-top: 6.25rem;
    padding: 0 1.88rem;
    h2 {
      text-align: left;
      font-weight: 500;
      font-size: 2.13rem;
      color: #000000;
      line-height: 3rem;
      font-style: normal;
      text-transform: none;
      padding-bottom: 1rem;
    }
    h5 {
      font-weight: 500;
      font-size: 1.63rem;
      color: #46cf3a;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .support-plan {
      width: 100%;

      > .title {
        font-weight: 500;
        font-size: 2.13rem;
        line-height: 3rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.63rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
        margin-top: 1.88rem;
        background: #ffffff;
        box-shadow: 0px 4px 10px 0px #f1f1f1;
        border-radius: 0.88rem;
        border: 1px solid #e6e6e6;
        position: relative;
        padding: 0 1.88rem;
        padding-bottom: 3rem;
        box-sizing: border-box;

        > .line {
          width: calc(100% + 3.75rem);
          margin-left: -1.88rem;
          height: 0.5rem;
          background: url(/public/mobile-images/pricing/cdn/Pricing_CDN_card_top_line.png);
        }

        > .main {
          margin-top: 1.88rem;
          display: flex;
          flex-direction: column;
          // justify-content: space-between;

          > .left {
            width: 100%;
            margin-left: 0;

            > .title {
              font-weight: 500;
              font-size: 2.13rem;
              line-height: 3rem;
              white-space: inherit;
            }

            > .content {
              margin-top: 1rem;
              font-size: 1.63rem;
              color: #4e4e4e;
            }

            > .title2 {
              margin-top: 30px;
              font-weight: 500;
              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .list {
              margin-top: 1.88rem;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              gap: 1.88rem 0;

              .item {
                width: 100%;
                display: flex;
                align-items: center;

                .icon {
                  width: 2.25rem;
                  height: 2.25rem;
                  background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
                  border-radius: 1.13rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &::before {
                    content: '';
                    width: 1.25rem;
                    height: 1.25rem;
                    background: url(/public/images/pricing/cdn/home_Text_list_ic_tick.png);
                  }
                }

                .text {
                  margin-left: 1.25rem;
                  font-weight: 500;
                  font-size: 1.63rem;
                  line-height: 2.31rem;
                }
              }
            }

            > .btn-container {
              margin-top: 30px;
            }
          }

          > .right {
            margin-right: 0;
            padding-top: 3.3rem;
            margin: 0 auto;
            .pic {
              width: 24.63rem;
              height: 19.5rem;
              background: url(/public/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png)
                no-repeat 0 0px;
              background-size: 24.63rem 19.5rem !important;
            }
          }
        }
      }
    }
  }
}
</style>

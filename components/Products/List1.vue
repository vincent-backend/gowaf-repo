<template>
  <div class="products-list1-container">
    <div class="products-list1 page-container">
      <div class="title">
        {{ $t('products.cdn.overview.pricingSimplified.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.pricingSimplified.subTitle') }}
      </div>
      <div class="list">
        <div class="item" v-for="item in i18ntext">
          <div class="left">
            <div
              class="icon"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="icon-label">{{ item.iconLabel }}</div>
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="indicator-container">
              <div class="indicator" v-for="indicator in item.indicators">
                <div class="head">
                  <div
                    class="icon"
                    :style="{ backgroundImage: `url(${indicator.icon})` }"
                  ></div>
                  <div class="value">{{ indicator.value }}</div>
                </div>
                <div class="label">{{ indicator.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      icon: '/images/products/cdn/overview/cdn_overview_pricing_img_1@2x.png',
      iconLabel: t('AyxauOhdnQgkdN4WUCwdS'),
      title: t('86gYMIwtitK4qCc9qFhN2'),
      content: t('8C3VKpPqnCHIvfoImDCKx'),
      indicators: [
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_rise@2x.png',
          value: '46%',
          label: t('ohid8KwORcR1vZawcZDM_')
        },
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_earth@2x.png',
          value: '26ms',
          label: t('e2FsI_4zv0oGjv7NURJlr')
        }
      ]
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_pricing_img_2@2x.png',
      iconLabel: t('Tie1pPniQdN-d0GNf1w7x'),
      title: t('yfjfFQ5dHd72oOu_hc0lM'),
      content: t('ejXQwYKfVk-_bANiskfSr'),
      indicators: [
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_rise@2x.png',
          value: '75%',
          label: t('OZBFEeLwvEAEi-xqp3OdF')
        },
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_USD@2x.png',
          value: '$5',
          label: t('rKmY2Sf9IUdfmDXpwoVRw')
        }
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.products-list1-container {
  margin-top: 120px;

  .products-list1 {
    width: 1100px;

    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin: 18px auto 0;
      width: 630px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .list {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;

      > .item {
        display: flex;
        width: 450px;

        > .left {
          display: flex;
          flex-direction: column;
          align-items: center;

          > .icon {
            width: 148px;
            height: 148px;
          }

          > .icon-label {
            margin-top: 4px;

            width: 126px;
            height: 31px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 25px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ffffff;
            line-height: 20px;
          }
        }

        > .right {
          margin-left: 30px;

          > .title {
            padding-top: 10px;

            font-weight: 500;
            font-size: 16px;

            line-height: 22px;
          }

          > .content {
            margin-top: 14px;

            color: #4e4e4e;
            line-height: 20px;
          }

          > .indicator-container {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;

            > .indicator {
              > .head {
                display: flex;
                align-items: center;

                > .icon {
                  width: 40px;
                  height: 40px;
                }

                > .value {
                  margin-left: 10px;

                  font-family: Mont, Mont;
                  font-weight: 600;
                  font-size: 30px;

                  line-height: 40px;

                  background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }

              > .label {
                margin-top: 10px;

                font-size: 12px;
                color: #4e4e4e;
                line-height: 17px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .products-list1-container {
    margin-top: 6.25rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.63rem;

    .products-list1 {
      box-sizing: border-box;
      width: 100%;

      > .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        box-sizing: border-box;
        width: 100%;
        word-break: break-all;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2.5rem;
        gap: 2.5rem;

        > .item {
          display: flex;
          width: 100%;

          > .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > .icon {
              width: 16.25rem;
              height: 16.25rem;
            }

            > .icon-label {
              margin-top: 2.3rem;

              width: 15.24rem;
              height: 3.75rem;
              background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
              border-radius: 1.88rem;

              display: flex;
              align-items: center;
              justify-content: center;

              color: #ffffff;
              font-size: 1.75rem;
              line-height: 1.25rem;
            }
          }

          > .right {
            margin-left: 2.3rem;

            > .title {
              padding-top: 10px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 2.13rem;
              color: #000000;
              line-height: 3rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            > .content {
              margin-top: 0.6rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.75rem;
              color: #4e4e4e;
              line-height: 2.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            > .indicator-container {
              margin-top: 0.75rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              > .indicator {
                > .head {
                  display: flex;
                  align-items: center;

                  > .icon {
                    width: 2.5rem;
                    height: 2.5rem;
                  }

                  > .value {
                    margin-left: 0.75rem;
                    font-family: Mont, Mont;
                    font-weight: 600;
                    font-size: 3rem;
                    color: #000000;
                    line-height: 4rem;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }

                > .label {
                  margin-top: 0.75rem;
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 400;
                  font-size: 1.75rem;
                  color: #4e4e4e;
                  line-height: 2.38rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

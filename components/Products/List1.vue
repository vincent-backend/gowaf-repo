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
        <div
          class="item"
          v-for="item in i18ntext"
        >
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
      iconLabel: '114 PoPs',
      title: 'Standard Network',
      content:
        'Hop on a lightning fast global network withregion based pricing.',
      indicators: [
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_rise@2x.png',
          value: '46%',
          label: 'FASTER LOAD TIME'
        },
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_earth@2x.png',
          value: '26ms',
          label: 'GLOBAL LATENCY'
        }
      ]
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_pricing_img_2@2x.png',
      iconLabel: '10 PoPs',
      title: 'Volume Network',
      content:
        'Hop on a lightning fast global network withregion based pricing.',
      indicators: [
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_rise@2x.png',
          value: '75%',
          label: 'MORE AFFORDABLE'
        },
        {
          icon: '/images/products/cdn/overview/Products-CDN-overview_ic_USD@2x.png',
          value: '$5',
          label: 'PER TERABYTE'
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
</style>

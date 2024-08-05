<template>
  <div class="simplified-pricing-container">
    <div class="simplified-pricing page-container">
      <div class="title">
        {{ $t('products.stream.overview.simplifiedPricing.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.stream.overview.simplifiedPricing.subTitle') }}
      </div>
      <div class="content">
        <div
          :class="['column', `column-${index}`]"
          v-for="(item, index) in i18ntext"
        >
          <div class="head">{{ item.head }}</div>
          <div class="items" :class="`items-${index}`">
            <div class="item" v-for="item2 in item.items">
              <div class="title">{{ item2.title }}</div>
              <div class="sub-title">{{ item2.subTitle }}</div>
            </div>
          </div>
          <div class="items-2">
            <div class="item" v-for="item2 in item.items2">
              <i class="icon"></i>
              {{ item2 }}
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
      head: 'Traditional Cloud Provider',
      items: [
        {
          title: '$0.02/minute+',
          subTitle: 'Encoding'
        },
        {
          title: 'From $0.02/GB',
          subTitle: 'Storage'
        },
        {
          title: 'From $0.085/GB',
          subTitle: 'CDN'
        }
      ],
      items2: [
        'Expensive transcoding fees',
        'Bring and integrate your own external player',
        'Complex integration with additional charges',
        'Centralized storage prone to bottlenecks'
      ]
    },
    {
      head: 'Gowaf Stream',
      items: [
        {
          title: 'FREE',
          subTitle: 'Encoding'
        },
        {
          title: 'From $0.01/GB',
          subTitle: 'Storage'
        },
        {
          title: 'From $0.005/GB',
          subTitle: 'CDN'
        }
      ],
      items2: [
        'No security fees',
        'No transcoding fees',
        'Free player included',
        'Distributed video storage',
        'Extreme performance with 150 Tbps+ backbone'
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.simplified-pricing-container {
  margin-top: 120px;

  .simplified-pricing {
    > .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    > .sub-title {
      margin-top: 18px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 40px;
      display: flex;
      gap: 20px;
      background: #ffffff;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;

      box-sizing: border-box;
      padding: 20px;

      > .column {
        flex: 1;
        padding: 20px;
        padding-top: 74px;
        min-height: 590px;
        position: relative;

        > .head {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 54px;
          border-radius: 14px 14px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 500;
          font-size: 22px;
          color: #ffffff;
          line-height: 30px;
        }

        > .items {
          display: flex;
          flex-direction: column;
          gap: 14px;

          > .item {
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            border-radius: 14px;

            > .title {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 30px;

              line-height: 40px;
              text-align: center;
            }

            > .sub-title {
              margin-top: 10px;

              font-size: 16px;
              color: #4e4e4e;
            }
          }
        }

        > .items-2 {
          margin-top: 20px;

          display: flex;
          flex-direction: column;
          gap: 14px;

          > .item {
            display: flex;
            align-items: center;

            color: #4e4e4e;
            line-height: 20px;

            .icon {
              width: 18px;
              height: 18px;
              margin-right: 8px;
            }
          }
        }

        &.column-0 {
          background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);

          > .head {
            background: #292929;
          }

          > .items-2 {
            > .item {
              .icon {
                background: url(/public/images/products/stream/overview/home_Text_list_ic_tick_forbidden@2x.png);
              }
            }
          }
        }

        &.column-1 {
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);

          > .head {
            background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
            border-radius: 14px 14px 0px 0px;
          }

          > .items {
            > .item {
              > .title {
                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }

          > .items-2 {
            > .item {
              .icon {
                background: url(/public/images/products/stream/overview/home_Text_list_ic_tick@2x.png);
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .simplified-pricing-container {
    margin-top: 6rem;

    .simplified-pricing {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
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
        margin-top: 2.13rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        background: #ffffff;
        box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
        border-radius: 1.5rem;
        box-sizing: border-box;
        padding: 2.1rem;

        > .column {
          flex: 1;
          padding: 1.25rem;
          padding-top: 5.25rem;
          min-height: 44.75rem;
          position: relative;

          > .head {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 5.25rem;
            border-radius: 0.88rem 0.88rem 0rem 0rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 2.25rem;
            color: #ffffff;
            line-height: 3.13rem;
          }

          > .items {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            > .item {
              height: 7.5rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: #ffffff;
              border-radius: 0.88rem;

              > .title {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 2rem;
                line-height: 2.63rem;
                text-align: center;
              }

              > .sub-title {
                margin-top: 0.3rem;
                font-size: 1.5rem;
                color: #4e4e4e;
              }
            }
          }

          > .items-2 {
            margin-top: 2.6rem;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;

            > .item {
              display: flex;
              align-items: center;
              color: #4e4e4e;
              line-height: 2.06rem;

              .icon {
                width: 2.25rem;
                height: 2.25rem;
                margin-right: 0.5rem;
              }
            }
          }

          &.column-0 {
            background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);

            > .head {
              background: #292929;
            }

            > .items-2 {
              > .item {
                .icon {
                  background: url(/public/images/products/stream/overview/home_Text_list_ic_tick_forbidden@2x.png);
                }
              }
            }
          }

          &.column-1 {
            background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);

            > .head {
              background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
              border-radius: 0.88rem 0.88rem 0rem 0rem;
            }

            > .items {
              > .item {
                > .title {
                  background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }
            }

            > .items-2 {
              > .item {
                .icon {
                  background: url(/public/images/products/stream/overview/home_Text_list_ic_tick@2x.png);
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

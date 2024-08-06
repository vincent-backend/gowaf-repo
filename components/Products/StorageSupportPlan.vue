<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div class="line"></div>
        <div class="main">
          <div class="left">
            <template v-if="!slotDefault">
              <div class="title">
                {{
                  $t('products.storage.Europe.storageSupportPlan.content.title')
                }}
              </div>
              <div class="content">
                {{
                  $t(
                    'products.storage.Europe.storageSupportPlan.content.content'
                  )
                }}
              </div>
              <Line top="30px" m-top="" />
              <ul class="super-plan-list">
                <li v-for="(item, index) in i18ntext">
                  <h4>
                    <span>{{ item.num }}</span>
                    {{ item.unit }}
                  </h4>
                  {{ item.title }}
                </li>
              </ul>
              <Line top="10px" m-top="" />
              <div class="title mt30">
                {{
                  $t(
                    'products.storage.Europe.storageSupportPlan.content.title1'
                  )
                }}
              </div>
              <div class="content">
                {{
                  $t(
                    'products.storage.Europe.storageSupportPlan.content.content1'
                  )
                }}
              </div>
            </template>
            <slot></slot>
            <div class="btn-container">
              <NuxtLink href="#" class="trail-btn">
                {{ localizedDefaults.btnText }}
              </NuxtLink>
              <span v-if="localizedDefaults.btnsubText" class="btn-subtxt">{{
                localizedDefaults.btnsubText
              }}</span>
            </div>
          </div>
          <div class="right">
            <div class="pic">
              <img :src="localizedDefaults.icon" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n();
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    icon?: string;
    btnText: string;
    btnsubText: string;
    iconw?: string;
    isHidenList?: boolean;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('products.storage.Europe.storageSupportPlan.title'),
    subTitle: $t('products.storage.Europe.storageSupportPlan.subTitle'),
    btnText: $t('products.storage.Europe.storageSupportPlan.content.btn'),
    icon: '/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png'
  };
  return mergeWithDefaults(obj, props);
});
const i18ntext = computed<any>(() => {
  return [
    {
      num: '5',
      unit: 'min',
      title: $t('solutions.storageSoftware.supportPlan.main.responseTimeTitle')
    },
    {
      num: '3',
      unit: 'hrs',
      title: $t('solutions.storageSoftware.supportPlan.main.solveTimeTitle')
    }
  ];
});
</script>

<style lang="less" scoped>
.support-plan-container {
  margin-top: 120px;

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
      padding-bottom: 31px;

      > .line {
        width: 1200px;
        height: 8px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_card_top_line.png);
      }

      > .main {
        margin-top: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .left {
          width: 600px;
          margin-left: 30px;
          .mt30 {
            margin-top: 30px;
          }
          .super-plan-list {
            margin: 20px 0 20px;
            display: flex;
            li {
              margin-right: 30px;
              color: #4e4e4e;
              h4 {
                background: url(/public/images/products/storage/europe/home_Text_list_ic_tick_2x_5.png)
                  no-repeat 0 3px;
                background-size: 18px 18px !important;
                text-indent: 29px;
                font-weight: bold;
                color: #000;
                span {
                  font-size: 24px;
                  padding-right: 5px;
                  color: #000;
                }
              }
            }
          }
          > .title {
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
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
            display: flex;
            flex-direction: column;
            .trail-btn {
              width: fit-content;
            }
            .btn-subtxt {
              margin-top: 30px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 10px;
              color: #4e4e4e;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }

        > .right {
          margin-right: 90px;

          .pic {
            width: 312px;
            height: 312px;
            img {
              width: 100%;
            }
            // background: url(/public/images/pricing/cdn/Pricing_CDN_card_graph.png);
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .support-plan-container {
    margin-top: 6.25rem;

    .support-plan {
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
        margin-top: 3.13rem;
        background: #ffffff;
        box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
        border-radius: 0.88rem;
        border: 1px solid #e6e6e6;
        position: relative;
        padding-bottom: 3.13rem;

        > .line {
          width: 100%;
          height: 0.5rem;
          background: url(/public/images/pricing/cdn/Pricing_CDN_card_top_line.png);
        }

        > .main {
          margin-top: 1.88rem;
          width: 100%;
          padding: 0 1.88rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          > .left {
            width: 100%;
            margin-left: 0;
            .mt30 {
              margin-top: 1.88rem;
            }
            .super-plan-list {
              margin: 3.18rem 0 3.18rem;
              display: flex;
              li {
                margin-right: 6rem;
                color: #4e4e4e;
                font-size: 1.5rem;
                width: 50%;
                white-space: nowrap;
                h4 {
                  background: url(/public/images/products/storage/europe/home_Text_list_ic_tick_2x_5.png)
                    no-repeat 0 3px;
                  background-size: 2.25rem 2.25rem !important;
                  text-indent: 3.35rem;
                  font-weight: bold;
                  color: #000;
                  span {
                    font-size: 3rem;
                    padding-right: 0;
                    color: #000;
                  }
                }
              }
            }
            > .title {
              font-weight: 500;
              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .content {
              margin-top: 1rem;
              font-size: 1.63rem;
              color: #4e4e4e;
            }

            > .title2 {
              margin-top: 1rem;
              font-weight: 500;
              font-size: 2.13rem;
              line-height: 3rem;
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
                  width: 2.25rem;
                  height: 2.25rem;
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
              margin-top: 3.13rem;
            }
          }

          > .right {
            margin-right: 0;

            .pic {
              margin-top: 3.13rem;
              width: 19.5rem;
              height: 19.5rem;

              background: url(/public/images/pricing/cdn/Pricing_CDN_card_graph.png);
            }
          }
        }
      }
    }
  }
}
</style>

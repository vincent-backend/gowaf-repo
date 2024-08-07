<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">{{ $t('pricing.cdn.supportPlan.title') }}</div>
      <div class="sub-title">{{ $t('pricing.cdn.supportPlan.subTitle') }}</div>
      <div class="content">
        <div class="line"></div>
        <div class="main">
          <div class="left">
            <div class="title">
              {{ $t('pricing.cdn.supportPlan.content.title') }}
            </div>
            <div class="content">
              {{ $t('pricing.cdn.supportPlan.content.content') }}
            </div>
            <Line top="30px" m-top="1.87rem" />
            <div class="title2">
              {{ $t('pricing.cdn.supportPlan.content.list.title') }}
            </div>
            <div class="list">
              <div
                class="item"
                v-for="item in i18ntext"
              >
                <div class="icon"></div>
                <div class="text">{{ item }}</div>
              </div>
            </div>
            <div class="btn-container">
              <NuxtLinkLocale href="#" class="trail-btn">
                {{ $t('pricing.cdn.supportPlan.content.btn') }}
              </NuxtLinkLocale>
            </div>
          </div>
          <div class="right">
            <div class="pic"></div>
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
    t('FVKMVwnlG-zuH2eYQWRG2'),
    t('MoeTRf8UsMxd4C3Ae9paR'),
    t('Xbb8H3oe3t9PoplkIiZyb'),
    t('RlvMM4rSwCm0QgIHwo7KM')
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
        // width: 1200px;
        width: 100%;
        height: 8px;
        background-image: url(/images/pricing/cdn/Pricing_CDN_card_top_line@2x.png);
      }

      > .main {
        margin-top: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .left {
          width: 600px;
          margin-left: 30px;

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
                  background: url(/images/pricing/cdn/home_Text_list_ic_tick.png);
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
          margin-right: 90px;

          .pic {
            width: 312px;
            height: 312px;

            background: url(/images/pricing/cdn/Pricing_CDN_card_graph.png);
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .support-plan-container {
    margin-top: 6.25rem;

    .support-plan {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 0.94rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      > .content {
        margin-top: 3.19rem;

        border-radius: 0.88rem;
        border: 0.06rem solid #e6e6e6;
        padding-bottom: 3.13rem;

        > .line {
          height: 0.5rem;
          background-image: url(/public/mobile-images/pricing/cdn/Pricing_CDN_card_top_line@2x.png);
        }

        > .main {
          margin-top: 1.38rem;
          flex-direction: column;

          > .left {
            width: auto;
            margin: 0 1.81rem;

            > .title {
              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .content {
              margin-top: 1rem;

              font-size: 1.63rem;
              line-height: 2.38rem;
            }

            > .title2 {
              margin-top: 1.87rem;

              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .list {
              margin-top: 1.25rem;
              flex-direction: column;
              gap: 1.87rem;

              .item {
                width: auto;
                font-size: 1.63rem;

                .icon {
                  width: 2.25rem;
                  height: 2.25rem;

                  &::before {
                  }
                }

                .text {
                }
              }
            }

            > .btn-container {
              margin-top: 1.87rem;
            }
          }

          > .right {
            margin-top: 3.13rem;
            margin-right: 0;

            .pic {
              width: 19.5rem;
              height: 19.5rem;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">
        {{ $t('solutions.videoDelivery.supportPlan.title') }}
      </div>
      <div class="sub-title">
        {{ $t('solutions.videoDelivery.supportPlan.subTitle') }}
      </div>
      <div class="main">
        <div class="line"></div>
        <div class="content">
          <div class="left">
            <div class="title">
              {{ $t('solutions.videoDelivery.supportPlan.main.title') }}
            </div>
            <div class="sub-title">
              {{ $t('solutions.videoDelivery.supportPlan.main.subTitle') }}
            </div>
            <Line top="30px" m-top="2.5rem" />
            <div class="list">
              <div class="item" v-for="item in i18ntext">
                <div
                  
                >
                <img class="icon" :src="item.icon" />
              </div>
                <div class="right">
                  <div class="title">{{ item.title }}</div>
                  <div class="content">{{ item.content }}</div>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <NuxtLinkLocale href="#" class="trail-btn">
                {{ $t('solutions.videoDelivery.supportPlan.main.btn') }}
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
    {
      icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Color.png',
      title: t('1mw38tlXHVt0dpFXXcL73'),
      content: t('Dg3GgFWWOqNwSns82c1Ua')
    },
    {
      icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Controls.png',
      title: t('jSnXDVst51v5GCuXQCCga'),
      content: t('Gu-1xVA_rUMAYy5Dx56KS')
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

    > .main {
      margin-top: 80px;

      background: #ffffff;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: 1px solid #e6e6e6;
      box-sizing: border-box;
      padding: 30px;
      padding-right: 90px;
      position: relative;

      > .line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: url(/images/solutions/video-delivery/Pricing_CDN_card_top_line.png);
      }

      > .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .left {
          width: 600px;

          > .title {
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
          }

          > .sub-title {
            margin-top: 20px;

            font-size: 16px;
            color: #4e4e4e;
          }

          > .list {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            > .item {
              display: flex;
              align-items: center;

              > .icon {
                width: 48px;
                height: 48px;
              }

              > .right {
                margin-left: 16px;
                margin-right: 80px;
                flex: 1;

                .title {
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 22px;
                }

                .content {
                  margin-top: 6px;

                  color: #4e4e4e;
                  line-height: 20px;
                }
              }
            }
          }

          > .btn-container {
            margin-top: 30px;
          }
        }

        > .right {
          .pic {
            width: 338px;
            height: 270px;

            background: url(/images/solutions/video-delivery/Solutions_Video_Delivery_graph_3.png);
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .support-plan-container {
    margin: 6.25rem 0;

    .support-plan {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      > .main {
        margin-top: 3.13rem;

        border-radius: 0.88rem;
        padding: 1.87rem 1.87rem 3.13rem 1.87rem;

        > .line {
          height: 0.5rem;
        }

        > .content {
          flex-direction: column;

          > .left {
            width: auto;

            > .title {
              font-size: 2.13rem;
              line-height: 3rem;
            }

            > .sub-title {
              margin-top: 1rem;

              font-size: 1.63rem;
              line-height: 2.38rem;
            }

            > .list {
              margin-top: 1.87rem;

              gap: 2.5rem;

              > .item {
                > .icon {
                  width: 4.5rem;
                  height: 4.5rem;
                }

                > .right {
                  margin-left: 1.25rem;
                  margin-right: 0;

                  .title {
                    font-size: 1.63rem;
                    line-height: 2.31rem;
                  }

                  .content {
                    margin-top: 0.63rem;

                    font-size: 1.5rem;
                    line-height: 1.88rem;
                  }
                }
              }
            }

            > .btn-container {
              margin-top: 1.87rem;
            }
          }

          > .right {
            margin-top: 3.13rem;

            .pic {
              width: 21.13rem;
              height: 16.88rem;
            }
          }
        }
      }
    }
  }
}
</style>

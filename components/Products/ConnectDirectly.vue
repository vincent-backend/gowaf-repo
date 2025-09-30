<template>
  <div class="connect-directly-container">
    <div class="connect-directly page-container">
      <div class="title">
        {{ $t('products.cdn.overview.connectDirectly.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.connectDirectly.subTitle') }}
      </div>
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="title">
            {{ $t('products.cdn.overview.connectDirectly.content.title1') }}
          </div>
          <div class="content">
            {{ $t('products.cdn.overview.connectDirectly.content.content1') }}
          </div>
          <div class="item-container">
            <div class="item" v-for="item in i18ntext">
              <div class="head">
                <div
                  
                >
                <img class="icon" :src="item.icon" />
              </div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div class="label">{{ item.label }}</div>
            </div>
          </div>
          <div class="title">
            {{ $t('products.cdn.overview.connectDirectly.content.title2') }}
          </div>
          <div class="content">
            {{ $t('products.cdn.overview.connectDirectly.content.content2') }}
          </div>
          <div class="btn-container">
            <NuxtLinkLocale href="#" class="trail-btn">{{
              $t('products.cdn.overview.connectDirectly.content.btn')
            }}</NuxtLinkLocale>
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
      icon: '/images/products/cdn/overview/cdn_overview_connect_ic_1@2x.png',
      value: '5min',
      label: t('solutions.storageSoftware.supportPlan.main.responseTimeTitle')
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_connect_ic_2@2x.png',
      value: '3hrs',
      label: t('solutions.storageSoftware.supportPlan.main.solveTimeTitle')
    }
  ];
});
</script>

<style lang="less" scoped>
.connect-directly-container {
  padding: 80px 0;
  background: #fff;

  .connect-directly {
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
      margin-top: 50px;
      display: flex;
      align-items: center;

      > .left {
        .pic {
          width: 504px;
          height: 549px;

          background-image: url(/images/products/cdn/overview/cdn_overview_connect_img@2x.png);
        }
      }

      > .right {
        margin-left: 160px;

        > .title {
          font-weight: 500;
          font-size: 16px;

          line-height: 22px;
        }

        > .content {
          margin-top: 20px;

          color: #4e4e4e;
          line-height: 20px;
        }

        > .item-container {
          margin-top: 40px;
          margin-bottom: 60px;

          display: flex;
          gap: 30px;

          > .item {
            .head {
              display: flex;
              align-items: center;

              .icon {
                width: 32px;
                height: 32px;
              }

              .value {
                margin-left: 12px;

                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 30px;

                line-height: 40px;

                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }

            .label {
              margin-top: 4px;

              color: #4e4e4e;
              line-height: 20px;
            }
          }
        }

        > .btn-container {
          margin-top: 40px;
        }
      }
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1440px){
  .connect-directly-container .connect-directly > .content > .left .pic {
    width: 350px;
    height: 400px;
    background-size: contain !important;
    background-repeat: no-repeat;
  }
  .connect-directly-container .connect-directly > .content > .right {
    margin-left: 80px;
  }
}

@media (max-width: 767px) {
  .connect-directly-container {
    padding: 6.25rem 0;
    background: #fff;

    .connect-directly {
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
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .content {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        > .left {
          .pic {
            width: 31.5rem;
            height: 34.31rem;
            margin-bottom: 2rem;
            background-image: url(/images/products/cdn/overview/cdn_overview_connect_img@2x.png);
          }
        }

        > .right {
          margin-left: 0;

          > .title {
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

          > .item-container {
            margin-top: 2rem;
            margin-bottom: 2.5rem;

            display: flex;
            gap: 4rem;

            > .item {
              .head {
                display: flex;
                align-items: center;

                .icon {
                  width: 4rem;
                  height: 4rem;
                }

                .value {
                  margin-left: 1.5rem;
                  font-family: Mont, Mont;
                  font-weight: 600;
                  font-size: 3.5rem;
                  color: #000000;
                  line-height: 4.63rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }

              .label {
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

          > .btn-container {
            margin-top: 2.5rem;
          }
        }
      }
    }
  }
}
</style>

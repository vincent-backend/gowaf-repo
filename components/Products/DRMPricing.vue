<template>
  <div class="drm-pricing-container">
    <div class="drm-pricing page-container">
      <div class="bg"></div>
      <div class="content">
        <div class="title">
          {{ $t('products.stream.multiDRM.drmPricing.title') }}
        </div>
        <div class="sub-title">
          {{ $t('products.stream.multiDRM.drmPricing.subTitle') }}
        </div>
        <div class="section-1">
          <div class="left">
            <div class="title1">
              <span class="num">{{
                $t('products.stream.multiDRM.drmPricing.section1.num')
              }}</span>
              {{ $t('products.stream.multiDRM.drmPricing.section1.title') }}
            </div>
            <div class="content1">
              {{ $t('products.stream.multiDRM.drmPricing.section1.content') }}
            </div>
            <div class="title2">
              {{ $t('products.stream.multiDRM.drmPricing.section1.title2') }}
            </div>
            <div class="content2">
              {{ $t('products.stream.multiDRM.drmPricing.section1.content2') }}
            </div>
            <div class="list">
              <div class="item" v-for="item in i18ntext.list">
                <div class="icon"></div>
                <div class="label">{{ item.label }}</div>
                <div class="text">{{ item.content }}</div>
              </div>
            </div>
            <div class="btn-container">
              <a href="#" class="trail-btn">
                {{ $t('products.stream.multiDRM.drmPricing.section1.btn') }}
              </a>
            </div>
            <div class="hint">
              {{ $t('products.stream.multiDRM.drmPricing.section1.hint') }}
              <a href="#">{{
                $t('products.stream.multiDRM.drmPricing.section1.document')
              }}</a>
            </div>
          </div>
          <div class="right">
            <div class="pic"></div>
          </div>
        </div>

        <div class="section-2">
          <div class="left" v-if="!isMobile">
            <div class="pic"></div>
          </div>
          <div class="right">
            <template v-if="isMobile">
              <h3>
                {{ $t('products.stream.multiDRM.drmPricing.section2.title') }}
                {{ $t('products.stream.multiDRM.drmPricing.section2.title2') }}
              </h3>
            </template>
            <template v-else>
              <h3>
                {{ $t('products.stream.multiDRM.drmPricing.section2.title') }}
              </h3>
              <h3>
                {{ $t('products.stream.multiDRM.drmPricing.section2.title2') }}
              </h3>
            </template>
            <p>
              {{ $t('products.stream.multiDRM.drmPricing.section2.content') }}
            </p>
            <p>
              {{ $t('products.stream.multiDRM.drmPricing.section2.content1') }}
            </p>
            <div class="pic" v-if="isMobile"></div>
            <ul>
              <li v-for="(item, index) in i18ntext.list1" :key="index">
                <img :src="item.icon" :alt="item.title" />
                <div>
                  <h4>{{ item.title }}</h4>
                  {{ item.content }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return {
    list: [
      {
        label: '0-20k:',
        content: t('5Yp5cpeCsWoPLWKxVSUwS')
      },
      {
        label: '20k-100k:',
        content: t('JK3s2nEF-ELll99a_1byH')
      },
      {
        label: t('o2P3yje9GF8ryOc_Hak9g'),
        content: t('41qZgBrZE7Ao0Im6fIESS')
      },
      {
        label: '500k+:',
        content: t('2znnZhbdPAS1hkEPsnlSf')
      }
    ],
    list1: [
      {
        title: t('uVV4nXkQzBxFBEbK6iDWn'),
        icon: '/images/products/stream/multi-drm/media_perfect_ic_1@2x.png',
        content: t('SIE9QitriZYkHNMayKtxQ')
      },
      {
        title: t('NENo6KyBvySZGQnhIWXai'),
        icon: '/images/products/stream/multi-drm/media_perfect_ic_2@2x.png',
        content: t('XIo706yCeK8HEpR6dANbe')
      },
      {
        title: t('4uPwOuuRL_HeEv8GrETdR'),
        icon: '/images/products/stream/multi-drm/media_perfect_ic_3@2x.png',
        content: t('WadTAE5zyz0Q2IqaSw3UH')
      }
    ]
  };
});
</script>

<style lang="less" scoped>
.drm-pricing-container {
  margin: 120px auto;
  width: 96%;
  max-width: 1720px;
  background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%);
  border-radius: 60px;
  .drm-pricing {
    > .bg {
    }

    > .content {
      margin-top: 60px;
      > .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        padding-top: 80px;
      }

      > .sub-title {
        margin-top: 18px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      > .section-1 {
        margin-top: 40px;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
        > .left {
          width: 508px;
          > .title1 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            .num {
              height: 70px;
              font-weight: bold;
              font-size: 44px;
              color: #42cf4f;
              line-height: 70px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }

          > .content1 {
            margin-top: 18px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          > .title2 {
            margin-top: 30px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          > .content2 {
            margin-top: 18px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          > .list {
            margin-top: 30px;

            > .item {
              display: flex;
              align-items: center;
              margin-top: 10px;

              > .icon {
                width: 18px;
                height: 18px;
                background: url(/public/images/products/stream/multi-drm/multi_Text_list_ic_tick_forbidden@2x.png);
                background-size: 18px 18px;
              }

              > .label {
                margin-left: 10px;

                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 22px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }

              > .text {
                margin-left: 20px;

                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 16px;
                color: #000000;
                line-height: 22px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
          }
          > .btn-container {
            margin-top: 40px;
            .trail-btn {
              padding-left: 26px;
              padding-right: 26px;
            }
          }
          > .hint {
            margin-top: 10px;
            height: 24px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: #a3a3a3;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            a {
              color: #4e4e4e;
            }
          }
        }
        > .right {
          .pic {
            width: 582px;
            height: 582px;
            background: url(/public/images/products/stream/multi-drm/multi_drmprcing_img@2x.png)
              no-repeat 0 0;
            background-size: contain;
          }
        }
      }
      > .section-2 {
        margin-top: 120px;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
        .left {
          width: 582px;
          .pic {
            width: 582px;
            height: 632px;
            background: url(/public/images/products/stream/multi-drm/media_perfect_img@2x.png)
              no-repeat 0 40px;
            background-size: contain;
          }
        }
        .right {
          width: 569px;
          h3 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 42px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          > p {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 18px;
            &:nth-of-type(2) {
              margin-top: 0;
            }
          }
          > ul {
            margin-top: 50px;
            li {
              display: flex;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #4e4e4e;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 50px;
              img {
                width: 60px;
                height: 60px;
                padding-right: 26px;
              }
              h4 {
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 22px;
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
@media (max-width: 767px) {
  .drm-pricing-container {
    margin: 6.25rem auto;
    width: 100%;
    background: none;
    border-radius: 0;
    .drm-pricing {
      > .bg {
      }

      > .content {
        margin-top: 0;
        > .title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 2.5rem;
          color: #000000;
          line-height: 3.5rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-top: 0;
        }

        > .sub-title {
          margin-top: 1rem;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #000000;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        > .section-1 {
          margin-top: 2.25rem;
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
          box-sizing: border-box;
          justify-content: space-between;
          > .left {
            width: 100%;
            > .title1 {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 2.13rem;
              color: #000000;
              line-height: 3rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              .num {
                height: 4.38rem;
                font-weight: bold;
                font-size: 4.38rem;
                color: #42cf4f;
                line-height: 4.38rem;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }

            > .content1 {
              margin-top: 0.18rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.19rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            > .title2 {
              margin-top: 2.5rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 2.13rem;
              color: #000000;
              line-height: 3rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            > .content2 {
              margin-top: 0.18rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.19rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            > .list {
              margin-top: 2.8rem;

              > .item {
                display: flex;
                align-items: center;
                margin-top: 1.5rem;

                > .icon {
                  width: 2.25rem;
                  height: 2.25rem;
                  background: url(/public/images/products/stream/multi-drm/multi_Text_list_ic_tick_forbidden@2x.png);
                  background-size: 2.25rem 2.25rem;
                }

                > .label {
                  margin-left: 10px;

                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  font-size: 1.5rem;
                  color: #000000;
                  line-height: 1.5rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }

                > .text {
                  margin-left: 0.5rem;
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 400;
                  font-size: 1.5rem;
                  color: #000000;
                  line-height: 1.5rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }
              }
            }
            > .btn-container {
              margin-top: 2.5rem;
              .trail-btn {
                padding-left: 0;
                padding-right: 0;
                width: 21.88rem;
                height: 4.63rem;
                background: #ffffff;
                border-radius: 2.34rem;
              }
            }
            > .hint {
              margin-top: 2.5rem;
              height: 2.19rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.5rem;
              color: #a3a3a3;
              line-height: 2.19rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              a {
                color: #4e4e4e;
              }
            }
          }
          > .right {
            .pic {
              width: 36.38rem;
              height: 36.38rem;
              background: url(/public/images/products/stream/multi-drm/multi_drmprcing_img@2x.png)
                no-repeat 0 0;
              background-size: contain;
            }
          }
        }
        > .section-2 {
          margin-top: 6.25rem;
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
          justify-content: space-between;
          .pic {
            margin: 0 auto;
            width: 28.75rem;
            height: 30rem;
            background: url(/public/images/products/stream/multi-drm/media_perfect_img@2x.png)
              no-repeat -2rem 1rem;
            background-size: contain;
          }
          .right {
            width: 100%;
            h3 {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 2.5rem;
              color: #000000;
              line-height: 3.5rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            > p {
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.75rem;
              color: #4e4e4e;
              line-height: 2.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-top: 1rem;
              &:nth-of-type(2) {
                margin-top: 0;
              }
            }
            > ul {
              margin-top: 2.5rem;
              li {
                display: flex;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 2.13rem;
                color: #4e4e4e;
                line-height: 3rem;
                text-align: left;
                flex-direction: column;
                font-style: normal;
                text-transform: none;
                margin-bottom: 2.5rem;
                img {
                  width: 7.5rem;
                  height: 7.5rem;
                  padding-right: 0;
                }
                h4 {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500 !important;
                  font-size: 2.13rem;
                  color: #000000;
                  line-height: 2.19rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  padding: 1.25rem 0;
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

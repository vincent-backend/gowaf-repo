<template>
  <div class="how-stream-works-container">
    <div class="how-stream-works page-container">
      <div class="bg"></div>
      <div class="content">
        <div class="title">
          {{ $t('products.stream.overview.howStreamWorks.title') }}
        </div>
        <div class="sub-title">
          {{ $t('products.stream.overview.howStreamWorks.subTitle') }}
        </div>
        <div class="list">
          <div class="item" v-for="item in i18ntext">
            <div class="title">
              <i class="icon"></i>
              {{ item.title }}
            </div>
            <div class="works-items">
              <div
                class="item"
                v-for="item2 in item.items"
                :class="{ block: item2.block || $device.isMobile }"
              >
                <div class="title">{{ item2.title }}</div>
                <div class="inner-list" :class="{ max: item2.max }">
                  <div class="item" v-for="item3 in item2.items">
                    {{ item3 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="sub-list-container" v-if="item.subList">
              <div class="title">{{ item.subList.title }}</div>
              <div class="works-items">
                <div
                  class="item"
                  :class="{ block: item2.block || $device.isMobile }"
                  v-for="item2 in item.subList.items"
                >
                  <div class="title">{{ item2.title }}</div>
                  <div class="inner-list" :class="{ max: item2.max }">
                    <div class="item" v-for="item3 in item2.items">
                      {{ item3 }}
                    </div>
                  </div>
                </div>
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
      title: t('xRSpv0PiFB8-aq0N9IcIj'),
      items: [
        {
          title: t('Kopqg2Wm-g2B0j4EW4W8q'),
          block: true,
          items: [
            t('9MyqdJE26tKVK6ck7-aHT'),
            t('DCs49ImKTS-sU9znHJ_7u'),
            t('GIErHPH9Yn98Yz67iVoPq'),
            t('VVZw1SNnDR03beR36DQTe'),
            t('SSAsxWUZfXtpUlM9_6YV6'),
            t('_tltl9i6bUud9eKSDIBzK')
          ]
        }
      ]
    },
    {
      title: t('BacclUJ065kTN7-_j3F1t'),
      items: [
        {
          title: t('Kopqg2Wm-g2B0j4EW4W8q'),
          block: true,
          items: [
            t('s7IsyK0ww9n6ah45T2GAS'),
            t('FrnCYoeoeAF7kePFcTwQX'),
            t('products.stream.multiDRM.endlessSecurity.content.watermark'),
            'Multi-Res',
            'H.264',
            t('4rtAy_7gBc1uY23qRGUm8')
          ]
        }
      ],
      subList: {
        title: t('jU6QKNdUlNbquMPR0n8qQ'),
        items: [
          {
            title: t('w32iySanS0KFULmHnSnb5'),
            block: true,
            items: [
              t('ziHICWhZqvQGo-zI2gB9g'),
              t('utcAfnAadBCKyHFQoOqb3'),
              t('products.stream.multiDRM.endlessSecurity.content.watermark'),
              'Multi-Res',
              'H.264',
              t('hlaW0onMtUaeY5FjVapRs')
            ]
          },
          {
            title: t('teAWNISiEfh3uGiU2MBCG'),
            max: true,
            items: [t('rvmLYrJ4t3ZqXthlwFkvs')]
          },
          {
            title: t('uBdjJ70FLlA_p88_5ZaSi'),
            items: [t('qHqE7QNMQXtKahzo9Umm_'), t('zcd39rv9-HLYcsfQTJ5Io')]
          }
        ]
      }
    },
    {
      title: t('CoGBKEjuK0uMj7zsxnG2g'),
      items: [
        {
          title: t('Kopqg2Wm-g2B0j4EW4W8q'),
          items: [t('xcXjRkNsPvTfJ6pxiZlyg'), t('LncS1NcDD6IQLShQDlNgZ')]
        },
        {
          title: t('fVbQOInnRgflrAq9fIKVO'),
          items: [t('McUF7sDKCrL8bvJo7N57P'), t('5_tagZCc5w_BA_4n1iC7O'), t('O8uEcSp1L5E-g4e7y1bom')]
        },
        {
          title: t('tdvLjJi1w8irFe9kTHPp_'),
          max: true,
          items: ['CDN']
        }
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.how-stream-works-container {
  margin-top: 120px;
  margin-bottom: 120px;

  .how-stream-works {
    padding-top: 80px;
    position: relative;

    > .bg {
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -700px;
      width: 1400px;
      height: 659px;
      background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%);
      border-radius: 60px;
    }

    > .content {
      position: relative;
      z-index: 2;

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

      > .list {
        > .item {
          margin-top: 40px;

          background: #ffffff;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          box-sizing: border-box;
          padding: 36px;

          > .title {
            display: flex;
            align-items: center;

            i {
              margin-right: 12px;
              width: 44px;
              height: 44px;
              background: url(/images/products/stream/overview/stream_overview_ic_media@2x.png);
            }
          }

          .works-items {
            margin-top: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px 0;

            > .item {
              background-color: fade(#e6edfc, 50%);
              border-radius: 8px;
              box-sizing: border-box;
              padding: 20px 20px 32px 20px;

              > .title {
                font-weight: 500;
                font-size: 20px;

                line-height: 28px;
              }

              > .inner-list {
                margin-top: 12px;
                display: flex;
                justify-content: flex-start;
                gap: 20px;

                > .item {
                  width: 164px;
                  height: 44px;

                  background: #ffffff;
                  border-radius: 25px;

                  font-size: 16px;
                  color: #4e4e4e;

                  text-align: center;

                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }

              width: 49%;

              &.block {
                width: 100%;
              }
            }
          }

          > .sub-list-container {
            margin-top: 24px;
            border-radius: 8px;
            border: 2px solid #46cf3a;
            padding: 20px;

            > .title {
              font-weight: 500;
              font-size: 20px;
              color: #d8d8d8;
              line-height: 28px;

              background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .how-stream-works-container {
    margin-top: 6.63rem;

    .how-stream-works {
      padding-top: 0;
      position: relative;

      > .bg {
        display: none;
      }

      > .content {
        position: relative;
        z-index: 2;

        > .title {
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 3.5rem;
          text-align: left;
        }

        > .sub-title {
          margin-top: 0.94rem;
          font-size: 1.75rem;
          color: #4e4e4e;
          text-align: left;
        }

        > .list {
          > .item {
            margin-top: 1.94rem;
            background: #ffffff;
            box-shadow: 0rem 0rem 0.75rem 0rem rgba(0, 0, 0, 0.1);
            border-radius: 0.75rem;
            box-sizing: border-box;
            padding: 1rem;

            > .title {
              display: flex;
              align-items: center;

              i {
                margin-right: 1rem;
                width: 4.13rem;
                height: 4.13rem;
                background: url(/images/products/stream/overview/stream_overview_ic_media@2x.png);
              }
            }

            .works-items {
              margin-top: 1rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              gap: 1rem 0;

              > .item {
                background-color: fade(#e6edfc, 50%);
                border-radius: 2.34rem;
                box-sizing: border-box;
                padding: 1rem;
                width: 49%;

                > .title {
                  font-weight: 500;
                  font-size: 1.63rem;
                  line-height: 2.31rem;
                }

                > .inner-list {
                  margin-top: 1rem;
                  display: grid;
                  flex-wrap: wrap;
                  justify-content: center;
                  align-items: center;
                  grid-template-columns: 1fr 1fr 1fr;
                  gap: 1rem;

                  > .item {
                    width: 11.38rem;
                    height: 3.75rem;
                    background: #ffffff;
                    border-radius: 2.34rem;
                    font-size: 1.5rem;
                    color: #4e4e4e;
                    text-align: center;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    justify-content: center;
                  }
                  &.max {
                    grid-template-columns: 1fr;
                    > .item {
                      width: 100%;
                    }
                  }
                }

                &.block {
                  width: 100%;
                }
              }
            }

            > .sub-list-container {
              margin-top: 24px;
              border-radius: 8px;
              border: 2px solid #46cf3a;
              padding: 1.5rem;

              > .title {
                font-weight: 500;
                font-size: 1.5rem;
                color: #d8d8d8;
                line-height: 2.06rem;
                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
    }
  }
}
</style>

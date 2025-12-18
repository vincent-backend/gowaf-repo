<template>
  <div class="save-money-container">
    <div class="save-money page-container">
      <div class="title">{{ localizedDefaults.title }}</div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <Line top="40px" m-top="1.87rem" />
      <div class="list">
        <div class="item" v-for="item in localizedDefaults.fItems">
          <div class="header">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
          </div>
          <div class="list">
            <div class="item" v-for="item2 in item.items">
              <div class="label">{{ item2.label }}</div>
              <div class="value">{{ item2.value }}</div>
              <div class="bar">
                <div class="bar-value" :style="{ width: item2.width }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hint">{{ localizedDefaults.hint }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    hint?: string;
    fItems?: Array<{
      title: string;
      subTitle?: string;
      content?: string;
      items: Array<{
        label?: string;
        value?: string;
        width?: string;
      }>;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: t('pricing.overview.saveMoney.title'),
    subTitle: t('pricing.overview.saveMoney.subTitle'),
    hint: t('pricing.overview.saveMoney.hint'),
    fItems: [
      {
        title: t('iyOwWAra_HaTi2BxHppvS'),
        subTitle: t('76CiD8-t_TnOjq0YxduAu'),
        items: [
          {
            label: t('jwjvPYxK3dMuRy-sMe-AW'),
            value: '$50',
            width: '21.25%'
          },
          {
            label: 'CDN77',
            value: '$165',
            width: '31.875%'
          },
          {
            label: 'StackPath',
            value: '$170',
            width: '35%'
          },
          {
            label: 'KeyCDN',
            value: '$200',
            width: '38.125%'
          },
          {
            label: 'CloudFront',
            value: '$425+',
            width: '77.5%'
          },
          {
            label: t('products.cdn.breadCrumbs.fastly'),
            value: '$600+',
            width: '90%'
          }
        ]
      },
      {
        title: t('NvdW0Aa4BdLFXn-lhkQ_T'),
        subTitle: t('mz7bbjPgNZiJb8YM-HBT6'),
        items: [
          {
            label: t('Wq_vptFMpeS5cAlNdyWlG'),
            value: t('q1ufRx9wOX_bkNPJGQmN1'),
            width: '21.25%'
          },
          {
            label: 'CDN77',
            value: t('csCIFW8TY9zpb3yNL8fKY'),
            width: '31.875%'
          },
          {
            label: 'StackPath',
            value: t('YpZw6fU9DR6QpLNz24rZy'),
            width: '35%'
          },
          {
            label: 'KeyCDN',
            value: t('vxXVgoOv8_IzqgKmBVjtv'),
            width: '38.125%'
          },
          {
            label: 'CloudFront',
            value: t('UDMIK9G-HME1LWziILgn2'),
            width: '77.5%'
          },
          {
            label: t('products.cdn.breadCrumbs.fastly'),
            value: '29ms',
            width: '90%'
          }
        ]
      }
    ]
  };
  return mergeWithDefaults(obj, props);
});
</script>

<style lang="less" scoped>
.save-money-container {
  margin-top: 120px;

  .save-money {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 18px;

      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }

    > .list {
      margin-top: 40px;
      display: flex;
      gap: 20px;

      > .item {
        flex: 1;

        > .header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          > .title {
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }

          > .sub-title {
            font-size: 16px;
            color: #4e4e4e;
            text-align: right;
          }
        }

        > .list {
          margin-top: 16px;

          padding: 10px 20px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #e6e6e6;

          > .item {
            height: 56px;
            display: flex;
            align-items: center;

            .label {
              flex: 1;
              font-weight: 500;
              font-size: 16px;
              line-height: 22px;
            }

            .value {
              font-weight: 500;
              line-height: 20px;
              text-align: right;
            }

            .bar {
              margin-left: 16px;

              width: 160px;
              height: 6px;
              background: #fafafa;
              border-radius: 3px;

              .bar-value {
                height: 6px;
                background: linear-gradient(90deg, #46cf3a 0%, #36cfbc 100%);
                border-radius: 3px;
              }
            }
          }
        }
      }
    }

    > .hint {
      margin-top: 40px;

      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }
  }
}

// For mobile devices
@media (min-width: 767px) and (max-width: 1060px) {
  .save-money-container .save-money > .list > .item > .header > .title,
  .save-money-container .save-money > .list > .item > .header > .sub-title {
    height: 56.01px;
  }

  .save-money-container .save-money > .list > .item > .list > .item .label {
    font-size: 14px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .save-money-container {
    margin-top: 6.25rem;

    .save-money {
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

      > .list {
        margin-top: 3.13rem;
        flex-direction: column;
        gap: 3.31rem;

        > .item {
          > .header {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            > .title {
              font-size: 1.88rem;
              line-height: 1.88rem;
            }

            > .sub-title {
              margin-top: 1.25rem;
            }
          }

          > .list {
            margin-top: 1.87rem;

            padding: 2rem;

            > .item {
              height: 5rem;

              .label {
                font-size: 1.63rem;
                line-height: 2.31rem;
              }

              .value {
                font-size: 1.5rem;
                line-height: 2.06rem;
              }

              .bar {
                margin-left: 1rem;

                width: 10rem;
                height: 0.5rem;
                border-radius: 0.25rem;

                .bar-value {
                  height: 0.5rem;
                  border-radius: 0.25rem;
                }
              }
            }
          }
        }
      }

      > .hint {
        margin-top: 1.87rem;

        font-size: 1.63rem;
        line-height: 2.25rem;
        text-align: left;
      }
    }
  }
}
</style>

<script lang="ts" setup>
const curTab = ref(0);
withDefaults(
  defineProps<{
    isShowTitle: boolean;
    isShowReplicationPoints: boolean;
    itemWidth: string;
    subs: {
      title: string;
      value: string;
    }[];
    items: {
      title: string;
      value?: string;
      num?: string;
      percent: number;
    }[];
  }>(),
  {
    isShowTitle: true,
    isShowReplicationPoints: true,
    itemWidth: '270px'
  }
);
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return {
    tabs: [
      {
        tab: 'Gigabytes'
      },
      {
        tab: 'Terabytes'
      }
    ],
    list: [
      {
        label: 'One',
        status: 1
      },
      {
        label: 'Two',
        status: 0
      },
      {
        label: 'Three',
        status: 0
      },
      {
        label: 'Four',
        status: 0
      },
      {
        label: 'Five',
        status: 0
      },
      {
        label: 'Six',
        status: 0
      },
      {
        label: 'Six',
        status: 0
      },
      {
        label: 'Eight',
        status: 0
      }
    ]
  };
});
</script>

<template>
  <div class="calculator-1-container">
    <div class="calculator-1 page-container">
      <div class="title1" v-if="isShowTitle">
        {{ $t('pricing.cdn.calculator1.title') }}
      </div>
      <div class="title2" v-if="isShowTitle">
        {{ $t('pricing.cdn.calculator1.subTitle') }}
      </div>
      <Line top="40px" m-top="1rem" v-if="isShowTitle" />

      <CommonTabs
        :tabs="i18ntext.tabs"
        v-model:cur-tab="curTab"
      />
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="list">
            <div
              class="item"
              v-for="(item, index) in items"
              :key="index"
              :class="{ onlyOne: items.length == 1 }"
              :style="{ width: `${itemWidth}` }"
            >
              <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="value">{{ item.num }}</div>
              </div>
              <div class="right">
                <div class="circletrack">
                  <div class="circle" :class="'cirque' + item.percent"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="replication-points-container"
            v-if="isShowReplicationPoints"
          >
            <div class="row">
              <h4>Replication points</h4>
              <ul>
                <li
                  v-for="(item, index) in i18ntext.list"
                  :key="index"
                >
                  <span
                    :class="item.status ? 'big-circle' : 'sm-circle'"
                  ></span>
                  <label>{{ item.label }}</label>
                </li>
              </ul>
            </div>
            <div class="replication-points-info">
              <span>{{
                $t('products.stream.overview.Calculate.ReplicationPoints.label')
              }}</span>
              <img
                src="/images/products/stream/overview/common_price_right_wihte_ic2x.png"
                alt=""
              />
              <strong>{{
                $t('products.stream.overview.Calculate.ReplicationPoints.value')
              }}</strong>
              <label>{{
                $t('products.stream.overview.Calculate.ReplicationPoints.unit')
              }}</label>
            </div>
          </div>
          <div class="list2">
            <div class="item" v-for="item in subs">
              <div class="left">
                <span class="title">{{ item.title }}</span>
                <span class="icon"></span>
              </div>
              <div class="right">
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <a class="trail-btn" href="#">
              {{ $t('pricing.cdn.calculator1.btn') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.calculator-1-container {
  margin-top: 120px;

  .calculator-1 {
    > .title1 {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    > .title2 {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    > .content {
      margin-top: 70px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > .left {
        .pic {
          margin-top: 40px;
          width: 406px;
          height: 239px;
          background: url(/public/images/pricing/cdn/cdn_overview_calculate_img.png);
        }
      }

      > .right {
        padding-right: 80px;
        .replication-points-container {
          width: 560px;
          height: 163px;
          background: #ffffff;
          box-shadow: 0px 4px 10px 0px #f1f1f1;
          border-radius: 4px;
          border: 1px solid #e6e6e6;
          margin-top: 24px;
          padding: 20px 24px;
          box-sizing: border-box;
          .row {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          h4 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          ul {
            display: flex;
            justify-content: space-between;
            margin-top: 22px;
            margin-left: 0px;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              left: 6px;
              top: -3px;
              background: #eee;
              width: 485px;
              height: 7px;
            }
            li {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 12px;
              color: #4e4e4e;
              line-height: 17px;
              text-align: center;
              font-style: normal;
              text-transform: none;
              .sm-circle {
                width: 16px;
                height: 16px;
                background: #eeeeee;
                display: block;
                border-radius: 50%;
                transform: translate(30%, -50%);
                margin-bottom: 8px;
              }
              .big-circle {
                width: 24px;
                height: 24px;
                display: block;
                border-radius: 50%;
                background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
                transform: translate(0%, -50%);
              }
            }
          }
          .replication-points-info {
            font-family: PingFangSC, PingFang SC;
            font-size: 14px;
            color: #4e4e4e;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: table-cell;
            padding-top: 15px;
            strong {
              font-weight: 600;
              font-size: 18px;
            }
            img {
              width: 24px;
              height: 24px;
              vertical-align: middle;
              padding: 0 10px;
            }
          }
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 560px;

          > .item {
            min-width: 270px;
            height: 100px;
            background: #ffffff;
            box-shadow: 0px 4px 10px 0px #f1f1f1;
            border-radius: 8px;
            border: 1px solid #e6e6e6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0 24px;
            overflow: hidden;
            .left {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .title {
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #4e4e4e;
                line-height: 22px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }

              .value {
                margin-top: 10px;

                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 20px;
                color: #000000;
                line-height: 26px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
            .right {
              .circletrack {
                width: 44px;
                height: 44px;
                border: 16px solid #eeeeee;
                border-radius: 50%;
                position: relative;
                .circle {
                  position: absolute;
                  top: -16px;
                  left: -16px;
                  width: 44px;
                  height: 44px;
                  border: 16px solid #3bcf94;
                  border-radius: 50%;
                }
                .cirque45 {
                  /* 剪切圆环 */
                  clip-path: polygon(50% 0, 50% 50%, 180% 0);
                }
                .cirque15 {
                  /* 剪切圆环 */
                  clip-path: polygon(50% 0, 50% 50%, 80% 0);
                }
              }
            }
          }
        }

        .list2 {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;

          > .item {
            width: 278px;
            height: 50px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 9px;

            .left {
              display: flex;
              align-items: center;

              .title {
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #ffffff;
                line-height: 22px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }

              .icon {
                margin-left: 8px;

                width: 24px;
                height: 24px;
                background: url(/public/images/pricing/cdn/common_price_right_wihte_ic.png);
              }
            }

            .right {
              .value {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 20px;
                color: #ffffff;
                line-height: 26px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
          }
        }

        .btn-container {
          margin-top: 30px;

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .calculator-1-container {
    margin-top: 6.25rem;

    .calculator-1 {
      > .title1 {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 1.6;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      > .title2 {
        margin-top: 0.94rem;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 1.6;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-bottom: 1rem;
      }

      > .content {
        margin-top: 3.94rem;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        > .left {
          margin-bottom: 3.13rem;
          .pic {
            margin-top: 0;
            width: 25.38rem;
            height: 14.94rem;
            background: url(/public/images/pricing/cdn/cdn_overview_calculate_img.png);
          }
        }

        > .right {
          padding-right: 0;
          width: 100%;
          .replication-points-container {
            width: 100%;
            height: 12.75rem;
            background: #ffffff;
            box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
            border-radius: 0.5rem;
            border: 0.06rem solid #e6e6e6;
            margin-top: 1.8rem;
            padding: 1.5rem 1.88rem;
            box-sizing: border-box;
            .row {
              flex-direction: row;
            }
            h4 {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              margin-top: 1rem;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.06rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            ul {
              width: 60%;
              display: flex;
              justify-content: space-between;
              margin-top: 1.6rem;
              margin-left: 1.6rem;
              position: relative;
              &::before {
                position: absolute;
                content: '';
                left: 0.2rem;
                top: -0.1rem;
                background: #eee;
                width: 100%;
                height: 0.06rem;
              }
              li {
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 1rem;
                color: #4e4e4e;
                line-height: 2.23rem;
                text-align: center;
                font-style: normal;
                text-transform: none;
                height: 4.23rem;
                position: relative;
                label {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  font-size: 1.1rem;
                  color: #4e4e4e;
                  line-height: 2.23rem;
                  text-align: center;
                  font-style: normal;
                  text-transform: none;
                  position: absolute;
                  bottom: 0.2rem;
                  left: 0;
                }
                .sm-circle {
                  width: 1.13rem;
                  height: 1.13rem;
                  background: #eeeeee;
                  display: block;
                  border-radius: 50%;
                  transform: translate(30%, -50%);
                  margin-bottom: 0.5rem;
                }
                .big-circle {
                  width: 1.5rem;
                  height: 1.5rem;
                  display: block;
                  border-radius: 50%;
                  background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
                  transform: translate(0%, -50%);
                }
              }
            }
            .replication-points-info {
              font-family: PingFangSC, PingFang SC;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 1.6rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              display: table-cell;
              padding-top: 1rem;
              strong {
                font-weight: 600;
                font-size: 1.5rem;
              }
              img {
                width: 1.5rem;
                height: 1.5rem;
                vertical-align: middle;
              }
              label {
                font-size: 1.5rem;
              }
            }
          }
          .list {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            width: 100%;
            > .item {
              width: 48% !important;
              min-width: 48%;
              overflow: hidden;
              height: 8.75rem;
              background: #ffffff;
              box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
              border-radius: 0.5rem;
              border: 0.06rem solid #e6e6e6;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-sizing: border-box;
              padding: 0 1.8rem;
              overflow: hidden;
              &.onlyOne {
                width: 100% !important;
              }
              .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .title {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  font-size: 1.5rem;
                  white-space: nowrap;
                  color: #4e4e4e;
                  line-height: 1.6;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }

                .value {
                  margin-top: 1.6rem;
                  font-weight: 600;
                  font-size: 1.5rem;
                  color: #000000;
                  line-height: 1.6;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  height: 2rem;
                  width: 10rem;
                  display: block;
                }
              }
              .right {
                .circletrack {
                  width: 3.62rem;
                  height: 3.62rem;
                  border: 1.2rem solid #eeeeee;
                  border-radius: 50%;
                  position: relative;
                  .circle {
                    position: absolute;
                    top: -1rem;
                    left: -1rem;
                    width: 3.62rem;
                    height: 3.62rem;
                    border: 1rem solid #3bcf94;
                    border-radius: 50%;
                  }
                  .cirque45 {
                    /* 剪切圆环 */
                    clip-path: polygon(50% 0, 50% 50%, 180% 0);
                  }
                  .cirque15 {
                    /* 剪切圆环 */
                    clip-path: polygon(50% 0, 50% 50%, 80% 0);
                  }
                }
              }
            }
          }

          .list2 {
            margin-top: 1.25rem;
            width: 100%;
            flex-direction: column;
            gap: 1.25rem;

            > .item {
              width: auto;
              height: 4.38rem;
              position: relative;
              .left {
                .title {
                  font-size: 1.63rem;
                  line-height: 2.31rem;
                }

                .icon {
                  width: 2.25rem;
                  height: 2.25rem;
                  position: absolute;
                  left: 48%;
                  top: 1rem;
                }
              }

              .right {
                .value {
                  font-size: 1.88rem;
                  line-height: 2.5rem;
                }
              }
            }
          }

          .btn-container {
            margin-top: 1.8rem;

            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  items: {
    icon: string;
    title: string;
    content: string;
  }[];
  maxPerformance?: {
    title: string;
    content: string;
    numberHint1: string;
    numberHint2: string;
  };
}>();
</script>
<template>
  <div class="your-needs-container">
    <div class="your-needs page-container">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="list">
        <div class="item" v-for="item in items">
          <div
            class="icon"
            :style="{ backgroundImage: `url(${item.icon})` }"
          ></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
      <div class="max-performance" v-if="maxPerformance">
        <div class="left">
          <div class="title">{{ maxPerformance.title }}</div>
          <div class="content">{{ maxPerformance.content }}</div>
          <div class="numbers">
            <div class="item">
              <div class="number number-1">
                15%
                <div class="icon icon-up"></div>
              </div>
              <div class="hint">{{ maxPerformance.numberHint1 }}</div>
            </div>
            <div class="item">
              <div class="number number-2">
                30%
                <div class="icon icon-down"></div>
              </div>
              <div class="hint">{{ maxPerformance.numberHint2 }}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="pic"></div>
        </div>
      </div>
      <div class="one-problem">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="title">{{ $t('network.smartEdge.onProblem.title') }}</div>
          <div class="content">
            {{ $t('network.smartEdge.onProblem.content') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.your-needs-container {
  margin-top: 120px;

  .your-needs {
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
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      gap: 90px;

      .item {
        .icon {
          width: 100px;
          height: 100px;
        }

        .title {
          margin-top: 20px;

          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
        }

        .content {
          margin-top: 10px;

          font-size: 16px;
          color: #4e4e4e;
        }
      }
    }

    > .max-performance {
      margin-top: 120px;
      display: flex;
      justify-content: space-between;

      > .left {
        > .title {
          width: 405px;
          font-weight: 500;
          font-size: 30px;
          line-height: 42px;
        }

        > .content {
          margin-top: 20px;

          width: 540px;
          font-size: 16px;
          color: #4e4e4e;
        }

        > .numbers {
          margin-top: 40px;
          display: flex;

          > .item {
            width: 50%;

            .number {
              display: flex;
              align-items: center;

              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;
              line-height: 64px;

              &.number-1 {
                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              &.number-2 {
                background: linear-gradient(0deg, #f9c22f 0%, #fa6e4a 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;

                &.icon-up {
                  background: url(/images/network/smart-edge/SmartEdge™_ic_rise.png);
                }

                &.icon-down {
                  background: url(/images/network/smart-edge/SmartEdge™_ic_descend.png);
                }
              }
            }

            .hint {
              font-size: 16px;
              color: #4e4e4e;
            }
          }
        }
      }

      > .right {
        .pic {
          width: 400px;
          height: 270px;
          background: url(/images/network/smart-edge/SmartEdge™_graph_1.png);
        }
      }
    }

    .one-problem {
      margin-top: 120px;
      display: flex;
      align-items: center;

      > .left {
        .pic {
          width: 400px;
          height: 270px;
          background: url(/images/network/smart-edge/SmartEdge™_graph_2.png);
        }
      }

      > .right {
        margin-left: 190px;

        .title {
          width: 287px;
          font-weight: 500;
          font-size: 30px;
          line-height: 42px;
        }

        .content {
          margin-top: 20px;

          width: 540px;
          font-size: 16px;
          color: #4e4e4e;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .your-needs-container {
    margin-top: 6.25rem;

    .your-needs {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
      }

      > .list {
        margin-top: 3.13rem;
        justify-content: flex-start;
        flex-direction: column;
        gap: 2.5rem;

        .item {
          .icon {
            width: 9.38rem;
            height: 9.38rem;
          }

          .title {
            margin-top: 1.25rem;

            font-size: 2.13rem;
            line-height: 3rem;
          }

          .content {
            margin-top: 0.63rem;

            font-size: 1.5rem;
            line-height: 2.19rem;
          }
        }
      }

      > .max-performance {
        margin-top: 6.25rem;
        flex-direction: column;

        > .left {
          > .title {
            width: auto;
            font-size: 2.5rem;
            line-height: 3.5rem;
          }

          > .content {
            margin-top: 1rem;

            width: auto;
            font-size: 1.75rem;
            line-height: 2.38rem;
          }

          > .numbers {
            margin-top: 3.13rem;

            > .item {
              width: 50%;
              display: flex;
              align-items: center;
              flex-direction: column;

              .number {
                font-size: 3.13rem;
                line-height: 4.13rem;

                &.number-1 {
                }

                &.number-2 {
                }

                .icon {
                  width: 2.5rem;
                  height: 2.5rem;

                  &.icon-up {
                  }

                  &.icon-down {
                  }
                }
              }

              .hint {
                font-size: 1.5rem;
                line-height: 2.06rem;
                width: 10rem;
              }
            }
          }
        }

        > .right {
          margin-top: 3.13rem;

          .pic {
            margin: 0 auto;

            width: 25rem;
            height: 16.88rem;
          }
        }
      }

      .one-problem {
        margin-top: 6.25rem;
        align-items: flex-start;
        flex-direction: column-reverse;

        > .left {
          margin-top: 3.13rem;

          width: 100%;

          .pic {
            margin: 0 auto;

            width: 25rem;
            height: 16.88rem;
          }
        }

        > .right {
          margin-left: 0;

          .title {
            width: auto;
            font-size: 2.5rem;
            line-height: 3.5rem;
          }

          .content {
            margin-top: 0.94rem;

            width: auto;
            font-size: 1.75rem;
            line-height: 2.38rem;
          }
        }
      }
    }
  }
}
</style>

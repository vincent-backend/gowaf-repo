<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">
        {{ $t('solutions.storageSoftware.supportPlan.title') }}
      </div>
      <div class="sub-title">
        {{ $t('solutions.storageSoftware.supportPlan.subTitle') }}
      </div>
      <div class="main">
        <div class="line"></div>
        <div class="content">
          <div class="left">
            <div class="title">
              {{ $t('solutions.storageSoftware.supportPlan.main.title') }}
            </div>
            <div class="sub-title">
              {{ $t('solutions.storageSoftware.supportPlan.main.subTitle') }}
            </div>
            <Line top="30px" />
            <div class="solve-time-container">
              <div class="response-time">
                <div class="icon"></div>
                <div class="right">
                  <div class="time">
                    {{
                      $t(
                        'solutions.storageSoftware.supportPlan.main.responseTime'
                      )
                    }}
                  </div>
                  <div class="title">
                    {{
                      $t(
                        'solutions.storageSoftware.supportPlan.main.responseTimeTitle'
                      )
                    }}
                  </div>
                </div>
              </div>
              <div class="solve-time">
                <div class="icon"></div>
                <div class="right">
                  <div class="time">
                    {{
                      $t('solutions.storageSoftware.supportPlan.main.solveTime')
                    }}
                  </div>
                  <div class="title">
                    {{
                      $t(
                        'solutions.storageSoftware.supportPlan.main.solveTimeTitle'
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <a href="#" class="trail-btn">
                {{ $t('solutions.storageSoftware.supportPlan.main.btn') }}
              </a>
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

        background: url(/public/images/solutions/video-delivery/Pricing_CDN_card_top_line.png);
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

          > .solve-time-container {
            margin-top: 30px;

            display: flex;

            .response-time,
            .solve-time {
              width: 50%;
              display: flex;
              align-items: center;

              .icon {
                width: 60px;
                height: 60px;
              }

              .right {
                margin-left: 26px;

                .time {
                  font-family: Mont, Mont;
                  font-weight: 600;
                  font-size: 20px;

                  line-height: 26px;
                }

                .title {
                  margin-top: 6px;

                  color: #4e4e4e;
                  line-height: 20px;
                }
              }
            }

            .response-time {
              .icon {
                background: url(/public/images/solutions/storage-software/Solutions_Storage_Software_card_ic_5min@2x.png);
              }

              .right {
                .time {
                  background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }
            }

            .solve-time {
              .icon {
                background: url(/public/images/solutions/storage-software/Solutions_Storage_Software_card_ic_3hrs@2x.png);
              }

              .right {
                .time {
                  background: linear-gradient(0deg, #ff905d 0%, #ffb13e 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
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
            width: 312px;
            height: 312px;

            background: url(/public/images/solutions/storage-software/Pricing_CDN_card_graph@2x.png);
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
        font-weight: 500;
        font-size: 2.5rem;

        line-height: 1.6;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1.5rem;

        font-size: 1.75rem;
        color: #4e4e4e;

        text-align: left;
      }

      > .main {
        margin-top: 3.13rem;

        background: #ffffff;
        box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
        border-radius: 0.88rem;
        border: 0.06rem solid #e6e6e6;

        box-sizing: border-box;
        padding: 1.88rem;
        position: relative;

        > .line {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 0.6rem;

          background: url(/public/images/solutions/video-delivery/Pricing_CDN_card_top_line.png);
        }

        > .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;

          > .left {
            width: 100%;

            > .title {
              font-weight: 500;
              font-size: 2.13rem;

              line-height: 1.6;
            }

            > .sub-title {
              margin-top: 1rem;
              font-size: 1.63rem;
              color: #4e4e4e;
              margin-bottom: 1.8rem;
            }

            > .solve-time-container {
              margin-top: 1.8rem;

              display: flex;

              .response-time,
              .solve-time {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;

                .icon {
                  width: 5.63rem;
                  height: 5.63rem;
                }

                .right {
                  margin-left: 0;

                  .time {
                    margin-top: 0.8rem;
                    font-family: Mont, Mont;
                    font-weight: 600;
                    font-size: 1.88rem;

                    line-height: 1.6;
                  }

                  .title {
                    margin-top: 6px;

                    font-size: 1.5rem;

                    color: #4e4e4e;
                    line-height: 20px;
                  }
                }
              }

              .response-time {
                flex-direction: column;
                .icon {
                  background: url(/public/images/solutions/storage-software/Solutions_Storage_Software_card_ic_5min@2x.png);
                }

                .right {
                  .time {
                    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }

              .solve-time {
                .icon {
                  background: url(/public/images/solutions/storage-software/Solutions_Storage_Software_card_ic_3hrs@2x.png);
                }

                .right {
                  .time {
                    background: linear-gradient(0deg, #ff905d 0%, #ffb13e 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }
            }

            > .btn-container {
              margin-top: 2rem;
            }
          }

          > .right {
            margin-top: 3.13rem;
            .pic {
              width: 19.5rem;
              height: 19.5rem;

              background: url(/public/images/solutions/storage-software/Pricing_CDN_card_graph@2x.png);
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="your-needs-container">
    <div class="your-needs page-container">
      <div class="title">{{ $t('network.smartEdge.yourNeeds.title') }}</div>
      <div class="sub-title">{{ $t('network.smartEdge.yourNeeds.subTitle') }}</div>
      <div class="list">
        <div class="item" v-for="item in $tm('network.smartEdge.yourNeeds.items')">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
      <div class="max-performance">
        <div class="left">
          <div class="title">{{ $t('network.smartEdge.maxPerformance.title') }}</div>
          <div class="content">{{ $t('network.smartEdge.maxPerformance.content') }}</div>
          <div class="numbers">
            <div class="item">
              <div class="number number-1">
                15%
                <div class="icon icon-up"></div>
              </div>
              <div class="hint">{{ $t('network.smartEdge.maxPerformance.numberHint1') }}</div>
            </div>
            <div class="item">
              <div class="number number-2">
                30%
                <div class="icon icon-down"></div>
              </div>
              <div class="hint">{{ $t('network.smartEdge.maxPerformance.numberHint2') }}</div>
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
          <div class="content">{{ $t('network.smartEdge.onProblem.content') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.your-needs-container {
  margin-top: 120px;

  .your-needs {
    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.list {
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
          color: #4E4E4E;




        }
      }
    }

    .max-performance {
      margin-top: 120px;
      display: flex;
      justify-content: space-between;

      >.left {
        >.title {
          width: 405px;

          font-weight: 500;
          font-size: 30px;

          line-height: 42px;



        }

        >.content {
          margin-top: 20px;

          width: 540px;


          font-size: 16px;
          color: #4E4E4E;




        }

        >.numbers {
          margin-top: 40px;
          display: flex;

          >.item {
            width: 50%;

            .number {
              display: flex;
              align-items: center;

              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;

              line-height: 64px;




              &.number-1 {
                background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              &.number-2 {
                background: linear-gradient(0deg, #F9C22F 0%, #FA6E4A 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;

                &.icon-up {
                  background: url(/public/images/network/smart-edge/SmartEdge™_ic_rise.png)
                }

                &.icon-down {
                  background: url(/public/images/network/smart-edge/SmartEdge™_ic_descend.png)
                }
              }
            }

            .hint {


              font-size: 16px;
              color: #4E4E4E;




            }
          }
        }
      }

      >.right {
        .pic {
          width: 400px;
          height: 270px;
          background: url(/public/images/network/smart-edge/SmartEdge™_graph_1.png);
        }
      }
    }

    .one-problem {
      margin-top: 120px;
      display: flex;
      align-items: center;

      >.left {
        .pic {
          width: 400px;
          height: 270px;
          background: url(/public/images/network/smart-edge/SmartEdge™_graph_2.png);
        }
      }

      >.right {
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
          color: #4E4E4E;




        }
      }
    }
  }
}
</style>
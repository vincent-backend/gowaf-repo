<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">{{ $t('solutions.videoDelivery.supportPlan.title') }}</div>
      <div class="sub-title">{{ $t('solutions.videoDelivery.supportPlan.subTitle') }}</div>
      <div class="main">
        <div class="line"></div>
        <div class="content">
          <div class="left">
            <div class="title">{{ $t('solutions.videoDelivery.supportPlan.main.title') }}</div>
            <div class="sub-title">{{ $t('solutions.videoDelivery.supportPlan.main.subTitle') }}</div>
            <Line top="30px" />
            <div class="list">
              <div class="item" v-for="item in $tm('solutions.videoDelivery.supportPlan.main.list')">
                <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
                <div class="right">
                  <div class="title">{{ item.title }}</div>
                  <div class="content">{{ item.content }}</div>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <a href="#" class="trail-btn">
                {{ $t('solutions.videoDelivery.supportPlan.main.btn') }}
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

    >.main {
      margin-top: 80px;

      background: #FFFFFF;
      box-shadow: 0px 4px 10px 0px #F1F1F1;
      border-radius: 14px;
      border: 1px solid #E6E6E6;

      box-sizing: border-box;
      padding: 30px;
      padding-right: 90px;

      position: relative;

      >.line {
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 8px;

        background: url(/public/images/solutions/video-delivery/Pricing_CDN_card_top_line.png);
      }

      >.content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        >.left {
          width: 600px;

          >.title {

            font-weight: 500;
            font-size: 24px;

            line-height: 33px;



          }

          >.sub-title {
            margin-top: 20px;



            font-size: 16px;
            color: #4E4E4E;




          }

          >.list {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            >.item {
              display: flex;
              align-items: center;

              >.icon {
                width: 48px;
                height: 48px;
              }

              >.right {
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




                  color: #4E4E4E;
                  line-height: 20px;



                }
              }
            }
          }

          >.btn-container {
            margin-top: 30px;
          }
        }

        >.right {
          .pic {
            width: 338px;
            height: 270px;

            background: url(/public/images/solutions/video-delivery/Solutions_Video_Delivery_graph_3.png);
          }
        }
      }
    }
  }
}
</style>
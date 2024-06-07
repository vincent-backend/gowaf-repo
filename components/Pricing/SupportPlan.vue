<template>
  <div class="support-plan-container">
    <div class="support-plan page-container">
      <div class="title">{{ $t('pricing.cdn.supportPlan.title') }}</div>
      <div class="sub-title">{{ $t('pricing.cdn.supportPlan.subTitle') }}</div>
      <div class="content">
        <div class="line"></div>
        <div class="main">
          <div class="left">
            <div class="title">{{ $t('pricing.cdn.supportPlan.content.title') }}</div>
            <div class="content">{{ $t('pricing.cdn.supportPlan.content.content') }}</div>
            <Line top="30px" />
            <div class="title2">{{ $t('pricing.cdn.supportPlan.content.list.title') }}</div>
            <div class="list">
              <div class="item" v-for="item in $tm('pricing.cdn.supportPlan.content.list.items')">
                <div class="icon"></div>
                <div class="text">{{ item }}</div>
              </div>
            </div>
            <div class="btn-container">
              <a href="#" class="trail-btn">
                {{ $t('pricing.cdn.supportPlan.content.btn') }}
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

    >.content {
      margin-top: 80px;

      background: #FFFFFF;
      box-shadow: 0px 4px 10px 0px #F1F1F1;
      border-radius: 14px;
      border: 1px solid #E6E6E6;
      position: relative;
      padding-bottom: 31px;

      >.line {
        width: 1200px;
        height: 8px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_card_top_line.png);
      }

      >.main {
        margin-top: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >.left {
          width: 600px;
          margin-left: 30px;

          >.title {
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
          }

          >.content {
            margin-top: 20px;

            font-size: 16px;
            color: #4E4E4E;
          }

          >.title2 {
            margin-top: 30px;

            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
          }

          >.list {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px 0;

            .item {
              width: 50%;
              display: flex;
              align-items: center;

              .icon {
                width: 24px;
                height: 24px;
                background: linear-gradient(147deg, #F9C22F 0%, #FA6E4A 100%);
                border-radius: 12px;

                display: flex;
                align-items: center;
                justify-content: center;

                &::before {
                  content: '';
                  width: 14px;
                  height: 14px;
                  background: url(/public/images/pricing/cdn/home_Text_list_ic_tick.png);
                }
              }

              .text {
                margin-left: 10px;

                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
              }
            }
          }

          >.btn-container {
            margin-top: 30px;
          }
        }

        >.right {
          margin-right: 90px;

          .pic {
            width: 312px;
            height: 312px;

            background: url(/public/images/pricing/cdn/Pricing_CDN_card_graph.png);
          }
        }
      }
    }
  }
}
</style>
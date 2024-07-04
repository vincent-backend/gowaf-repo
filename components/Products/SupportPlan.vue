<script lang="ts" setup>
withDefaults(
  defineProps<{
    bigtitle: string;
    subTitle: string;
    icon: string;
    isHidenList: boolean;
    title: string;
    itemsContent: string;
    itemsContent1: string;
  }>(),
  {
    title: 'Save up to 80% on your content delivery costs',
    itemsContent:
      'Don’t overpay for your Content Delivery ever again. At bunny.net, you’ll always only pay for the bandwidth you use and nothing else. We focus on optimizing our costs and passing the savings down to you!',
    itemsContent1:
      'Take advantage of two simple pay-as-you-go pricing designed for any budget starting at just $0.02/GB.',
    icon: '/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png'
  }
);
</script>
<template>
  <div class="support-plan-container">
    <h2 v-if="title">{{ bigtitle }}</h2>
    <h5 v-if="subTitle">{{ subTitle }}</h5>
    <div class="support-plan page-container">
      <div class="content">
        <div class="line"></div>
        <div class="main">
          <div class="left">
            <div class="title">{{ title }}</div>
            <div class="content">{{ itemsContent }}</div>
            <div class="content">{{ itemsContent1 }}</div>
            <Line top="30px" v-if="!isHidenList" />
            <div class="list" v-if="!isHidenList">
              <div
                class="item"
                v-for="item in $tm(
                  'products.storage.Europe.supportPlan.content.list.items'
                )"
              >
                <div class="icon"></div>
                <div class="text">{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="pic" :style="{ background: `url(${icon})` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.support-plan-container {
  margin-top: 120px;
  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    font-style: normal;
    text-transform: none;
    padding-bottom: 20px;
  }
  h5 {
    font-weight: 500;
    font-size: 16px;
    color: #46cf3a;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
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

    > .content {
      margin-top: 80px;

      background: #ffffff;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: 1px solid #e6e6e6;
      position: relative;
      padding-bottom: 55px;

      > .line {
        width: 1200px;
        height: 8px;
        background: url(/public/images/pricing/cdn/Pricing_CDN_card_top_line.png);
      }

      > .main {
        margin-top: 22px;
        display: flex;
        justify-content: space-between;

        > .left {
          width: 600px;
          margin-left: 30px;

          > .title {
            font-weight: 500;
            font-size: 24px;

            line-height: 33px;
            white-space: pre-wrap;
          }

          > .content {
            margin-top: 20px;

            font-size: 16px;
            color: #4e4e4e;
          }

          > .title2 {
            margin-top: 30px;

            font-weight: 500;
            font-size: 24px;

            line-height: 33px;
          }

          > .list {
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
                background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
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

          > .btn-container {
            margin-top: 30px;
          }
        }

        > .right {
          margin-right: 42px;
          padding-top: 40px;
          .pic {
            width: 400px;
            height: 312px;
            background: url(/public/images/products/storage/europe/Pricing_Overview_banner_graph_2x.png)
              no-repeat 0 0px;
            background-size: 400px 312px !important;
          }
        }
      }
    }
  }
}
</style>

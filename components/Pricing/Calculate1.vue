<script lang="ts" setup>
const curTab = ref(0);
</script>

<template>
  <div class="calculator-1-container">
    <div class="calculator-1 page-container">
      <div class="title1">{{ $t('pricing.cdn.calculator1.title') }}</div>
      <div class="title2">{{ $t('pricing.cdn.calculator1.subTitle') }}</div>
      <Line top="40px" />

      <CommonTabs :tabs="$tm('pricing.cdn.calculator1.tabs')" v-model:cur-tab="curTab" />
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="list">
            <div class="item" v-for="item in $tm('pricing.cdn.calculator1.items')">
              <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div class="right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div class="list2">
            <div class="item" v-for="item in $tm('pricing.cdn.calculator1.subs')">
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
    >.title1 {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.title2 {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.content {
      margin-top: 70px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      >.left {
        .pic {
          width: 406px;
          height: 239px;
          background: url(/public/images/pricing/cdn/cdn_overview_calculate_img.png);
        }
      }

      >.right {
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 576px;

          >.item {
            width: 278px;
            height: 100px;
            background: #FFFFFF;
            box-shadow: 0px 4px 10px 0px #F1F1F1;
            border-radius: 8px;
            border: 1px solid #E6E6E6;
            display: flex;
            justify-content: space-between;
            align-items: center;

            box-sizing: border-box;
            padding: 0 24px;

            .left {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .title {

                font-weight: 500;
                font-size: 16px;
                color: #4E4E4E;
                line-height: 22px;



              }

              .value {
                margin-top: 10px;

                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 20px;

                line-height: 26px;



              }
            }

            .right {
              .circle {
                width: 44px;
                height: 44px;
                border: 16px solid #EEEEEE;
                border-radius: 50%;
              }
            }
          }
        }

        .list2 {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;

          >.item {
            width: 278px;
            height: 50px;
            background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
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

                font-weight: 500;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 22px;



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
                color: #FFFFFF;
                line-height: 26px;



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
</style>
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
            <div class="item" v-for="(item, index) in $tm('products.stream.overview.Calculate.list')" :key="index">
              <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="value">{{ item.num }}</div>
              </div>
              <div class="right">
                <div class="circletrack">
                  <div class="circle" :class="'cirque' + item.percent">{{ item.percent }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="replication-points-container">
            <h4>Replication points</h4>
            <ul>
              <li v-for="(item, index) in $tm('products.stream.overview.Calculate.ReplicationPoints.list')" :key="index">
                <span :class="item.status ? 'big-circle' : 'sm-circle'"></span>
                {{ item.label }}
              </li>
            </ul>
            <div class="replication-points-info">
              <span>{{ $t('products.stream.overview.Calculate.ReplicationPoints.label') }}</span>
              <img :src="$t('products.stream.overview.Calculate.ReplicationPoints.icon')" alt="">
              <strong>{{ $t('products.stream.overview.Calculate.ReplicationPoints.value') }}</strong>
              <label>{{ $t('products.stream.overview.Calculate.ReplicationPoints.unit') }}</label>
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
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.title2 {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.content {
      margin-top: 70px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      >.left {
        .pic {
          margin-top: 40px;
          width: 406px;
          height: 239px;
          background: url(/public/images/pricing/cdn/cdn_overview_calculate_img.png);
        }
      }

      >.right {
        padding-right: 80px;
        .replication-points-container{
          width: 560px;
          height: 163px;
          background: #FFFFFF;
          box-shadow: 0px 4px 10px 0px #F1F1F1;
          border-radius: 4px;
          border: 1px solid #E6E6E6;
          margin-top: 24px;
          padding: 20px 24px;
          box-sizing: border-box;
          h4{
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #4E4E4E;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          >ul{
            display: flex;
            justify-content: space-between;
            margin-top: 22px;
            margin-left: 0px;
            position: relative;
            &::before{
              position: absolute;
              content: '';
              left:6px;
              top: -3px;
              background: #eee;
              width: 485px;
              height: 7px;
            }
            li{
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 12px;
              color: #4E4E4E;
              line-height: 17px;
              text-align: center;
              font-style: normal;
              text-transform: none;
              .sm-circle{
                width: 16px;
                height: 16px;
                background: #EEEEEE;
                display: block;
                border-radius: 50%;
                transform: translate(30%, -50%);
                margin-bottom: 8px;
              }
              .big-circle{
                width: 24px;
                height: 24px;
                display: block;
                border-radius: 50%;                
                background: linear-gradient( 132deg, #46CF3A 0%, #36CFBC 100%);
                transform: translate(0%, -50%);
              }

            }
          }
          .replication-points-info{
            font-family: PingFangSC, PingFang SC;
            font-size: 14px;
            color: #4E4E4E;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: table-cell;
            padding-top: 15px;
            strong{
              font-weight: 600;
              font-size: 18px;
            }
            img{
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

          >.item {
            width: 270px;
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
            overflow: hidden;
            .left {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .title {
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #4E4E4E;
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
                border: 16px solid #EEEEEE;
                border-radius: 50%;
                position: relative;
                .circle {
                  position: absolute;
                  top: -16px;
                  left: -16px;
                  width: 44px;
                  height: 44px;
                  border: 16px solid #3BCF94;
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
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #FFFFFF;
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
                color: #FFFFFF;
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
</style>
<template>
  <div class="products-list1-container">
    <div class="products-list1 page-container">
      <div class="title">{{ $t('products.cdn.overview.pricingSimplified.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.overview.pricingSimplified.subTitle') }}</div>
      <div class="list">
        <div class="item" v-for="item in $tm('products.cdn.overview.pricingSimplified.items')">
          <div class="left">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="icon-label">{{ item.iconLabel }}</div>
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="indicator-container">
              <div class="indicator" v-for="indicator in item.indicators">
                <div class="head">
                  <div class="icon" :style="{ backgroundImage: `url(${indicator.icon})` }"></div>
                  <div class="value">{{ indicator.value }}</div>
                </div>
                <div class="label">{{ indicator.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.products-list1-container {
  margin-top: 120px;

  .products-list1 {
    width: 1100px;

    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.sub-title {
      margin: 18px auto 0;
      width: 630px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.list {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;

      >.item {
        display: flex;
        width: 450px;

        >.left {
          display: flex;
          flex-direction: column;
          align-items: center;

          >.icon {
            width: 148px;
            height: 148px;
          }

          >.icon-label {
            margin-top: 4px;

            width: 126px;
            height: 31px;
            background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
            border-radius: 25px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }

        >.right {
          margin-left: 30px;

          >.title {
            padding-top: 10px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.content {
            margin-top: 14px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #4E4E4E;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.indicator-container {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;

            >.indicator {
              >.head {
                display: flex;
                align-items: center;

                >.icon {
                  width: 40px;
                  height: 40px;
                }

                >.value {
                  margin-left: 10px;

                  font-family: Mont, Mont;
                  font-weight: 600;
                  font-size: 30px;
                  color: #000000;
                  line-height: 40px;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }

              >.label {
                margin-top: 10px;

                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 12px;
                color: #4E4E4E;
                line-height: 17px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
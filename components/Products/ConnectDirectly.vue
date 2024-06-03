<template>
  <div class="connect-directly-container">
    <div class="connect-directly page-container">
      <div class="title">{{ $t('products.cdn.overview.connectDirectly.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.overview.connectDirectly.subTitle') }}</div>
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="title">{{ $t('products.cdn.overview.connectDirectly.content.title1') }}</div>
          <div class="content">{{ $t('products.cdn.overview.connectDirectly.content.content1') }}</div>
          <div class="item-container">
            <div class="item" v-for="item in $tm('products.cdn.overview.connectDirectly.content.items')">
              <div class="head">
                <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div class="label">{{ item.label }}</div>
            </div>
          </div>
          <div class="title">{{ $t('products.cdn.overview.connectDirectly.content.title2') }}</div>
          <div class="content">{{ $t('products.cdn.overview.connectDirectly.content.content2') }}</div>
          <div class="btn-container">
            <a href="#" class="trail-btn">{{ $t('products.cdn.overview.connectDirectly.content.btn') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.connect-directly-container {
  padding: 80px 0;
  background: #FFF;

  .connect-directly {
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
      margin-top: 50px;
      display: flex;
      align-items: center;

      >.left {
        .pic {
          width: 504px;
          height: 549px;

          background-image: url(/public/images/products/cdn/overview/cdn_overview_connect_img@2x.png);
        }
      }

      >.right {
        margin-left: 160px;

        >.title {
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
          margin-top: 20px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4E4E4E;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        >.item-container {
          margin-top: 40px;
          margin-bottom: 60px;

          display: flex;
          gap: 30px;

          >.item {
            .head {
              display: flex;
              align-items: center;

              .icon {
                width: 32px;
                height: 32px;
              }

              .value {
                margin-left: 12px;

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

            .label {
              margin-top: 4px;

              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #4E4E4E;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }

        >.btn-container {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
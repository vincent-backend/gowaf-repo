<template>
  <div class="drm-pricing-container">
    <div class="drm-pricing page-container">
      <div class="bg"></div>

      <div class="content">
        <div class="title">{{ $t('products.stream.multiDRM.drmPricing.title') }}</div>
        <div class="sub-title">{{ $t('products.stream.multiDRM.drmPricing.subTitle') }}</div>

        <div class="section-1">
          <div class="left">
            <div class="title1">
              <div class="num">{{ $t('products.stream.multiDRM.drmPricing.section1.num') }}</div>
              {{ $t('products.stream.multiDRM.drmPricing.section1.title') }}
            </div>
            <div class="content1">
              {{ $t('products.stream.multiDRM.drmPricing.section1.content') }}
            </div>
            <div class="title2">
              {{ $t('products.stream.multiDRM.drmPricing.section1.title2') }}
            </div>
            <div class="content2">
              {{ $t('products.stream.multiDRM.drmPricing.section1.content2') }}
            </div>
            <div class="list">
              <div class="item" v-for="item in $tm('products.stream.multiDRM.drmPricing.section1.list')">
                <div class="icon"></div>
                <div class="label">{{ item.label }}</div>
                <div class="text">{{ item.content }}</div>
              </div>
            </div>
            <div class="btn-container">
              <a href="#" class="trail-btn">
                {{ $t('products.stream.multiDRM.drmPricing.section1.btn') }}
              </a>
            </div>
            <div class="hint">
              {{ $t('products.stream.multiDRM.drmPricing.section1.hint') }}
              <a href="#">{{ $t('products.stream.multiDRM.drmPricing.section1.document') }}</a>
            </div>
          </div>
          <div class="right">
            <div class="pic"></div>
          </div>
        </div>

        <div class="section-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-pricing-container {
  margin-top: 120px;

  .drm-pricing {
    >.bg {}

    >.content {
      margin-top: 60px;

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
        margin-top: 18px;

        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      >.section-1 {
        margin-top: 60px;

        >.left {
          >.title1 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.content1 {
            margin-top: 18px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.title2 {
            margin-top: 30px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.content2 {
            margin-top: 18px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          >.list {
            margin-top: 30px;

            >.item {
              display: flex;
              align-items: center;
              margin-top: 10px;

              >.icon {
                width: 10px;
                height: 10px;
                background-color: #000000;
                border-radius: 50%;
              }

              >.label {
                margin-left: 10px;

                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                line-height: 22px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }

              >.text {
                margin-left: 20px;

                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 16px;
                color: #000000;
                line-height: 22px;
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
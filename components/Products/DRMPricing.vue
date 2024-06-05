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
              <span class="num">{{ $t('products.stream.multiDRM.drmPricing.section1.num') }}</span>
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

        <div class="section-2">
          <div class="left">
            <div class="pic"></div>
          </div>
          <div class="right">
            <h3> {{ $t('products.stream.multiDRM.drmPricing.section2.title') }}</h3>
            <h3> {{ $t('products.stream.multiDRM.drmPricing.section2.title2') }}</h3>
            <p>{{ $t('products.stream.multiDRM.drmPricing.section2.content') }}</p>
            <p>{{ $t('products.stream.multiDRM.drmPricing.section2.content1') }}</p>
            <ul>
              <li v-for="(item, index) in $tm('products.stream.multiDRM.drmPricing.section2.list')" :key="index">
                <img :src="item.icon" :alt="item.title" />
                <div>
                  <h4>{{ item.title }}</h4>
                  {{ item.content }}
                </div>
              </li>
            </ul>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-pricing-container {
  margin: 120px auto;
  width: 96%;
  max-width: 1720px;
  background: linear-gradient( 180deg, #E6EDFC 0%, #FAFAFA 100%);
  border-radius: 60px;
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
        padding-top: 80px;
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
        margin-top: 40px;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
        >.left {
          width: 508px;
          >.title1 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            .num {
              height: 70px;
              font-weight: bold;
              font-size: 44px;
              color: #42CF4F;
              line-height: 70px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          
          }

          >.content1 {
            margin-top: 18px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4E4E4E;
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
                width: 18px;
                height: 18px;
                background: url(/public/images/products/stream/multi-drm/multi_Text_list_ic_tick_forbidden@2x.png);
                background-size: 18px 18px;
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
          >.btn-container {
            margin-top: 40px;
            .trail-btn{
              padding-left:26px;
              padding-right:26px;
            }
          }
          >.hint {
            margin-top: 10px;
            height: 24px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: #A3A3A3;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            a{
              color: #4E4E4E;
            }
          }
          
        }
        >.right {
          .pic{
            width: 582px;
            height: 582px;
            background: url(/public/images/products/stream/multi-drm/multi_drmprcing_img@2x.png) no-repeat 0 0;
            background-size: contain;
          }
        }
      }
      >.section-2 {
        margin-top: 120px;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
        .left{
          width: 582px;
          .pic{
            width: 582px;
            height: 632px;
            background: url(/public/images/products/stream/multi-drm/media_perfect_img@2x.png) no-repeat 0 40px;
            background-size: contain;            
          }
        }
        .right{
          width: 569px;
          h3{
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 42px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          >p{
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4E4E4E;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top:18px;
            &:nth-of-type(2){
              margin-top: 0;
            }
          }
          >ul{
            margin-top: 50px;
            li{
              display: flex;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #4E4E4E;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 50px;
              img{
                width: 60px;
                height: 60px;
                padding-right: 26px;
              }
              h4{
                font-family: PingFangSC, PingFang SC;
                font-weight: 500;
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
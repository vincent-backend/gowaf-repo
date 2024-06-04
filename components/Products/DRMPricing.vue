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

        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
        text-align: center;


      }

      >.sub-title {
        margin-top: 18px;



        font-size: 16px;

        line-height: 22px;
        text-align: center;


      }

      >.section-1 {
        margin-top: 60px;

        >.left {
          >.title1 {

            font-weight: 500;
            font-size: 24px;

            line-height: 33px;



          }

          >.content1 {
            margin-top: 18px;



            font-size: 16px;

            line-height: 22px;



          }

          >.title2 {
            margin-top: 30px;


            font-weight: 500;
            font-size: 24px;

            line-height: 33px;



          }

          >.content2 {
            margin-top: 18px;



            font-size: 16px;

            line-height: 22px;



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
                background- border-radius: 50%;
              }

              >.label {
                margin-left: 10px;


                font-weight: 500;
                font-size: 16px;

                line-height: 22px;



              }

              >.text {
                margin-left: 20px;



                font-size: 16px;

                line-height: 22px;



              }
            }
          }
        }
      }
    }
  }
}
</style>
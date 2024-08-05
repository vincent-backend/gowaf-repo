<template>
  <div class="connect-directly-container">
    <div class="connect-directly page-container">
      <div class="title">
        {{ $t('products.cdn.overview.connectDirectly.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.connectDirectly.subTitle') }}
      </div>
      <div class="content">
        <div class="left">
          <div class="pic"></div>
        </div>
        <div class="right">
          <div class="title">
            {{ $t('products.cdn.overview.connectDirectly.content.title1') }}
          </div>
          <div class="content">
            {{ $t('products.cdn.overview.connectDirectly.content.content1') }}
          </div>
          <div class="item-container">
            <div class="item" v-for="item in i18ntext">
              <div class="head">
                <div
                  class="icon"
                  :style="{ backgroundImage: `url(${item.icon})` }"
                ></div>
                <div class="value">{{ item.value }}</div>
              </div>
              <div class="label">{{ item.label }}</div>
            </div>
          </div>
          <div class="title">
            {{ $t('products.cdn.overview.connectDirectly.content.title2') }}
          </div>
          <div class="content">
            {{ $t('products.cdn.overview.connectDirectly.content.content2') }}
          </div>
          <div class="btn-container">
            <a href="#" class="trail-btn">{{
              $t('products.cdn.overview.connectDirectly.content.btn')
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      icon: '/images/products/cdn/overview/cdn_overview_connect_ic_1@2x.png',
      value: '5min',
      label: 'FIRST RESPONSE TIME'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_connect_ic_2@2x.png',
      value: '3hrs',
      label: 'AVERAGE SOLVE TIME'
    }
  ];
});
</script>

<style lang="less" scoped>
.connect-directly-container {
  padding: 80px 0;
  background: #fff;

  .connect-directly {
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
      margin-top: 50px;
      display: flex;
      align-items: center;

      > .left {
        .pic {
          width: 504px;
          height: 549px;

          background-image: url(/public/images/products/cdn/overview/cdn_overview_connect_img@2x.png);
        }
      }

      > .right {
        margin-left: 160px;

        > .title {
          font-weight: 500;
          font-size: 16px;

          line-height: 22px;
        }

        > .content {
          margin-top: 20px;

          color: #4e4e4e;
          line-height: 20px;
        }

        > .item-container {
          margin-top: 40px;
          margin-bottom: 60px;

          display: flex;
          gap: 30px;

          > .item {
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

                line-height: 40px;

                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }

            .label {
              margin-top: 4px;

              color: #4e4e4e;
              line-height: 20px;
            }
          }
        }

        > .btn-container {
          margin-top: 40px;
        }
      }
    }
  }
}
</style>

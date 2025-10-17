<template>
  <div class="drm-email-container">
    <div class="drm-email-content-container">
      <div class="left">
        <h3>{{ $t('products.stream.multiDRM.email.title') }}</h3>
        <h3>{{ $t('products.stream.multiDRM.email.subTitle') }}</h3>
        <ul>
          <li v-for="(item, index) in i18ntext" :key="index">
            <img :src="item.icon" :alt="item.content" />
            <p>{{ item.content }}</p>
          </li>
        </ul>
        <p>{{ $t('products.stream.multiDRM.email.content1') }}</p>
        <p>{{ $t('products.stream.multiDRM.email.content2') }}</p>
      </div>
      <div class="right">
        <ProductsDRMEmailForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      icon: '/images/products/stream/multi-drm/stream_multi_7_ic_1_2x.png',
      content: t('wp8pf2SviM0aV3tIQOOPK')
    },
    {
      icon: '/images/products/stream/multi-drm/stream_multi_7_ic_2_2x.png',
      content: t('rHrq8Zp00vSY6TfwTap73')
    },
    {
      icon: '/images/products/stream/multi-drm/stream_multi_7_ic_3_2x.png',
      content: t('tirdRGF6CEgpjmjHKzVtW')
    }
  ];
});
</script>

<style lang="less" scoped>
.drm-email-container {
  margin: 0 auto;
  padding: 70px 0;
  width: 100%;
  background: #fafafa;

  .drm-email-content-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 433px;

      h3 {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      ul {
        margin-top: 40px;
        width: 390px;
        li {
          display: flex;
          margin-bottom: 30px;
          p {
            padding-top: 10px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #4e4e4e;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-bottom: 30px;
          }
          img {
            width: 60px;
            height: 60px;
            margin-right: 26px;
          }
        }
      }
      > p {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-bottom: 30px;
      }
    }
    .right {
      width: 598px;
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1260px){
  .drm-email-container {
    width: calc(100% - 6rem);
    padding: 70px 3rem;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .drm-email-container {
    margin: 0 auto;
    padding: 1.88rem 0;
    box-sizing: border-box;
    width: 100%;
    background: #fafafa;
    .drm-email-content-container {
      width: 43rem;
      margin: 0 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .left {
        width: 100%;
        h3 {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 2.5rem;
          color: #000000;
          line-height: 3.5rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        ul {
          margin-top: 2.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          li {
            display: flex;
            flex-direction: column;
            margin-bottom: 2.5rem;
            align-items: center;
            p {
              width: 100%;
              padding-top: 10px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.19rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 0;
            }
            img {
              width: 7.5rem;
              height: 7.5rem;
              margin-right: 0px;
            }
          }
        }
        > p {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #4e4e4e;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-bottom: 2.5rem;
        }
      }
      .right {
        width: 100%;
      }
    }
  }
}
</style>

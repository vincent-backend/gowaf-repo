<template>
  <Header />
  <CommonHeader2
    :title="$t('kOUBuAKSEA4hynIbMTFgN') "
    sub-title="GDPR"
    :content="$t('luzUHxY7k2_XXvn67DOEj')"
    href="#"
  />
  <div class="page-container whiteBoard">
    <div class="left">
      <div class="title">{{ $t('CGoMSO_x_AN4FQDniuZW3') }}</div>
      <div class="content">
        <span class="grend">{{ $t('5w5IbVszJ_7G7_kEZ8val') }}</span> {{ $t('2Q-3DAEBmuLnwswlDooQ3') }}
      </div>
      <div class="title">{{ $t('aLwzlVdlLSaM0ZLeWAuCi') }}</div>
      <div class="content">
        {{ $t('5jB4DgMmpDWxWtTGZ2ZEI') }}
      </div>
    </div>
    <div class="right">
      <img src="/images/home/GDPR_graph_1@2x.png" />
    </div>
  </div>
  <div class="page-container content-container">
    <div class="block" v-for="(item, index) in i18ntext.blockText" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
      <SolutionsAd2
        v-for="(ad2, index) in item.ad2"
        :key="index"
        class="tops-ad2-container"
        :title="ad2.title"
        :content="ad2?.content"
        :content2="ad2?.content2"
        :content3="ad2?.content3"
        :content4="ad2?.content4"
        :pic="ad2.pic"
        :m-pic="ad2.pic"
        :pic-width="ad2.width"
        :pic-height="ad2.height"
        :m-pic-width="ad2.mw"
        :m-pic-height="ad2.mh"
        :reverse="isMobile() ? true : index % 2 === 0"
      />
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();

const i18ntext = computed<any>(() => {
  return {
    blockText: [
      {
        title: t('OR-INRFKCjZe2tGXdol2E'),
        content:
          t('ZfPRM31cTlSgrU_09SIYD'),
        ad2: [
          {
            title: t('VfKruvAUzL_YGS0J5hEtm'),
            content:
              t('47CS9IwlC3Vhk_0loQbWy'),
            content2:
              t('qgDHHclZ9RU06mmZpfydt'),
            pic: '/images/home/GDPR_graph_2@2x.png',
            width: '452px',
            height: '344px',
            mw: '28.25rem',
            mh: '21.5rem'
          },
          {
            title: t('1fuImIjMGTQfymMndwZBG'),
            content:
              t('AVGC8_FK2c7RCJtzqxGDP'),
            content2:
              t('yxy6lNiKvmXwWj33wfMTT'),
            pic: '/images/home/GDPR_graph_3@2x.png',
            width: '374px',
            height: '282px',
            mw: '23.38rem',
            mh: '17.63rem'
          }
        ]
      },
      {
        title: t('coHhv4FwXLnGMBRXAYLcV'),
        content:
          t('sLkYb0oL9nAkXkbFWxidJ'),
        ad2: [
          {
            title: t('xto8x5_D9MTE09XrELTuS'),
            content:
              t('jhyt0fSC1TTo-UYiGR3r-'),
            pic: '/images/home/GDPR_graph_4@2x.png',
            width: '472px',
            height: '310px',
            mw: '29.5rem',
            mh: '19.38rem'
          },
          {
            title: t('products.stream.overview.header.preTitle'),
            content:
              t('OhWd8P329w1gPiob4Jna2'),
            pic: '/images/home/GDPR_graph_5@2x.png',
            width: '384px',
            height: '308px',
            mw: '24rem',
            mh: '19.25rem'
          }
        ]
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.tops-ad2-container {
  :deep(.ad2) {
    width: 1200px;
  }
}
.content-container {
  display: flex;
  flex-direction: column;
  gap: 85px;
  margin: 80px auto;
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-bottom: 20px;
  }
  .content {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.whiteBoard {
  width: 1200px;
  margin-top: -60px;
  z-index: 9;
  position: relative;
  height: 490px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px #f1f1f1;
  border-radius: 14px;
  border: 1px solid #e6e6e6;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  gap: 74px;
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .content {
      .grend {
        color: #0ebf6a;
      }
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      color: rgba(78, 78, 78, 1);
      font-style: normal;
      text-transform: none;
    }
  }
  .right {
    flex-shrink: 0;
    width: fit-content;
    img {
      width: 368px;
      height: 298px;
    }
  }
}
@media (max-width: 767px) {
  .tops-ad2-container {
    :deep(.ad2) {
      width: 100%;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 6.25rem;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 1rem;
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .whiteBoard {
    width: 43.13rem;
    margin-top: -3.13px;
    z-index: 9;
    position: relative;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(166, 183, 183, 0.1);
    border-radius: 1.5rem;
    border: 0.06rem solid #e6e6e6;
    padding: 3.13rem 1.88rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 3.13rem;
    .left {
      display: flex;
      flex-direction: column;
      gap: 1.13rem;
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .content {
        .grend {
          color: #0ebf6a;
        }
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: rgba(78, 78, 78, 1);
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .right {
      flex-shrink: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 23rem;
        height: 18.63rem;
      }
    }
  }
}
</style>

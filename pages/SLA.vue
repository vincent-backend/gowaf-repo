<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('home.SLA.preTitle')"
    :title="$t('home.SLA.title')"
    :content="$t('home.SLA.content')"
    :show-foot="true"
    href="#"
    :pic="{
      src: '/images/home/SLA_banner_graph@2x.png',
      w: '497px',
      h: '491px',

      msrc: '/images/home/SLA_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '29.13rem'
    }"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :content4="item?.content4"
        :pic="item.pic"
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        m-pic-width="24.75rem"
        m-pic-height="20.25rem"
        :reverse="isMobile() ? true : index % 2 === 0"
      />
    </template>
  </div>
  <div class="page-container table">
    <div class="title">{{ $t('home.SLA.table.title') }}</div>
    <div class="sub-title">{{ $t('home.SLA.table.preTitle') }}</div>
    <div class="table-body">
      <div class="col" v-for="(items, index) in i18ntext.list" :key="index">
        <div class="item" v-for="(item, indexs) in items" :key="indexs">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'SLA'
});

const i18ntext = computed<any>(() => {
  return {
    items: [
      {
        pic: '/images/home/Uptime_Guaran_img@2x.png',
        title: t('home.guarantee'),
        content: t('home.SLAcontent1'),
        width: '400px',
        height: '400px'
      },
      {
        pic: '/images/home/Redundant_Infrastructure_img@2x.png',
        title: t('home.home.SLAtitle1'),
        content: t('home.SLAcontent2'),
        width: '360px',
        height: '360px'
      }
    ],
    list: [
      [
        t('home.monthlyAvailability'),
        '99.98%',
        '99.95%',
        '99.70%',
        '99.50%',
        '99.00%'
      ],
      [
        t('home.outageTime'),
        '10 – 59 minutes',
        '1 – 2 hours',
        '2 – 4 hours',
        '4 – 7 hours',
        '7+ hours'
      ],
      [
        t('home.outageTime'),
        '12 hours',
        '24 hours',
        '48 hours',
        '120 hours',
        '240 hours'
      ]
    ]
  };
});
</script>
<style lang="scss" scoped>
.table {
  position: relative;
  /* &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%);
  } */
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    // text-align: center;
    font-style: normal;
    text-transform: none;
    margin-bottom: 20px;
    z-index: 11;
  }
  .sub-title {
    width: 600px;
    // margin: 0 auto;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    // text-align: center;
    font-style: normal;
    text-transform: none;
    z-index: 11;
  }
  .table-body {
    margin: 31px 0 100px;
    z-index: 11;
    width: 100%;
    height: 354px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    padding: 40px 166px 40px 40px;
    box-sizing: border-box;
    justify-content: space-between;
    .col {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .item {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        &:first-child {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 30px;
          color: #000000;
          line-height: 42px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .table {
    position: relative;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      // text-align: center;
      font-style: normal;
      z-index: 11;
    }
    .sub-title {
      width: 37.5rem;
      // margin: 0 auto;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      // text-align: center;
      font-style: normal;
      text-transform: none;
      z-index: 11;
    }
    .table-body {
      margin: 2.15rem 0 6rem;
      overflow-x: auto;
      z-index: 11;
      width: 100%;
      height: 22.63rem;
      background: #ffffff;
      border-radius: 0.75rem;
      display: flex;
      padding: 2.5rem 1.5rem;
      box-sizing: border-box;
      justify-content: space-between;
      .col {
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .item {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.5rem;
          color: #4e4e4e;
          line-height: 1.5rem;
          text-align: left;
          font-style: normal;
          white-space: nowrap;
          text-transform: none;
          &:first-child {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 1.88rem;
            color: #000000;
            line-height: 2.63rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
</style>

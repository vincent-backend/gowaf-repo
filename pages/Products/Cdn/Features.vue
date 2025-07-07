<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />
  <LgOnly>
    <CommonHeader1
      :pre-title="$t('products.cdn.features.header.preTitle')"
      :title="$t('products.cdn.features.header.title')"
      :content="$t('products.cdn.features.header.content')"
      :show-foot="false"
      :pic="{
        src: '/images/products/cdn/features/cdn_features_banner_graph@2x.png',
        w: '440px',
        h: '368px',
        msrc: '/mobile-images/products/cdn/features/cdn_features_banner_graph@2x.png',
        mw: '24.44rem',
        mh: '20.44rem'
      }"
    />
  </LgOnly>
  <XsOnly>
    <CommonHeader1
      :pre-title="$t('products.cdn.features.header.preTitle')"
      :title="$t('products.cdn.features.header.title')"
      :content="$t('products.cdn.features.header.content')"
      :btn="$t('products.cdn.overview.header.btn')"
      href="/forgot"
      :hint="$t('products.cdn.overview.header.hint')"
      :show-foot="false"
      :pic="{
        src: '/images/products/cdn/features/cdn_features_banner_graph@2x.png',
        w: '440px',
        h: '368px',
        msrc: '/mobile-images/products/cdn/features/cdn_features_banner_graph@2x.png',
        mw: '24.44rem',
        mh: '20.44rem'
      }"
    />
  </XsOnly>

  <div class="ad2-container">
    <div class="title">
      {{ $t('products.cdn.features.ad2Container.title') }}
    </div>
    <div class="sub-title">
      {{ $t('products.cdn.features.ad2Container.subTitle') }}
    </div>

    <template v-for="(item, index) in i18ntext.items">
      <SolutionsAd2
        :title="item.title"
        :content="item.content"
        :list="item.list"
        :pic="item.pic"
        :m-pic="item.pic"
        pic-width="400px"
        pic-height="400px"
        m-pic-width="22.22rem"
        m-pic-height="22.22rem"
        :reverse="isMobile() ? true : index % 2 === 0"
      />
    </template>
  </div>

  <ProductsIntuitivePanels :list="intuitivePanelsList" />

  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    items: [
      {
        pic: '/images/products/cdn/features/cdnfeatures_performance_img@2x.png',
        title: t('resources.breadCrumbs.Performance'),
        content: t('WuXsIoHUAmrfgEFeol18D'),
        list: [
          t('IYJQsg9Hd3Q4FKJACLC5Z'),
          t('AK1pQc4KfyFxect6tcZqx'),
          t('2rOEwKaZ4CQbV5JtrkFYK'),
          'perma-Cache',
          t('6rOgj1q6f3qo96Lv5kl5c')
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_network_img@2x.png',
        title: t('network.breadCrumbs.parent'),
        content: t('0C9T3vVAckKKv1JR70LNm'),
        list: [
          t('TapgWeXg7dOtRJI4LfCTs'),
          t('jfz7nyYwHDI2EGBQSfYaI'),
          t('uRao7VE1b0JinEkTtLiy9'),
          'Automatic-Healing',
          t('SnjQNoEy1rQkq77c2NNTW'),
          t('zsppIhtq9QaDs27lSg4yr')
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_security_img@2x.png',
        title: t('resources.breadCrumbs.Security'),
        content: t('FC-7JC3tB-1N3m7TKembi'),
        list: [
          t('yvI1VPLH5eGAO7pvLdfFH'),
          t('RGWJ6H6-DCT1LmSCHc6sB'),
          t('iC0u_ZEzQliyyTzwBkRRA'),
          t('MiD8TA8CBSTQcgl2doZJo'),
          t('feQGdTJI4u6AoECQxK1bI'),
          t('PVuK0XsZri8h-6ZKXJvG_')
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_reporting_img@2x.png',
        title: t('Vecq3as4AAjmDwX24TdR2'),
        content: t('nYCZb0lCdzb5yUsSZElVI'),
        list: [
          'Live-Monitoring',
          t('nbE_5Qve4xjPx676aWVrn'),
          t('oYJ0eVjz48Lg1gV1tYEj4'),
          t('6bqG3cqW9P-GEOZLiDooK'),
          t('lgtjhwhLuTTFTHuEFOa3f')
        ]
      }
    ]
  };
});

const intuitivePanelsList = computed<any>(() => {
  return [
    {
      tab: t('uKR96V7fJQ9hdwTxe338u'),
      content: t('Y43wQu1zLlL_sjReUkI9R'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('gzfSWwGIJzFT-bIUZoEtQ'),
      content: t('0buAGSOd1EtlxA7uG6y3c'),
      pic: '/images/products/cdn/features/cdn_features_mockup_2@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('mC_E6AGWntvPccYLCjx0U'),
      content: t('X91ca7DJZbrsuNCF0KKAP'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('7vxHpe4sfv4-cvDaS0NpM'),
      content: t('nfrCpiIosotDhPh4vad7e'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    }
  ];
});
</script>

<style lang="less" scoped>
.ad2-container {
  margin-top: 80px;

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
}
@media (max-width: 767px) {
  .ad2-container {
    margin-top: 5.5rem;
    > .title {
      font-size: 2.22rem;
      line-height: 3.11rem;
    }

    > .sub-title {
      text-align: left;
      width: 38.33rem;
      margin: 0 auto;
      margin-top: 0.89rem;
      font-size: 1.56rem;
      line-height: 2.11rem;
    }
  }
}
</style>

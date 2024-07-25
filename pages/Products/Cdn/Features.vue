<template>
  <Header />
  <BreadCrumbs :title="$t('products.cdn.breadCrumbs.parent')" :items="CDNenu($t,$route.path)" />
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
      href="#"
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

    <template
      v-for="(item, index) in $tm('products.cdn.features.ad2Container.items')"
    >
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
        :reverse="index % 2 === 0"
      />
    </template>
  </div>

  <ProductsIntuitivePanels />

  <Footer />
</template>

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

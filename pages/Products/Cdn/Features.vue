<template>
  <Header />
  <BreadCrumbs :title="$t('products.cdn.breadCrumbs.parent')" :items="[
    { label: $t('products.cdn.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.features'), href: '#', current: true },
    { label: $t('products.cdn.breadCrumbs.permaCache'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.safehop'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.regions'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.comparison'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('products.cdn.features.header.preTitle')"
    :title="$t('products.cdn.features.header.title')" :content="$t('products.cdn.features.header.content')"
    pic="/images/products/cdn/features/cdn_features_banner_graph@2x.png" pic-width="440px" pic-height="368px"
    :show-foot="false" />

  <div class="ad2-container">
    <div class="title">{{ $t('products.cdn.features.ad2Container.title') }}</div>
    <div class="sub-title">{{ $t('products.cdn.features.ad2Container.title') }}</div>

    <template v-for="item, index in $tm('products.cdn.features.ad2Container.items')">
      <SolutionsAd2 :title="item.title" :content="item.content" :list="item.list" :pic="item.pic" pic-width="400px"
        pic-height="400px" :reverse="index % 2 === 0" />
    </template>
  </div>

  <ProductsIntuitivePanels />

  <Footer />
</template>

<style lang="less" scoped>
.ad2-container {
  margin-top: 80px;

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
}
</style>
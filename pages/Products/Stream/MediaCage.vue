<template>
  <Header />
  <BreadCrumbs :title="$t('products.stream.breadCrumbs.parent')" :items="[
    { label: $t('products.stream.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.player'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.mediaCage'), href: '#', current: true },
    { label: $t('products.stream.breadCrumbs.multiDRM'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.transcribeAI'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('products.stream.mediaCage.header.preTitle')"
    :title="$t('products.stream.mediaCage.header.title')" :content="$t('products.stream.mediaCage.header.content')"
    :btn="$t('products.stream.mediaCage.header.btn')" href="#" :hint="$t('products.stream.mediaCage.header.hint')" :pic="{
    src: '/images/products/stream/media-cage/stream_media_banner_graph@2x.png',
    w: '360px',
    h: '336px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <SolutionsAd1 :title="$t('products.stream.mediaCage.ad1.title')"
    :sub-title="$t('products.stream.mediaCage.ad1.subTitle')" :btn="$t('products.stream.mediaCage.ad1.btn')" href="#"
    pic="/images/products/stream/media-cage/video_banner_graph@2x.png" pic-width="300px" pic-height="300px" />

  <CommonList1 :title1="$t('products.stream.mediaCage.list1.title')"
    :title2="$t('products.stream.mediaCage.list1.subTitle')" :items="$tm('products.stream.mediaCage.list1.items')" />

  <ProductsPerfectSolution />

  <div class="player2-container">
    <div class="title">{{ $t('products.stream.mediaCage.player2.title') }}</div>
    <div class="sub-title">{{ $t('products.stream.mediaCage.player2.subTitle') }}</div>
    <div class="pic"></div>
    <div class="btn-container">
      <a href="#" class="trail-btn">
        {{ $t('products.stream.mediaCage.player2.btn') }}
      </a>
    </div>
  </div>

  <NetworkJoin1 v-bind="{
    ...$tm('products.stream.mediaCage.join1'),
    avatar: '/images/products/stream/media-cage/Network_Overview_evaluate_character@2x.png',
    mAvatar: '',
  }" />

  <Footer />
</template>

<style lang="less" scoped>
.player2-container {
  margin-top: 120px;

  >.title {

    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;


  }

  >.sub-title {
    margin-top: 18px;



    font-size: 16px;
    color: #4E4E4E;

    text-align: center;


  }

  >.pic {
    margin: 40px auto 0;

    width: 782px;
    height: 440px;
    background: url(/public/images/products/stream/player/player-1@2x.png);
  }

  >.btn-container {
    margin-top: 18px;

    display: flex;
    justify-content: center;
  }
}
</style>
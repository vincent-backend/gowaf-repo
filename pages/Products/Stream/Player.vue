<template>
  <Header />
  <BreadCrumbs :title="$t('products.stream.breadCrumbs.parent')" :items="[
    { label: $t('products.stream.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.player'), href: '#', current: true },
    { label: $t('products.stream.breadCrumbs.mediaCage'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.multiDRM'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.transcribeAI'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('products.stream.player.header.preTitle')"
    :title="$t('products.stream.player.header.title')" :content="$t('products.stream.player.header.content')"
    :btn="$t('products.stream.player.header.btn')" href="#" :hint="$t('products.stream.player.header.hint')" :pic="{
    src: '/images/products/stream/player/stream_player_banner_graph@2x.png',
    w: '472px',
    h: '322px',

    msrc: '',
    mw: '',
    mh: '',
  }" />


  <CommonList1 :title1="$t('products.stream.player.list1.title')" :title2="$t('products.stream.player.list1.subTitle')"
    :items="$tm('products.stream.player.list1.items')" />

  <ProductsPlayerFeatures />

  <SolutionsAd2 style="margin-top: 163px;" :title="$t('products.stream.player.ad2.title')"
    :content="$t('products.stream.player.ad2.content')" :btn="$t('products.stream.player.ad2.btn')" href="#"
    pic="/images/products/stream/player/cdnfeatures_security_img@2x.png" pic-width="400px" pic-height="400px" reverse />

  <div class="player2-container">
    <div class="title">{{ $t('products.stream.player.player2.title') }}</div>
    <div class="sub-title">{{ $t('products.stream.player.player2.subTitle') }}</div>
    <div class="pic"></div>
  </div>

  <NetworkJoin1 :title="$t('products.stream.player.join1.title')"
    :person-name="$t('products.stream.player.join1.person.name')"
    :person-title="$t('products.stream.player.join1.person.title')"
    :person-content="$t('products.stream.player.join1.person.content')"
    person-avatar="/images/products/stream/player/Network_Overview_evaluate_character@2x.png" />

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
}
</style>
<template>
  <Header />

  <CommonHeader1 :pre-title="$t('solutions.videoDelivery.header.preTitle')"
    :title="$t('solutions.videoDelivery.header.title')" :content="$t('solutions.videoDelivery.header.content')"
    :btn="$t('solutions.videoDelivery.header.btn')" href="#" :hint="$t('solutions.videoDelivery.header.hint')"
    :show-foot="false" :pic="{
    src: '/images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_1@2x.png',
    w: '362px',
    h: '338px',

    msrc: '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_1@2x.png',
    mw: '22.63rem',
    mh: '21.13rem',
  }" />

  <CommonNumbers style="margin-top: 60px;" :items="$tm('solutions.videoDelivery.numbers')" />

  <CommonSuperCharge v-bind="$tm('solutions.videoDelivery.superCharge')" />

  <SolutionsAd1 v-bind="{
    ...$tm('solutions.videoDelivery.ad1'),
    href: '#',
    pic: '/images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_2@2x.png',
    picWidth: '300px',
    picHeight: '264px',
    mPic: '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_2@2x.png',
    mPicWidth: '18.75rem',
    mPicHeight: '16.5rem',
  }" />

  <CommonList2 v-bind="$tm('solutions.videoDelivery.list2')" />

  <div class="map-container ">
    <div class="title">{{ $t('solutions.videoDelivery.map.title') }}</div>
    <div class="sub-title">{{ $t('solutions.videoDelivery.map.subTitle') }}</div>
    <NetworkBanner class="map-container" />
  </div>

  <CommonNumbers style="margin-top: 80px;" :items="$tm('solutions.videoDelivery.numbers2')" />

  <SolutionsFeatureList1 :items="$tm('solutions.videoDelivery.features')" />

  <!-- <PricingCalculate1 /> -->
  <!-- <SolutionsSupportPlan /> -->

  <!-- <NetworkJoin1 v-bind="{
    ...$tm('solutions.videoDelivery.join1'),
    avatar: '/images/solutions/video-delivery/Network_Overview_evaluate_character@2x.png',
    mAvatar: '',
  }" /> -->

  <!-- <Footer /> -->
</template>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  >.title {
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
  }

  >.sub-title {
    margin: 20px auto 0;

    width: 912px;
    font-size: 16px;
    color: #4E4E4E;
    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .map-container {
    margin-top: 6.25rem;

    >.title {
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
      padding-left: 1.87rem;
    }

    >.sub-title {
      margin-top: 1rem;

      width: auto;
      font-size: 1.75rem;
      line-height: 2.38rem;
      text-align: left;
      padding-left: 1.87rem;
    }

    .map-container {
      margin-top: 3.13rem;
    }
  }
}
</style>
<template>
  <Header />

  <CommonHeader1 :pre-title="$t('solutions.websiteWordpress.header.preTitle')"
    :title="$t('solutions.websiteWordpress.header.title')" :content="$t('solutions.websiteWordpress.header.content')"
    :btn="$t('solutions.websiteWordpress.header.btn')" href="#" :hint="$t('solutions.websiteWordpress.header.hint')"
    :show-foot="false" :pic="{
    src: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_banner_graph_1@2x.png',
    w: '460px',
    h: '404px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('solutions.websiteWordpress.numbers')" />

  <SolutionsCloserToUser :title="$t('solutions.websiteWordpress.closerToUser.title')"
    :sub-title="$t('solutions.websiteWordpress.closerToUser.subTitle')" />

  <SolutionsAccelerate :title="$t('solutions.websiteWordpress.accelerate.title')"
    :content="$t('solutions.websiteWordpress.accelerate.content')"
    :list1="$tm('solutions.websiteWordpress.accelerate.list1')"
    :list2="$tm('solutions.websiteWordpress.accelerate.list2')" />

  <SolutionsAd2 :title="$t('solutions.websiteWordpress.ad2.title')"
    :content="$t('solutions.websiteWordpress.ad2.content')" :btn="$t('solutions.websiteWordpress.ad2.btn')" href="#"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_2.png" pic-width="406px"
    pic-height="288px">
    <div class="ad2-list">
      <div class="item" v-for="item in $tm('solutions.websiteWordpress.ad2.items')">
        <div class="value">{{ item.value }}</div>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>
  </SolutionsAd2>

  <SolutionsAd1 :title="$t('solutions.websiteWordpress.ad1.title')"
    :sub-title="$t('solutions.websiteWordpress.ad1.subTitle')" :btn="$t('solutions.websiteWordpress.ad1.btn')" href="#"
    pic="/images/solutions/website-wordpress/Network_Overview_banner_graph@2x.png" pic-width="300px"
    pic-height="300px" />

  <CommonList1 v-bind="$tm('solutions.websiteWordpress.list1')" />

  <SolutionsAd2 :title="$t('solutions.websiteWordpress.ad2_1.title')"
    :content="$t('solutions.websiteWordpress.ad2_1.content')" :btn="$t('solutions.websiteWordpress.ad2_1.btn')" href="#"
    :list="$tm('solutions.websiteWordpress.ad2_1.list')"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_3.png" pic-width="426px"
    pic-height="270px" reverse />

  <SolutionsAd2 :title="$t('solutions.websiteWordpress.ad2_2.title')"
    :content="$t('solutions.websiteWordpress.ad2_2.content')" :btn="$t('solutions.websiteWordpress.ad2_2.btn')" href="#"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_4.png" pic-width="416px"
    pic-height="284px" style="padding-bottom: 120px;" />

  <SolutionsLogos :title="$t('solutions.websiteWordpress.logos.title')"
    :sub-title="$t('solutions.websiteWordpress.logos.subTitle')" :imgs="[
    `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_wordpress@2x.png`,
    `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_magento@2x.png`,
    `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_joomla@2x.png`,
    `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_drupal@2x.png`,
    `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_shopware@2x.png`,
  ]" :btn="$t('solutions.websiteWordpress.logos.btn')" href="#" />

  <NetworkJoin1 v-bind="{
    ...$tm('solutions.websiteWordpress.join1'),
    avatar: '/images/solutions/website-wordpress/SmartEdge™__evaluate_character@2x.png',
    mAvatar: '',
    showScores: false,
  }" />

  <Footer />
</template>

<style lang="less" scoped>
.ad2-list {
  margin-top: 40px;

  display: flex;

  .item {
    flex: 1;

    .value {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 48px;

      line-height: 64px;



      background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .label {


      font-size: 16px;
      color: #4E4E4E;




    }
  }
}
</style>
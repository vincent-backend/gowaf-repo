<template>
  <Header />

  <div class="test">
    <CommonHeader1 :pre-title="$t('solutions.websiteAcceleration.header.preTitle')"
      :title="$t('solutions.websiteAcceleration.header.title')"
      :content="$t('solutions.websiteAcceleration.header.content')"
      :btn="$t('solutions.websiteAcceleration.header.btn')" href="#"
      :hint="$t('solutions.websiteAcceleration.header.hint')" :show-foot="false" :pic="{
      src: '/images/solutions/website-acceleration/Solutions_Website_acceleration_banner_graph_1@2x.png',
      w: '480px',
      h: '384px',

      msrc: '',
      mw: '',
      mh: '',
    }" />

    <CommonNumbers style="margin-top: 80px;" :items="$tm('solutions.websiteAcceleration.numbers')" />

    <SolutionsCloserToUser :title="$t('solutions.websiteAcceleration.closerToUser.title')"
      :sub-title="$t('solutions.websiteAcceleration.closerToUser.subTitle')" />

    <SolutionsAccelerate :title="$t('solutions.websiteAcceleration.accelerate.title')"
      :content="$t('solutions.websiteAcceleration.accelerate.content')"
      :list1="$tm('solutions.websiteAcceleration.accelerate.list1')"
      :list2="$tm('solutions.websiteAcceleration.accelerate.list2')" />

    <SolutionsAd1 :title="$t('solutions.websiteAcceleration.ad1.title')"
      :sub-title="$t('solutions.websiteAcceleration.ad1.subTitle')" :btn="$t('solutions.websiteAcceleration.ad1.btn')"
      href="#" pic="/images/solutions/website-acceleration/Network_Overview_banner_graph@2x.png" pic-width="300px"
      pic-height="300px" />

    <SolutionsLogos :title="$t('solutions.websiteAcceleration.logos.title')"
      :sub-title="$t('solutions.websiteAcceleration.logos.subTitle')" :imgs="[
      `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_wordpress@2x.png`,
      `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_magento@2x.png`,
      `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_joomla@2x.png`,
      `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_drupal@2x.png`,
      `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_shopware@2x.png`,
    ]" :btn="$t('solutions.websiteAcceleration.logos.btn')" href="#" />

    <CommonList1 :title1="$t('solutions.websiteAcceleration.title1')"
      :title2="$t('solutions.websiteAcceleration.title2')" :items="$tm('solutions.websiteAcceleration.list1')" />

    <SolutionsAd2 :title="$t('solutions.websiteAcceleration.ad2_1.title')"
      :content="$t('solutions.websiteAcceleration.ad2_1.content')"
      :list="$tm('solutions.websiteAcceleration.ad2_1.list')"
      pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_1.png" pic-width="358px"
      pic-height="286px" />

    <SolutionsAd2 :title="$t('solutions.websiteAcceleration.ad2_2.title')"
      :content="$t('solutions.websiteAcceleration.ad2_2.content')" :btn="$t('solutions.websiteAcceleration.ad2_2.btn')"
      href="#" :list="$tm('solutions.websiteAcceleration.ad2_2.list')"
      pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_2.png" pic-width="426px"
      pic-height="270px" reverse />

    <NetworkJoin1 v-bind="{
      ...$tm('solutions.websiteAcceleration.join1'),
      avatar: '/images/solutions/website-acceleration/SmartEdge™__evaluate_character@2x.png',
      mAvatar: '',
      showScores: false,
    }" />

  </div>

  <Footer />
</template>

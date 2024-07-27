<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.securityCdn.header.preTitle')"
    :title="$t('solutions.securityCdn.header.title')"
    :content="$t('solutions.securityCdn.header.content')"
    :btn="$t('solutions.securityCdn.header.btn')"
    href="#"
    :hint="$t('solutions.securityCdn.header.hint')"
    :pic="{
      src: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_banner_graph_1@2x.png',
      w: '460px',
      h: '404px',

      msrc: '/mobile-images/solutions/security-cdn/Solutions_Security_cdn_banner_graph@2x.png',
      mw: '27.38rem',
      mh: '25rem'
    }"
  />

  <SolutionsFeatureList2
    :title="$t('solutions.securityCdn.features2.title')"
    :sub-title="$t('solutions.securityCdn.features2.subTitle')"
    :items="$tm('solutions.securityCdn.features2.items')"
  />

  <CommonSuperCharge
    class="SecurityCdn-SuperCharge"
    v-bind="$tm('solutions.securityCdn.goFaster')"
  />

  <SolutionsAd1
    :title="$t('solutions.securityCdn.ad1.title')"
    :sub-title="$t('solutions.securityCdn.ad1.subTitle')"
    :btn="$t('solutions.securityCdn.ad1.btn')"
    href="#"
    pic="/images/solutions/security-cdn/Network_DDoS_banner_graph_2@2x.png"
    pic-width="238px"
    pic-height="242px"
    mPic="/images/solutions/security-cdn/Network_DDoS_banner_graph_2@2x.png"
    mPicWidth="14.88rem"
    mPicHeight="15.13rem"
  />

  <CommonList1 v-bind="$tm('solutions.securityCdn.list1')" />

  <SolutionsChart1
    :title="$t('solutions.securityCdn.chart1.title')"
    :sub-title="$t('solutions.securityCdn.chart1.subTitle')"
    pic="/images/solutions/security-cdn/network-edge@2x.png"
    pic-height="580px"
    m-pic="/mobile-images/solutions/security-cdn/icon20240612-232248_2x.png"
    m-pic-height="39rem"
  />

  <NetworkJoin1
    v-bind="{
      ...$tm('solutions.securityCdn.join1'),
      avatar:
        '/mobile-images/solutions/security-cdn/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/solutions/security-cdn/Network_Overview_evaluate_character@2x.png'
    }"
    class="SecurityCdn-NetworkJoin1"
  />

  <Footer />
</template>
<style lang="less" scoped>
.SecurityCdn-SuperCharge,
.SecurityCdn-NetworkJoin1 {
  margin-bottom: 6.25rem;
}
</style>
<script setup lang="ts">
definePageMeta({
  title: 'Solutions'
});
</script>

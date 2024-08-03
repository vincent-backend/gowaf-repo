<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.story'),
        href: '/resources/story',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.careers'),
        href: '/resources/careers',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.caseStudies'),
        href: '/resources/caseStudiesDetails',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('resources.caseStudies.header.preTitle')"
    :title="$t('resources.caseStudies.header.title')"
    :content="$t('resources.caseStudies.header.content')"
    :btn="$t('resources.caseStudies.header.btn')"
    href="#"
    :hint="$t('resources.caseStudies.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :isHidenLinkHit="true"
    :inputPlaceholder="$t('resources.caseStudies.header.inputPlaceholder')"
    :pic="{
      src: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      w: '416px',
      h: '348px',
      msrc: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      mw: '26rem',
      mh: '21.75rem'
    }"
  />
  <HomeList1
    :list="$tm('resources.caseStudies.logoIconList')"
    :linkList="$tm('resources.caseStudies.logoIconlink')"
    :isHidenTile="true"
    class="caseStudies-HomeList1"
    bgColor="#fff"
    :btText="$t('resources.caseStudies.logoIconListBtText')"
  />
  <CommonList4
    class="caseStudies-CommonList4"
    v-bind="$tm('resources.caseStudies.list')"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
</script>
<style lang="less" scoped>
.caseStudies-CommonList4 {
  margin-top: 0;
}
</style>

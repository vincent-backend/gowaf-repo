<template>
  <Header />

  <CommonHeader1 :pre-title="$t('resources.about.header.preTitle')"
    :title="$t('resources.about.header.title')"
    :content="$t('resources.about.header.content')"
    page="resourcesAbout"
    href="#"
    :pic="{
    src: '/images/resources/about/resources_about_banner_graph@2x.png',
    w: '540px',
    h: '340px',

    msrc: '/mobile-images/solutions/security-cdn/Solutions_Security_cdn_banner_graph@2x.png',
    mw: '27.38rem',
    mh: '25rem',
  }" />

  <ProductsPerfectSolution
    :title="$t('resources.about.perfectSolution.title')"
    :titleWidth="'550px'"
    :content="$t('resources.about.perfectSolution.content')"
    :items="$tm('resources.about.perfectSolution.items')"
    :pic="{
      url: '/images/resources/about/resources_about_graph_1@2x.png',
      width: 340,
      height: 288
    }" />

  <ResourcesSuperCharge
    :tab="$tm('resources.about.superCharge')" />
  <CommonNumbers :items="$tm('resources.about.numbers')" :type="'resourcesAbout'" style="margin-top: 120px;" />

  <CommonList2 v-bind="$tm('resources.about.list2') " />

  <PricingMap :content="{
    title: $t('resources.about.map.title'),
    subTitle: $t('resources.about.map.subTitle')
  }" />

  <div>
    Our Polyfill Milestones
    需要自己写组件
  </div>
  <ResourcesGetInTouch />

  <Footer :type="{
    page: 'about'
  }" />
</template>
<style lang="less" scoped>
.footer-1-container {
  margin-top: 0 !important;
}
</style>
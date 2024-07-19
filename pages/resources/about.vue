<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: true
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
        href: '/resources/caseStudies',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('resources.about.header.preTitle')"
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
      mh: '25rem'
    }"
  />

  <ProductsPerfectSolution
    :title="$t('resources.about.perfectSolution.title')"
    :titleWidth="'550px'"
    pic-position="bottom"
    :content="$t('resources.about.perfectSolution.content')"
    :items="$tm('resources.about.perfectSolution.items')"
    :pic="{
      url: '/images/resources/about/resources_about_graph_1@2x.png',
      width: 340,
      height: 288,
      mheight: '18rem',
      mwidth: '21.25rem'
    }"
  />

  <ResourcesSuperCharge :tab="$tm('resources.about.superCharge')" />
  <CommonNumbers
    is-row
    is-two-row
    class="about-numbers"
    :items="$tm('resources.about.numbers')"
  />

  <CommonList2 v-bind="$tm('resources.about.list2')" />

  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />

  <CommonList3
    title1="Our Polyfill Milestones"
    title2=""
    :items="$tm('resources.about.list.list')"
    layoutType="full"
    class="about-CommonList"
  />
  <ResourcesGetInTouch class="Touch" />
  <Footer
    :type="{
      page: 'about'
    }"
  />
</template>
<style lang="less" scoped>
.footer-1-container {
  margin-top: 0 !important;
}
.about-numbers {
  margin-top: 120px;
}
@media (max-width: 767px) {
  .about-numbers {
    margin: 6.25rem 0;
  }
  .about-CommonList {
    margin-bottom: 6.3rem;
  }
  .Touch{
    margin-bottom: 6.25rem;
  }
}
</style>

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
        current: false
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: true
      }
    ]"
  />
  <div class="header-container">
    <div class="page-container header">
      <div class="content-container">
        <div class="title">
          {{ $t('resources.contact.header.title') }}
        </div>
        <h4>{{ $t('resources.contact.header.subTitle') }}</h4>
        <div class="content">
          {{ $t('resources.contact.header.content') }}
        </div>
      </div>
    </div>
  </div>
  <ResourcesContactForm />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
</script>

<style lang="less" scoped>
.header-container {
  height: 350px;
  min-width: 1200px;
  background: url(/images/resources/contact/banner-bg.png) no-repeat
    center;
  background-size: 1920px 350px;

  .header {
    position: relative;
    overflow: hidden;

    .content-container {
      margin-top: 90px;
      font-family: Mont, Mont;
      .title {
        width: 564px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 30px;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.9;
      }
      h4 {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        color: #ffffff;
        line-height: 70px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.9;
      }
      .content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 24px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        opacity: 0.8;
        margin-top: 15px;
      }
    }
  }
}

@media (max-width: 767px) {
  .header-container {
    width: 100%;
    height: 21.88rem;
    min-width: auto;
    background: url(/images/resources/contact/banner-bg.png) no-repeat
      center;
    background-size: 100% 100%;

    .header {
      width: 100%;
      min-width: auto;
      position: relative;
      overflow: hidden;

      .content-container {
        margin-top: 4rem;
        font-family: Mont, Mont;
        .title {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 2.5rem;
          width: fit-content;
          color: #ffffff;
          line-height: 3.31rem;
          font-style: normal;
          text-align: center;
          text-transform: none;
        }
        h4 {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 3.5rem;
          color: #ffffff;
          line-height: 4.38rem;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
        .content {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #ffffff;
          line-height: 2.5rem;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>

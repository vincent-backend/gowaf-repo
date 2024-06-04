<template>
  <Header />
  <CommonHeader1 :title="$t('home.header.title')" :content="$t('home.header.content')" :btn="$t('home.header.btn')"
    href="#" :hint="$t('home.header.hint')" pic="/images/home/home_banner_graph.png" pic-width="424px"
    pic-height="466px" />
  <!-- <HomeList1 />
  <HomeList2 />
  <HomeJoin1 />
  <HomeJoin2 />
  <CommonSuperCharge :title="$t('home.superCharge.title')" :sub-title="$t('home.superCharge.subTitle')"
    :tabs="$tm('home.superCharge.tabs')" />
  <Footer /> -->

  <Notification />
</template>
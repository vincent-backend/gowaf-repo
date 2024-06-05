<template>
  <Header />
  <CommonHeader1 :title="$t('home.header.title')" :content="$t('home.header.content')" :btn="$t('home.header.btn')"
    href="#" :hint="$t('home.header.hint')" :pic="{
    src: '/images/home/home_banner_graph@2x.png',
    w: '424px',
    h: '466px',

    msrc: '/mobile-images/home/home_banner_graph@2x.png',
    mw: '26.5rem',
    mh: '29.13rem',
  }" />
  <HomeList1 />
  <HomeList2 />
  <HomeJoin1 />
  <HomeJoin2 />
  <CommonSuperCharge :data="$tm('home.superCharge')" />
  <Footer />

  <Notification />
</template>
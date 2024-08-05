<template>
  <Header />
  <CommonHeader1
    :title="$t('home.header.title')"
    :content="$t('home.header.content')"
    :btn="$t('home.header.btn')"
    href="#"
    :hint="$t('home.header.hint')"
    :pic="{
      src: '/images/home/home_banner_graph@2x.png',
      w: '424px',
      h: '466px',

      msrc: '/mobile-images/home/home_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '29.13rem'
    }"
  />
  <HomeList1 />
  <HomeList2 />
  <HomeJoin1 />
  <HomeJoin2 />
  <CommonSuperCharge
    :title="$t('home.superCharge.title')"
    :sub-title="$t('home.superCharge.subTitle')"
    :tabs="SuperCharge"
  />
  <VSpace h="120px" mh="6.25rem"></VSpace>
  <Footer />
  <LgOnly>
    <Notification />
  </LgOnly>
</template>

<script setup lang="ts">
import type { tabs } from '~/types/tabs';
const { t } = useI18n();
const SuperCharge = computed<tabs>(() => {
  return [
    {
      tab: t('home.superCharge.websiteAcceleration'),
      title: t('home.superCharge.make-your-website-hop-like-a-gowaf'),
      content: t('home.superCharge.text0'),
      icon: '/images/home/home_bot_graph_Website@2x.png',
      iconWidth: '374px',
      iconHeight: '272px',
      btn: t('home.superCharge.text1'),
      href: '#',
      mIcon: '/mobile-images/home/home_bot_graph_Website@2x.png',
      mIconWidth: '24.13rem',
      mIconHeight: '18.19rem'
    },
    {
      tab: t('home.superCharge.text2'),
      title: t('home.superCharge.text3'),
      content: t('home.superCharge.text4'),
      icon: '/images/home/home_bot_graph_video@2x.png',
      iconWidth: '386px',
      iconHeight: '291px',
      btn: t('home.superCharge.text5'),
      href: '#',
      mIcon: '/mobile-images/home/home_bot_graph_video@2x.png',
      mIconWidth: '23.38rem',
      mIconHeight: '17rem'
    },
    {
      tab: t('home.superCharge.text6'),
      title: t('home.superCharge.text7'),
      content: t('home.superCharge.text8'),
      icon: '/images/home/home_bot_graph_Software@2x.png',
      iconWidth: '392px',
      iconHeight: '294px',
      btn: t('home.superCharge.text9'),
      href: '#',
      mIcon: '/mobile-images/home/home_bot_graph_Software@2x.png',
      mIconWidth: '24.5rem',
      mIconHeight: '18.38rem'
    },
    {
      tab: t('home.superCharge.text10'),
      title: t('home.superCharge.text11'),
      content: t('home.superCharge.text12'),
      icon: '/images/home/home_bot_graph_Dynamic@2x.png',
      iconWidth: '360px',
      iconHeight: '266px',
      btn: t('home.superCharge.text13'),
      href: '#',
      mIcon: '/mobile-images/home/home_bot_graph_Dynamic@2x.png',
      mIconWidth: '22.5rem',
      mIconHeight: '16.63rem'
    }
  ];
});
</script>

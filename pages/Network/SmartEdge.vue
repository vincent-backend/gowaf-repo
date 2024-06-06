<template>
  <Header />
  <BreadCrumbs :title="$t('network.breadCrumbs.parent')" :items="[
    { label: $t('network.breadCrumbs.overview'), href: '/network/overview', current: false },
    { label: $t('network.breadCrumbs.ddosProtection'), href: '/network/ddos', current: false },
    { label: $t('network.breadCrumbs.smartEdge'), href: '/network/smartedge', current: true },
  ]" />

  <CommonHeader1 :pre-title="$t('network.smartEdge.header.preTitle')" :title="$t('network.smartEdge.header.title')"
    :content="$t('network.smartEdge.header.content')" :btn="$t('network.smartEdge.header.btn')" href="#"
    :hint="$t('network.smartEdge.header.hint')" :show-foot="false" :pic="{
    src: '/images/network/smart-edge/SmartEdge™_banner_graph_1@2x.png',
    w: '538px',
    h: '350px',

    msrc: '',
    mw: '',
    mh: '',
  }" />
  <CommonNumbers style="margin-top: 80px;" :items="$tm('network.smartEdge.numbers')" />

  <NetworkYourNeeds :yourNeeds="$tm('network.smartEdge.yourNeeds')" />

  <NetworkJoin1 v-bind="{
    ...$tm('network.smartEdge.join1'),
    avatar: '/images/network/smart-edge/SmartEdge™__evaluate_character@2x.png',
    mAvatar: '',
  }" />

  <Footer />
</template>
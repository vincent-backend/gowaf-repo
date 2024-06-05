<template>
  <Header />
  <BreadCrumbs :title="$t('network.breadCrumbs.parent')" :items="[
    { label: $t('network.breadCrumbs.overview'), href: '/network/overview', current: true },
    { label: $t('network.breadCrumbs.ddosProtection'), href: '/network/ddos', current: false },
    { label: $t('network.breadCrumbs.smartEdge'), href: '/network/smartedge', current: false },
  ]" />
  <NetworkBanner />

  <VSpace h="80px" mh="11.94rem" />
  <CommonNumbers :items="$tm('network.overview.numbers')" />
  <NetworkFlags />
  <NetworkHop />
  <CommonList1 v-bind="$tm('network.overview.list1')" />
  <CommonSuperCharge v-bind="$tm('network.overview.goFaster')" />
  <NetworkJoin1 v-bind="{
    ...$tm('network.overview.join1'),
    avatar: '/images/network/Network_Overview_evaluate_character@2x.png',
    mAvatar: '/mobile-images/network/overview/Network_Overview_evaluate_character@2x.png',
  }" />
  <Footer />
</template>

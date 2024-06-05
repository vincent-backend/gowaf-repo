<template>
  <Header />
  <BreadCrumbs :title="$t('network.breadCrumbs.parent')" :items="[
    { label: $t('network.breadCrumbs.overview'), href: '/network/overview', current: false },
    { label: $t('network.breadCrumbs.ddosProtection'), href: '/network/ddos', current: true },
    { label: $t('network.breadCrumbs.smartEdge'), href: '/network/smartedge', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('network.ddos.header.preTitle')" :title="$t('network.ddos.header.title')"
    :content="$t('network.ddos.header.content')" :btn="$t('network.ddos.header.btn')" href="#"
    :hint="$t('network.ddos.header.hint')" :pic="{
    src: '/images/network/ddos/Network_DDoS_banner_graph_1@2x.png',
    w: '500px',
    h: '420px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <NetworkAlwaysSafe :title="$t('network.ddos.alwaysSafe.title')" :sub-title="$t('network.ddos.alwaysSafe.subTitle')"
    :items="$tm('network.ddos.alwaysSafe.rows')" />

  <CommonNumbers style="margin-top: 40px;" :items="$tm('network.ddos.numbers')" />
  <Line top="80px" />

  <NetworkProtectAtEdge />
  <NetworkStayProtectAlways />
  <CommonList1 :items="$tm('network.overview.list1')" />

  <CommonSuperCharge :data="$tm('network.ddos.doNotLeave')" />

  <NetworkJoin1 :title="$t('network.ddos.join1.title')" :person-name="$t('network.ddos.join1.person.name')"
    :person-title="$t('network.ddos.join1.person.title')" :person-content="$t('network.ddos.join1.person.content')"
    person-avatar="/images/network/ddos/Network_ddos_evaluate_character.png" />

  <Footer />
</template>
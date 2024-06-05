<template>
  <Header />
  <BreadCrumbs :title="$t('network.breadCrumbs.parent')" :items="[
    { label: $t('network.breadCrumbs.overview'), href: '/network/overview', current: true },
    { label: $t('network.breadCrumbs.ddosProtection'), href: '/network/ddos', current: false },
    { label: $t('network.breadCrumbs.smartEdge'), href: '/network/smartedge', current: false },
  ]" />
  <NetworkBanner />
  <CommonNumbers style="margin-top: 80px;" :items="$tm('network.overview.numbers')" />
  <NetworkFlags />
  <NetworkHop />
  <CommonList1 :items="$tm('network.overview.list1')" />
  <CommonSuperCharge :data="$tm('network.overview.goFaster')" />
  <NetworkJoin1 :title="$t('network.overview.join1.title')" :person-name="$t('network.overview.join1.person.name')"
    :person-title="$t('network.overview.join1.person.title')"
    :person-content="$t('network.overview.join1.person.content')"
    person-avatar="/images/network/Network_Overview_evaluate_character.png" />
  <Footer />
</template>
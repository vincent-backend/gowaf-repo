<template>
  <Header />
  <BreadCrumbs :title="$t('network.breadCrumbs.parent')" :items="[
    { label: $t('network.breadCrumbs.overview'), href: '/network/overview', current: false },
    { label: $t('network.breadCrumbs.ddosProtection'), href: '/network/ddos', current: false },
    { label: $t('network.breadCrumbs.smartEdge'), href: '/network/smartedge', current: true },
  ]" />

  <CommonHeader1 :pre-title="$t('network.smartEdge.header.preTitle')" :title="$t('network.smartEdge.header.title')"
    :content="$t('network.smartEdge.header.content')" :btn="$t('network.smartEdge.header.btn')" href="#"
    :hint="$t('network.smartEdge.header.hint')" pic="/images/network/smart-edge/SmartEdge™_banner_graph_1.png"
    pic-width="538px" pic-height="350px" :show-foot="false" />
  <CommonNumbers style="margin-top: 80px;" :items="$tm('network.smartEdge.numbers')" />

  <NetworkYourNeeds />

  <NetworkJoin1 :title="$t('network.smartEdge.join1.title')" :person-name="$t('network.smartEdge.join1.person.name')"
    :person-title="$t('network.smartEdge.join1.person.title')"
    :person-content="$t('network.smartEdge.join1.person.content')"
    person-avatar="/images/network/smart-edge/SmartEdge™__evaluate_character.png" />

  <Footer />
</template>
<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookur'),
        href: '/network/Tools/DNSLookur',
        current: false
      },
      {
        label: $t('network.breadCrumbs.LatencyTest'),
        href: '/network/ddos',
        current: false
      },
      {
        label: $t('network.breadCrumbs.HTTPTest'),
        href: '/network/smartedge',
        current: false
      },
      {
        label: $t('network.breadCrumbs.Traceroute'),
        href: '/network/smartedge',
        current: false
      },
      {
        label: $t('network.breadCrumbs.OtherTools'),
        href: '/network/smartedge',
        current: false
      },
      {
        label: $t('network.breadCrumbs.DiagnosticReport'),
        href: '/network/smartedge',
        current: false
      }
    ]"
  />
  <NetworkToolsBenner />
  <ProductsNeverHit
    class="NeverHit-box"
    :isShowTitle="false"
    :neverHit="$tm('network.WebTools.neverHit')"
  />
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.NeverHit-box {
  margin-bottom: 100px;
}
</style>

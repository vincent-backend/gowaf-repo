<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookur'),
        href: '/network/Tools/DNSLookur',
        current: true
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
  <NetworkToolsBenner
    :title="$t('network.WebTools.DNSLookur.title')"
    :sub-title="$t('network.WebTools.DNSLookur.subtitle')"
  />
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>

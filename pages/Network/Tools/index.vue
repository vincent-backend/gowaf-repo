<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookur'),
        href: '/Network/Tools/DNSLookur',
        current: false
      },
      {
        label: $t('network.breadCrumbs.LatencyTest'),
        href: '/Network/Tools/LatencyTest',
        current: false
      },
      {
        label: $t('network.breadCrumbs.HTTPTest'),
        href: '/Network/Tools/HTTPTest',
        current: false
      },
      {
        label: $t('network.breadCrumbs.Traceroute'),
        href: '/Network/Tools/Traceroute',
        current: false
      },
      {
        label: $t('network.breadCrumbs.OtherTools'),
        href: '/Network/Tools/OtherTools',
        current: false
      },
      {
        label: $t('network.breadCrumbs.DiagnosticReport'),
        href: '/Network/Tools/DiagnosticReport',
        current: false
      }
    ]"
  />
  <NetworkToolsBenner />
  <LgOnly>
    <ProductsNeverHit
      class="NeverHit-box"
      :isShowTitle="false"
      :neverHit="$tm('network.WebTools.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="true"
      :neverHit="$tm('network.WebTools.neverHit')"
    />
  </XsOnly>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.NeverHit-box {
  margin-bottom: 100px;
}
</style>

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
        current: true
      },
      {
        label: $t('network.breadCrumbs.DiagnosticReport'),
        href: '/Network/Tools/DiagnosticReport',
        current: false
      }
    ]"
  />
  <NetworkToolsBenner
    :title="$t('network.WebTools.OtherTools.title')"
    :sub-width="'696px'"
    :sub-title="$t('network.WebTools.OtherTools.subtitle')"
  >
  </NetworkToolsBenner>
  <ProductsNeverHit
    class="NeverHit-box"
    :isShowTitle="false"
    :neverHit="$tm('network.WebTools.OtherTools.neverHit')"
  />
  <VSpace :h="'145px'"></VSpace>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
const input = ref('');
const select = ref('1');
definePageMeta({
  title: 'Web Tools'
});

</script>
<style lang="scss" scoped>
.btnBox {
  width: 234px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  border: 2px solid rgba(70, 207, 58, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mont, Mont;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  line-height: 21px;
  font-style: normal;
  text-transform: none;
  cursor: pointer;
}
</style>

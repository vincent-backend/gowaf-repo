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
        current: true
      }
    ]"
  />
  <NetworkToolsBenner
    :title="$t('network.WebTools.DiagnosticReport.title')"
    :sub-width="'696px'"
    :sub-title="$t('network.WebTools.DiagnosticReport.subtitle')"
  >
    <div class="btnBox">{{ $t('network.WebTools.DiagnosticReport.btn') }}</div>
  </NetworkToolsBenner>
  <LgOnly>
    <ProductsNeverHit
      class="NeverHit-box"
      :isShowTitle="false"
      :neverHit="$tm('network.WebTools.DiagnosticReport.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      type="card"
      :neverHit="$tm('network.WebTools.DiagnosticReport.neverHit')"
    />
  </XsOnly>
  <VSpace :h="'145px'"></VSpace>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
import { CommonIconDropDown, CommonInputsubfix } from '#components';
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
.NeverHit-box {
  :deep(.content) {
    flex-wrap: nowrap !important;
    justify-content: space-between !important;
    .item {
      width: 260px;
      padding-right: 53px !important;
      &:last-child {
        padding-right: 0 !important;
      }
    }
  }
}
@media (max-width: 767px) {
  .btnBox {
    width: 14.63rem;
    height: 3.13rem;
    background: #ffffff;
    border-radius: 1.56rem;
    border: 0.13rem solid rgba(70, 207, 58, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 1rem;
    color: #000000;
    line-height: 1.31rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    cursor: pointer;
  }
}
</style>

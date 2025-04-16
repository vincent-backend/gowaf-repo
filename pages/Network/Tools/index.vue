<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookup'),
        href: '/Network/Tools/DNSLookup',
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
      :neverHit="i18ntext.neverHit"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      type="card"
      :neverHit="i18ntext.neverHit"
    />
  </XsOnly>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Web Tools'
});
const i18ntext = computed<any>(() => {
  return {
    neverHit: {
      items: [
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_1@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('3bUv7mtz1AuA-DP3mdhA1'),
          content: t('Ruh6Nls4bP_tVTR_gk10I'),
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_2@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('_Bgb1KMtzmgHEYu9LHB3k'),
          content: t('0q45xMm-Fo2WuB9IEiP8c'),
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_3@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('9QWgadRj_AJNY1dAC0QWx'),
          content: t('MADtlax4rOnUYfBM3o1YQ'),
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_4@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('T2AMMLf8fFyKJB3AO1qU7'),
          content: t('ghWbE749_cSegdVCdoxbs'),
          contentAlign: 'center'
        }
      ]
    }
  };
});
</script>
<style lang="scss" scoped>
.NeverHit-box {
  margin-bottom: 100px;
}
</style>

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
          title: 'IP Address',
          content:
            'Your IP address will be collected and mapped to a country and geographical location result.',
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_2@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: 'DNS Information',
          content:
            'The IP of your DNS provider will be collected and mapped to a country and longitude/latitude location.',
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_3@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: 'Operating System',
          content:
            "The name and version of your computer's operating system will be collected.",
          contentAlign: 'center'
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_4@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: 'Browser Information',
          content:
            'The name, version and user agent of your web browser will be collected.',
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

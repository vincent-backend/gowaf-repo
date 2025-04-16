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
  <VSpace :h="'145px'" mh=""></VSpace>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
const { t } = useI18n();
const input = ref('');
const select = ref('1');
definePageMeta({
  title: 'Web Tools'
});
const i18ntext = computed<any>(() => {
  return {
    neverHit: {
      items: [
        {
          icon: '/images/network/WebTools/other_tools_ic_1@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('qQ-ZvIBWftvfO5WPa-sv9'),
          content: t('eKO6Lf0Oc_hA9qm-isL25'),
          contentAlign: 'center',
          btn: t('mYvpozfrPGJDMf7G6clS0')
        },
        {
          icon: '/images/network/WebTools/diagnostic_report_ic_1@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('1KncVVp4lX8S6Ku1dLsyD'),
          content: t('E6-WOFWC37nW0SwSJmZ4y'),
          contentAlign: 'center',
          btn: t('p6QBcvl_McVRkjzwr-PSx')
        }
      ]
    }
  };
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

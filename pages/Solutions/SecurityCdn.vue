<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.securityCdn.header.preTitle')"
    :title="$t('solutions.securityCdn.header.title')"
    :content="$t('solutions.securityCdn.header.content')"
    :btn="$t('solutions.securityCdn.header.btn')"
    href="/forgot"
    :hint="$t('solutions.securityCdn.header.hint')"
    :pic="{
      src: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_banner_graph_1@2x.png',
      w: '460px',
      h: '404px',

      msrc: '/mobile-images/solutions/security-cdn/Solutions_Security_cdn_banner_graph@2x.png',
      mw: '27.38rem',
      mh: '25rem'
    }"
  />

  <SolutionsFeatureList2
    :title="$t('solutions.securityCdn.features2.title')"
    :sub-title="$t('solutions.securityCdn.features2.subTitle')"
    :items="i18ntext.items"
  />

  <CommonSuperCharge
    class="SecurityCdn-SuperCharge"
    v-bind="i18ntext.goFaster"
  />

  <SolutionsAd1
    :title="$t('solutions.securityCdn.ad1.title')"
    :sub-title="$t('solutions.securityCdn.ad1.subTitle')"
    :btn="$t('solutions.securityCdn.ad1.btn')"
    href="/forgot"
    pic="/images/solutions/security-cdn/Network_DDoS_banner_graph_2@2x.png"
    pic-width="238px"
    pic-height="242px"
    mPic="/images/solutions/security-cdn/Network_DDoS_banner_graph_2@2x.png"
    mPicWidth="14.88rem"
    mPicHeight="15.13rem"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <SolutionsChart1
    :title="$t('solutions.securityCdn.chart1.title')"
    :sub-title="$t('solutions.securityCdn.chart1.subTitle')"
    pic="/images/solutions/security-cdn/network-edge@2x.png"
    pic-height="580px"
    m-pic="/mobile-images/solutions/security-cdn/icon20240612-232248_2x.png"
    m-pic-height="39rem"
  />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/mobile-images/solutions/security-cdn/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/solutions/security-cdn/Network_Overview_evaluate_character@2x.png'
    }"
    class="SecurityCdn-NetworkJoin1"
  />

  <Footer />
</template>
<style lang="less" scoped>
.SecurityCdn-SuperCharge,
.SecurityCdn-NetworkJoin1 {
  margin-bottom: 6.25rem;
}
</style>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_1.png',
        title: t('zSXGGzvSW7pvXpogYhwfc'),
        content: t('lq666rjg-5md2YuG6MKRf')
      },
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_2.png',
        tip: t('JMNtSjGA4keUmYufnraiH'),
        title: t('TGxP3_opGKENLFuirCc61'),
        content: t('_boAwBBwLE1aUeAZqUCPi')
      },
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_3.png',
        title: t('jzz1oz2BWMQ-4-nm7UZRj'),
        content: t('6YO0_ldiVhETYscjT5Eu1')
      }
    ],
    goFaster: {
      title: t('IU3gvoCvNsE5-aG6PlIvQ'),
      subTitle: t('BHhPmkVlMpDt8iL-GN-md'),
      tabs: [
        {
          tab: t('gPRVF-yX5CFb2MfF7erJ0'),
          title: t('Uqm2wP8Mw7LB-ChBFB_W4'),
          titleTip: t('N9jNH5p96_TbO6rKVthjY'),
          content: t('FkU17412SRmgiZK-qDcqb'),
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_1@2x.png',
          iconWidth: '336px',
          iconHeight: '326px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_1@2x.png',
          mIconWidth: '20.38rem',
          mIconHeight: '20.38rem'
        },
        {
          tab: t('Hi1nX0G0COynee1uG_OP9'),
          title: t('y80LOUe-KKMs8kV3i1eEm'),
          content: t('4nJsyOwUFCPGKkkDUh1G-'),
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_2@2x.png',
          iconWidth: '338px',
          iconHeight: '266px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_2@2x.png',
          mIconWidth: '21.13rem',
          mIconHeight: '16.63rem'
        },
        {
          tab: t('uXvWvDi343Wi7pHdiedvn'),
          title: t('19Sx3puJp58_-zxg_xUBh'),
          titleTip: t('NpNqxWAKTXRdfJzmPPSs-'),
          content: t('6n7WqQC2MQht-svplEeVN'),
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_3@2x.png',
          iconWidth: '350px',
          iconHeight: '296px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_3@2x.png',
          mIconWidth: '21.88rem',
          mIconHeight: '18.5rem'
        },
        {
          tab: t('q0KuYmHW9-xljsKW1Aa_x'),
          title: t('GU6D_o7M8zxPxcgCkccpH'),
          content: t('Gaqhhw3qnGUOmFesxHnJt'),
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_4@2x.png',
          iconWidth: '342px',
          iconHeight: '279px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_4@2x.png',
          mIconWidth: '21.38rem',
          mIconHeight: '17.44rem'
        }
      ]
    },
    list1: {
      title1: t('C3A8EVv_aIF0yvwy7BVdY'),
      title2: t('n4ElwMAm01r-ilRQAD3cY'),
      items: [
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_1@2x.png',
          title: t('feQGdTJI4u6AoECQxK1bI'),
          content: t('lD6U3-uAkDFt3ymkcvcrh')
        },
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_2@2x.png',
          title: t('PVuK0XsZri8h-6ZKXJvG_'),
          content: t('j42QeAGrF16q_Bo5RiXYf')
        },
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_3@2x.png',
          title: t('9VhYAnF_F5xuBa2IlXAyo'),
          content: t('tuvOiCZKAFFc7oJIu-X0F')
        }
      ]
    },
    join1: {
      title: t('5MEMHXMAvSCYoBfEfbOjP'),
      person: {
        name: t('slC1dTteLCeaA7xERJn-K'),
        title: t('Jp0_APSokfXIEsGQOaNym'),
        content: t('-3KBu6Fro-Zqr3vP_yP19')
      }
    }
  };
});
</script>

<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.securityCdn.header.preTitle')"
    :title="$t('solutions.securityCdn.header.title')"
    :content="$t('solutions.securityCdn.header.content')"
    :btn="$t('solutions.securityCdn.header.btn')"
    href="#"
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
    href="#"
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
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_1.png',
        title: 'Always-On CDN Protection',
        content:
          'With automatic, always-on protection, you can put attacks out in less than 10 seconds before they even get fully started.'
      },
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_2.png',
        tip: 'Coming soon',
        title: 'Dynamic AI Request Filter',
        content:
          'Stop even the most sophisticated attacks with an AI-powered smart request filter that automatically adapts to your traffic.'
      },
      {
        icon: '/images/solutions/security-cdn/Solutions_Security_cdn_ic_3.png',
        title: 'False Positives Avoidance',
        content:
          'Minimize false positive detections and stop infuriating your users with a smart false positive avoidance system.'
      }
    ],
    goFaster: {
      title: 'Security everywhere you need it',
      subTitle: 'Protect against all types of threats with a single platform.',
      tabs: [
        {
          tab: 'HTTP Flood Protection',
          title: 'Protect against Layer 7 HTTP flood attacks',
          titleTip: 'Coming soon',
          content:
            'Stop malicious bots or DDoS scripts from overloading your server. Gowaf helps you stay safe by automatically detecting and blocking malicious HTTP requests using a continuously learning AI security system. We stop threats seconds before they ever reach your origin.',
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_1@2x.png',
          iconWidth: '336px',
          iconHeight: '326px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_1@2x.png',
          mIconWidth: '20.38rem',
          mIconHeight: '20.38rem'
        },
        {
          tab: 'Volumetric Protection',
          title: 'Block volumetric network attacks on the edge',
          content:
            'Ensure uninterrupted content delivery with a massive 150 Tbps+ global network that automatically blocks even the largest volumetric attacks right on the edge before hitting your server. Gowaf helps you keep your server safe and your users engaged. No matter what.',
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_2@2x.png',
          iconWidth: '338px',
          iconHeight: '266px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_2@2x.png',
          mIconWidth: '21.13rem',
          mIconHeight: '16.63rem'
        },
        {
          tab: 'Web Application Firewall',
          title: 'Protect your applications with Gowaf WAF',
          titleTip: 'Coming soon',
          content:
            'Block malicious requests targeting your applications on the software layer. Gowaf WAF helps you stay safe by blocking common security vulnerabilities and a real-time critical response rule-set maintained by the Gowaf Security team to stay on top of new threats.',
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_graph_3@2x.png',
          iconWidth: '350px',
          iconHeight: '296px',
          mIcon:
            '/images/solutions/security-cdn/Solutions_Security_cdn_graph_3@2x.png',
          mIconWidth: '21.88rem',
          mIconHeight: '18.5rem'
        },
        {
          tab: 'Request & Network Limits',
          title: 'Set request and throughput limits with just a few clicks',
          content:
            'Protect your online presence and stop bandwidth consumption attacks with simple configurable requests and network limits. You can easily limit the number of connections per IP, requests per second, download speed limits, and the total monthly traffic to stay in full control of your budget.',
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
      title1: 'Securely Deliver Content',
      title2:
        'Use powerful control features to keep full control of the access to your content.',
      items: [
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_1@2x.png',
          title: 'Token Authentication',
          content:
            'Sign requests to control who, where, and for how long they can access your content.'
        },
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_2@2x.png',
          title: 'Hotlinking Protection',
          content:
            'Stop third-party websites from stealing your content and wasting your bandwidth.'
        },
        {
          icon: '/images/solutions/security-cdn/Solutions_Security_cdn_card_ic_3@2x.png',
          title: 'IP & Geo Blocking',
          content:
            'Restrict content to specific countries or IPs only for full regional control.'
        }
      ]
    },
    join1: {
      title: 'Trusted by 40.000+ happy customers',
      person: {
        name: 'Lorenzo Faletra',
        title: 'CEO, Parrot Security',
        content:
          '“Gowaf proved to be a very reliable CDN provider headed in Europe with strong privacy standards. We trusted them to take care of a very critical piece of our infrastructure that requires high confidentiality between us and our users.”'
      }
    }
  };
});
</script>

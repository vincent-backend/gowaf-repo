<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.parent')"
    :items="[
      {
        label: $t('network.breadCrumbs.overview'),
        href: '/network/overview',
        current: false
      },
      {
        label: $t('network.breadCrumbs.ddosProtection'),
        href: '/network/ddos',
        current: true
      },
      {
        label: $t('network.breadCrumbs.smartEdge'),
        href: '/network/smartedge',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('network.ddos.header.preTitle')"
    :title="$t('network.ddos.header.title')"
    :content="$t('network.ddos.header.content')"
    :btn="$t('network.ddos.header.btn')"
    href="#"
    :hint="$t('network.ddos.header.hint')"
    :pic="{
      src: '/images/network/ddos/Network_DDoS_banner_graph_1@2x.png',
      w: '500px',
      h: '420px',

      msrc: '/mobile-images/network/ddos/Network_DDoS_banner_graph_1@2x.png',
      mw: '31.25rem',
      mh: '26.25rem'
    }"
  />

  <NetworkAlwaysSafe v-bind="i18ntext.alwaysSafe" />

  <CommonNumbers
    style="margin-top: 40px"
    :items="i18ntext.numbers"
  />

  <LgOnly>
    <Line top="80px" m-top="0" />
  </LgOnly>

  <NetworkProtectAtEdge />
  <NetworkStayProtectAlways />

  <CommonList1 v-bind="i18ntext.list1" />
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar: '/images/network/ddos/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/network/ddos/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Network'
});
const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      },
      {
        label: '650.000+',
        content: 'Requests Per Second'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '40.000+',
        content: 'Satisfied Customers'
      }
    ],
    alwaysSafe: {
      title: 'Always safe. Always on.',
      subTitle:
        'Stay protected with Gowaf DDoS mitigation system that detects and prevents attacks in less than 10 seconds.',
      rows: [
        [
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Detection@2x.png',
            title: 'Detection',
            content:
              'The system continuously monitors and detects any abnormal traffic patterns.'
          },
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Filtering@2x.png',
            title: 'Filtering',
            content:
              'Dedicated DoS filtering hardware and software block out malicious traffic.'
          }
        ],
        [
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Routing@2x.png',
            title: 'Routing',
            content:
              'Routing is optimized and guided throughout our data centers to absorb the traffic.'
          },
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Post@2x.png',
            title: 'Post-Analysis',
            content:
              'Attack logs are analyzed to improve future mitigation and security.'
          }
        ]
      ]
    },
    list1: {
      title1: 'Built for performance. Optimized for perfection.',
      title2:
        'Join a global network that is carefully optimized and tuned down to the TCP level.',
      items: [
        {
          icon: '/images/network/Network_DDoS_card_ic_1.png',
          title: 'Tier 1 Network Partners',
          content:
            'Hop on a network powered by carefully selected providers in top-tier data centers.'
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_2.png',
          title: 'Massive Network Backbone',
          content:
            'Scale with ease by leveraging a massive 150 Tbps+ global network backbone.'
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_3.png',
          title: 'SmartEdge Routing',
          content:
            'Route users where it matters with a smart routing engine optimized for your specific content.'
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_4.png',
          title: 'Sub 24 ms Average Global Latency',
          content:
            'Reach your customer in less than 24 ms in most areas anywhere in the world.'
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_5.png',
          title: 'NVMe + SSD Powered Servers',
          content:
            'Deliver content at maximum speed and minimal latency with NVMe and SSD servers.'
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_6.png',
          title: 'Optimized for Static and Media Content',
          content:
            'Deliver higher cache hit rates for small and large files with a CDN optimized for efficient caching.'
        }
      ]
    },
    doNotLeave: {
      title: 'Don’t leave uptime to chance',
      subTitle: 'Stay protected 24/7 and never go down again ',
      tabs: [
        {
          tab: '150 Tbps+ Network',
          title: 'Massive network backbone for 100% uptime',
          content:
            'Hop on our 150 Tbps+ network backbone and never worry about going down again. Our global network can absorb attacks of any size and stop them before they ever reach your server. Stay protected and focus on what you do best, while we make sure you stay online.',
          icon: '/images/network/ddos/Network_DDoS_banner_graph_3@2x.png',
          iconWidth: '384px',
          iconHeight: '288px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_3@2x.png',
          mIconWidth: '24rem',
          mIconHeight: '18rem'
        },
        {
          tab: 'mil Real-Time Monitoring',
          title: 'Hop smoother with real-time threat monitoring',
          content:
            'Never worry about threats again thanks to an automatic real-time monitoring and alerting system. Gain complete visibility into your security to stay safe and stop attackers from ever reaching your servers. We help you with detection so that you never need the cure.',
          icon: '/images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          iconWidth: '294px',
          iconHeight: '294px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          mIconWidth: '18.38rem',
          mIconHeight: '18.38rem'
        },
        {
          tab: 'Upload Protection',
          title: 'Stop inappropriate content and help keep internet safe',
          content:
            "Keep the internet friendlier by stopping inappropriate uploads with smart edge upload filtering powered by machine learning and a real-time block list. We help you control users' malicious, abusive and inappropriate uploads, so you don't have to lose time removing them.",
          icon: '/images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          iconWidth: '334px',
          iconHeight: '279px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          mIconWidth: '20.88rem',
          mIconHeight: '17.44rem'
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ customers who already put their trust in Gowaf',
      person: {
        name: 'Periklis',
        title: 'VitrinaBox, Senior Software Engineer',
        content:
          '"Gowaf is easy to use, offers competitive pricing, and excellent value for money. Technology is super efficient while new features are introduced every month. Customer-centric while offering a number of growth opportunities for the customers."'
      }
    }
  };
});
</script>

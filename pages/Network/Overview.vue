<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.parent')"
    :items="[
      {
        label: $t('network.breadCrumbs.overview'),
        href: '/network/overview',
        current: true
      },
      {
        label: $t('network.breadCrumbs.ddosProtection'),
        href: '/network/ddos',
        current: false
      },
      {
        label: $t('network.breadCrumbs.smartEdge'),
        href: '/network/smartedge',
        current: false
      }
    ]"
  />
  <NetworkBanner />

  <VSpace h="80px" mh="11.94rem" />
  <CommonNumbers is-row is-two-row :items="i18ntext.numbers" />
  <NetworkFlags />
  <NetworkHop />
  <CommonList1 v-bind="i18ntext.list1" />
  <CommonSuperCharge v-bind="i18ntext.goFaster" />
  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar: '/images/network/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/network/overview/Network_Overview_evaluate_character@2x.png'
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
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '24 ms',
        content: 'Avg. Global Latency'
      },
      {
        label: '95%',
        content: 'Avg. Cache Hit Ratio'
      },
      {
        label: '1.000.000+',
        content: 'Powered Websites'
      }
    ],
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
    goFaster: {
      title: 'Go faster globally - and locally',
      subTitle:
        'Minimize latency and increase resiliency with a network powered strictly by Tier 1 transit providers and direct access to over 3000+ ISPs.',
      tabs: [
        {
          tab: 'Europe',
          title: 'CDN Europe',
          content:
            'Hop on the #1 content delivery network in Europe. Connect to all major ISPs with local connectivity in most major European cities. Powered by a network with a 19 ms latency, your users will never have to wait again.',
          icon: '/images/network/Network_Overview_nation_Europe@2x.png',
          iconWidth: '374px',
          iconHeight: '310px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Europe@2x.png',
          mIconWidth: '23.38rem',
          mIconHeight: '19.38rem'
        },
        {
          tab: 'North America',
          title: 'CDN North America',
          content:
            'Deliver impeccable performance to the largest economy in the world. With 22 PoPs strategically placed through major cities in the US and direct connections to major ISPs such as Comcast, you can reach most internet users in less than 27 ms.',
          icon: '/images/network/Network_Overview_nation_North_America@2x.png',
          iconWidth: '320px',
          iconHeight: '268px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_North_America@2x.png',
          mIconWidth: '20rem',
          mIconHeight: '16.75rem'
        },
        {
          tab: 'Latin America',
          title: 'CDN Latin America',
          content:
            'Deliver maximum performance throughout South and Latin America with the fastest network in the region. Connect directly to most major ISPs and bring your content just a hop away from your visitors throughout LATAM.',
          icon: '/images/network/Network_Overview_nation_Latin_America@2x.png',
          iconWidth: '272px',
          iconHeight: '316px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Latin_America@2x.png',
          mIconWidth: '17rem',
          mIconHeight: '19.75rem'
        },
        {
          tab: 'Asia',
          title: 'CDN Asia',
          content:
            'Reach users with direct local connectivity throughout Asia. Gowaf is positioned in all key centers to deliver unparalleled performance in the region, including emerging markets through strategic local partnerships.',
          icon: '/images/network/Network_Overview_nation_Asia@2x.png',
          iconWidth: '330px',
          iconHeight: '272px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Asia@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17rem'
        },
        {
          tab: 'Australia',
          title: 'CDN Australia & Oceania',
          content:
            'each users in milliseconds across Oceania through a locally built and optimized anycast network. Positioned in 6 key major cities across Australia and New Zealand, Gowaf helps you deliver exceptional performance for every request.',
          icon: '/images/network/Network_Overview_nation_Australia@2x.png',
          iconWidth: '330px',
          iconHeight: '241px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Australia@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '15rem'
        },
        {
          tab: 'Middle East & Africa',
          title: 'CDN Africa & Middle East',
          content:
            'Gowaf helps you deliver a consistent experience around the world. With local connectivity in multiple African countries, we help your customers get to your content faster, regardless if they’re from Kenya or Cape Town.',
          icon: '/images/network/Network_Overview_nation_Middle_East@2x.png',
          iconWidth: '338px',
          iconHeight: '242px',
          btn: 'Learn More',
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Middle_East@2x.png',
          mIconWidth: '21.13rem',
          mIconHeight: '15.13rem'
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ global customers',
      subTitle: [
        "We're rated",
        '',
        'Excellent 4.8',
        ' out of 5 on ',
        'Trustpilot',
        ' - Based on 600+ reviews'
      ],
      person: {
        name: 'Tom Mason',
        title: 'Nexus Mods',
        content:
          '“Working with Gowaf has been a breath of fresh air. Their team has been helpful, responsive, and knowledgeable. The service exceeded our expectations every step of the way.”'
      },
      ranks: [
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_1'
        },
        {
          score: '4.4',
          icon: 'Network_Overview_mark_logo_2'
        },
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_3'
        },
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_4'
        }
      ]
    }
  };
});
</script>

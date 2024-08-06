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
const { t } = useI18n();
definePageMeta({
  title: 'Network'
});

const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: t('q1ufRx9wOX_bkNPJGQmN1'),
        content: t('RDF-FK0HEbcFR8RsEIV6H')
      },
      {
        label: '95%',
        content: t('Ejm59YqIljRelJXhZ1LYn')
      },
      {
        label: '1.000.000+',
        content: t('ailUpetGngG-Iu1SAPP1Z')
      }
    ],
    list1: {
      title1: t('EZjTn4xNx8ViDGg0Ky5lg'),
      title2: t('52hwj5YF8lqRr_O_8SbuU'),
      items: [
        {
          icon: '/images/network/Network_DDoS_card_ic_1.png',
          title: t('A5qfPmkAC_G8pOuAfgmOf'),
          content: t('P2zHLMRmwKGbTmaMO4rLq')
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_2.png',
          title: t('BdCWHf3m-XxvJDp3YIVfZ'),
          content: t('zMggdMNSJ1953ZZBYv7y8')
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_3.png',
          title: t('O-A8j1V1E_91ifsO6oFbM'),
          content: t('sQcNoG7ExLzrxwMPpZryA')
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_4.png',
          title: t('dQtaflIHc0DNBB_rRZLvH'),
          content: t('9Rq3LrZInXYj8Cw2gYFZa')
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_5.png',
          title: t('pWyG81JLneSvfg99OFxPt'),
          content: t('jvLkZLwjU3jPlXslzXfTm')
        },
        {
          icon: '/images/network/Network_DDoS_card_ic_6.png',
          title: t('vsLph3iedSwHFbbnqGnUx'),
          content: t('m5pxn1FDItnXoxvGNYwTV')
        }
      ]
    },
    goFaster: {
      title: t('azWJFm5ozSZ3yMqRtq6Oz'),
      subTitle: t('w-nnCU_jOAxnpOTO5RtJB'),
      tabs: [
        {
          tab: t('nationalFlag.continentName2'),
          title: t('products.storage.Europe.header.preTitle'),
          content: t('9FKrXHuSFfEarUf5ZU2R4'),
          icon: '/images/network/Network_Overview_nation_Europe@2x.png',
          iconWidth: '374px',
          iconHeight: '310px',
          btn: t('piKsTQ6gNo0W87KKmN9vl'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Europe@2x.png',
          mIconWidth: '23.38rem',
          mIconHeight: '19.38rem'
        },
        {
          tab: t('nationalFlag.continentName1'),
          title: t('products.storage.NorthAmerica.header.preTitle'),
          content: t('zebCIyIY6ULFedrIi73GP'),
          icon: '/images/network/Network_Overview_nation_North_America@2x.png',
          iconWidth: '320px',
          iconHeight: '268px',
          btn: t('wUXrA7frpfOs0VD2ZmJOl'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_North_America@2x.png',
          mIconWidth: '20rem',
          mIconHeight: '16.75rem'
        },
        {
          tab: t('products.cdn.breadCrumbs.Latin_America'),
          title: t('NuYtsLkM6vWHZz2zVUH2B'),
          content: t('iisMyBRMbFLiIb2rqHGhc'),
          icon: '/images/network/Network_Overview_nation_Latin_America@2x.png',
          iconWidth: '272px',
          iconHeight: '316px',
          btn: t('MLyM5hmvvus3wZwVf0k_z'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Latin_America@2x.png',
          mIconWidth: '17rem',
          mIconHeight: '19.75rem'
        },
        {
          tab: t('nationalFlag.continentName3'),
          title: t('products.storage.Asia.header.preTitle'),
          content: t('hGQ0fw-RfyTC8zryyBqmx'),
          icon: '/images/network/Network_Overview_nation_Asia@2x.png',
          iconWidth: '330px',
          iconHeight: '272px',
          btn: t('2EbtqclTM3hHqkd4wBujx'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Asia@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17rem'
        },
        {
          tab: t('products.cdn.breadCrumbs.Australia'),
          title: t('HBUntRfYK4t8O9zFRVkIF'),
          content: t('Zsw9Nk5Nlgypf2-KFaCn9'),
          icon: '/images/network/Network_Overview_nation_Australia@2x.png',
          iconWidth: '330px',
          iconHeight: '241px',
          btn: t('CtnpIM5Mx0nKoWm6IuUop'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Australia@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '15rem'
        },
        {
          tab: t('eZQYGIi05MT2RTOFaHD6n'),
          title: t('products.storage.AfriceMiddleEast.header.preTitle'),
          content: t('L-6h4F9X_3tTrp6ZdFA9f'),
          icon: '/images/network/Network_Overview_nation_Middle_East@2x.png',
          iconWidth: '338px',
          iconHeight: '242px',
          btn: t('d2MmrtaAOblk4P2E93XPQ'),
          href: '#',
          mIcon:
            '/mobile-images/network/overview/Network_Overview_nation_Middle_East@2x.png',
          mIconWidth: '21.13rem',
          mIconHeight: '15.13rem'
        }
      ]
    },
    join1: {
      title: t('8Exj7XGIsGwCmEwgDTN4F'),
      subTitle: [
        t('home.header.bottom.weAreRated'),
        '',
        t('home.join2.subTitle3'),
        t('home.join2.subTitle4'),
        t('home.join2.subTitle5'),
        t('home.join2.subTitle6')
      ],
      person: {
        name: t('ZeeSZ52uudWny1Fk6BsKG'),
        title: t('VVzzamDY3fj2RpKojAPGd'),
        content: t('OmSew8mun8sNwyQTiAUuz')
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

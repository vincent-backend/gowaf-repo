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
    href="/forgot"
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

  <CommonNumbers style="margin-top: 40px" :items="i18ntext.numbers" />

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
const { t } = useI18n();
definePageMeta({
  title: 'Network'
});
const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('x3EHuylv_KnlDWqsBwbDK')
      },
      {
        label: '650.000+',
        content: t('home.requestsPerSecond')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    alwaysSafe: {
      title: t('18SwiVJSQJQ1B2Sh-6eXj'),
      subTitle: t('9oqvnxDH7yEj5bObiLEq1'),
      rows: [
        [
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Detection@2x.png',
            title: t('RpDZ4CJSEqoUk1Y-Hi7yy'),
            content: t('yxcdhKgg5TOJGLDhoN9ic')
          },
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Filtering@2x.png',
            title: t('RSsHH0FpfgrAGtk5So-Cz'),
            content: t('GXk6Kg5MkUOvJ8MUZHJb5')
          }
        ],
        [
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Routing@2x.png',
            title: t('zktKnjpYUHv5ey1dcmDK_'),
            content: t('xvEw3SHyp5TWLNA8QiKbo')
          },
          {
            icon: '/images/network/ddos/Network_DDoS_ic_Post@2x.png',
            title: 'Post-Analysis',
            content: t('YFTltyo1jF6I5U1JVhNia')
          }
        ]
      ]
    },
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
    doNotLeave: {
      title: t('IESm8IRf_oSUV04tdT9yN'),
      subTitle: t('9yIstBZGt1n-_8oRveWaq'),
      tabs: [
        {
          tab: t('t4esPvsTu5dOCYycY--jp'),
          title: t('RSUN-pUdeJe1jj9mxXPBB'),
          content: t('sBAMJ3JROqoZ5qHVQD-rE'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_3@2x.png',
          iconWidth: '384px',
          iconHeight: '288px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_3@2x.png',
          mIconWidth: '24rem',
          mIconHeight: '18rem'
        },
        {
          tab: t('5lJM-plZzJdKCiVF9JxmE'),
          title: t('kP82qDeKyi_SEC_IX50jX'),
          content: t('85SbuHVxrsfHUep5zYDSV'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          iconWidth: '294px',
          iconHeight: '294px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          mIconWidth: '18.38rem',
          mIconHeight: '18.38rem'
        },
        {
          tab: t('44-lXIykO02GWvsS25cqY'),
          title: t('BADn6wzXcYO1vYMs0RxWd'),
          content: t('AotqB1uZwuX7P6t28qLCc'),
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
      title: t('O3X1IOZm6-KlH1N74XLo3'),
      person: {
        name: t('6YXncMQRwii8ofZw6I7zu'),
        title: t('SoGw4y79_hLJBGeIlu_vm'),
        content: t('G0_N_-Z_TIkrK4n6jTtBQ')
      }
    }
  };
});
</script>

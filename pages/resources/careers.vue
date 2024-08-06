<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.story'),
        href: '/resources/story',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.careers'),
        href: '/resources/careers',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.caseStudies'),
        href: '/resources/caseStudies',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('resources.careers.header.preTitle')"
    :title="$t('resources.careers.header.title')"
    :content="$t('resources.careers.header.content')"
    :btn="$t('resources.careers.header.title')"
    href="#"
    hint=""
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/resources/careers/Resources_Careers_banner_graph_2x.png',
      w: '424px',
      h: '346px',

      msrc: '/images/resources/careers/Resources_Careers_banner_graph_2x.png',
      mw: '26.5rem',
      mh: '21.63rem'
    }"
  />
  <CommonList2 v-bind="i18ntext.list1" />
  <ResourcesWorkingPolyfill />
  <LgOnly>
    <ProductsNeverHit :isShowTitle="false" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="false" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <CommonSuperCharge v-bind="i18ntext.currentJob" :isList="true" />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    list1: {
      title1: t('IeBYH24y5d9aR7-eulX8D'),
      title2: t('48W7-T1lco50uauPr14rf'),
      items: [
        {
          icon: '/images/resources/careers/Resources_about_card_ic_1_2x.png',
          title: t('Rr21xw7EXtF5cgVCViy5s'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_2_2x.png',
          title: t('FFDN6H37XkEoYsAiMeCJk'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_3_2x.png',
          title: t('Of4q5G6edu0X3vVWOtcrT'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_4_2x.png',
          title: t('UMWqIFFjNZPS34wM4Rqy1'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_5_2x.png',
          title: t('wc5AAkeqEjpC4X_F_RtPz'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_6_2x.png',
          title: t('lnilk-DDa1Ciyd6-c291I'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_7_2x.png',
          title: t('Xfg5ZjPl7YjUU9GJ8tFoB'),
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_9_2x.png',
          title: t('HzA2dbK98VTmj5EQGFTTa'),
          content: ''
        }
      ]
    },
    neverHit: {
      title: t('lIBFTjyWzmFbn_MBbs1A0'),
      subTitle: t('W-eFlFt59mURkqdsXRfiN'),
      items: [
        {
          icon: '/images/resources/careers/Resources_Careers_ic_1_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('PlcIpvLh19QExvOmNrv84'),
          content: t('4efQGXiXGROnIIo6IMJRf'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_2_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('03bXmmfYgtaVEdWiNyoKF'),
          content: t('1U8UvxTOsucyOjkMmR4o-'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_3_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('x0erS6wG9hevDHqXiES39'),
          content: t('k_RztUth-JCSMuaEO-iN6'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_4_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('y06v0cTVSTdpC3XKYA5Yx'),
          content: t('5-pSyqP3Cu__l65BOi3WF'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_5_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('p4-wHQVxn-9w4Nt-E1xJi'),
          content: t('BiktZBK7F-EJcgl_UiWbX'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_6_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('5bZdFyCrHFkdfao1Np6Mm'),
          content: t('_8Fq37vVZNUigZkbwWH6l'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_7_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('fYXKTrDDI8kXJfmWohV25'),
          content: t('wXe4ZM_BKzqKSN2CXDooT'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_8_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('UJkLd-hho7JlpcYr13Vyi'),
          content: t('w9_3eBNSANekf81IcGICG'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_9_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('x0ck-54XyJmeLWMpHzEx4'),
          content: t('vEPYfz2ajDr0shMCrtwKQ'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_10_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('vUxN7DQRE7awXxffz6xH3'),
          content: t('E3TI8Fcm4J7mvJ1phj1LN'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_11_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('B494Xyyin9SRuHY1i-kjM'),
          content: t('3_pJ40S85-OKgq1Rli2Yz'),
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_12_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('E7vFAILKStGObIzpLCZL9'),
          content: t('FWXQSw3E38Hni5YgyqSip'),
          contentAlign: 'left'
        }
      ]
    },
    currentJob: {
      title: t('XEMX8GL23dsiR19NdVrGR'),
      subTitle: t('Kw4rnr5l1OWgu02-WZzu5'),
      tabs: [
        {
          tab: t('cFolfSO_s6zZx7IcWnHvf'),
          title: t('solutions.websiteAcceleration.header.title'),
          content: t('home.superCharge.text0'),
          icon: '/images/home/home_bot_graph_Website@2x.png',
          iconWidth: '374px',
          iconHeight: '272px',
          btn: t('home.superCharge.text1'),
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Website@2x.png',
          mIconWidth: '24.13rem',
          mIconHeight: '18.19rem',
          items: [
            {
              title: t('HW6X182EOfkpL6CO1d7kN'),
              content: t('fA9WzhA9_76w-PmbANH49'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('9UU9RnNNG5nQRi_0oTStc')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('xfaRQuRfFVJGmjhr4c3Zs')
                }
              ]
            },
            {
              title: t('UYlUaB-GFGjI2Cuw1zTYR'),
              content: t('5I3S4ci8bccZ0cU6gYiTx'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('yGWPCYtXWc31WMnSsfXRX')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('_9jeOA8gD6T0YKmNysdoW')
                }
              ]
            },
            {
              title: t('saoYbbCSVugJCTq9rbLw2'),
              content: t('G7hQDX81srhbuGYw-tzV9'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('QWez0Gv6c8mqNZQ1FnWrJ')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('4cl7jp5kRZt2meuLXXizt')
                }
              ]
            },
            {
              title: t('KzTRe_MtQd9ZfkQlge0-p'),
              content: t('o1qj1S86eYu-XL2sCXPEy'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('-Xvu5XRhZNZ3BN6SM9aE_')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('WBosyyLWnfOzJQ1Velbz4')
                }
              ]
            },
            {
              title: t('rZ_NxrGZlVx10BVv3hYEj'),
              content: t('CfUwvCXw-ShlADQLCV5hi'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('cve0abNN8TaZuoCttZ9Oj')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('OXpwmNVmFgKUWr9Xrnmy_')
                }
              ]
            },
            {
              title: t('ChaMmhphxkrCemPlYmAG5'),
              content: t('FvJcddCxN-gaf1LexV5Iq'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('-XYYWnzfACvqmnorhhjdC')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('W93j_RakdLAvTaHfDtYfW')
                }
              ]
            },
            {
              title: t('a6tAnOiM5n8ZJ4ScxkARf'),
              content: t('EaSXQBpCjzJe6UyqMRk2j'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('1wNS-8Oq8j8A-Fnh-x6Aj')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('a1rei1ov-CPkldNWCShQt')
                }
              ]
            },
            {
              title: t('MQ8WE26g7LcETzojr3W2R'),
              content: t('v7OInaCmuaKc5DP0C3Gdp'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('NcwgB49v3BKUyHyIki0D2')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('DGiGntW9hVNhzM1SkRsKT')
                }
              ]
            }
          ]
        },
        {
          tab: t('7tgk8meST8goVEoPgBaTL'),
          title: t('solutions.videoDelivery.header.title'),
          content: t('products.stream.overview.header.content'),
          icon: '/images/home/home_bot_graph_video@2x.png',
          iconWidth: '386px',
          iconHeight: '291px',
          btn: t('home.superCharge.text5'),
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_video@2x.png',
          mIconWidth: '23.38rem',
          mIconHeight: '17rem',
          items: [
            {
              title: t('VwjGbMswersuuQ8lj6IhS'),
              content: t('WCR-lfMSStF18BsPShZ05'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('rAF2Fd6sIkI4DYftv1OPG')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('aEhq8Nss4NPPtIB8lSe79')
                }
              ]
            },
            {
              title: t('c-hGt9Nm5OjdMnQ1JYGHS'),
              content: t('Km-EIheJ2WjgV5WrM7Vwt'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('PVvKVE020DSsZh_jIjZy3')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('9AWS8zhoyGcnmkg3cp1md')
                }
              ]
            },
            {
              title: t('7iutBqpkvJg1lp41cNaWa'),
              content: t('pPQAfHkGbsdsxSvXQ84he'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('Ulb1dQXalUUmMoZ4kwApM')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('ULOgPTcbbM2Ypjtd4VfcR')
                }
              ]
            },
            {
              title: t('DpV521sB674nTSiGwYsE2'),
              content: t('UcvR347GRy9sltvDH9hh9'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('Xaaf2IPZlyyUwJSONGE71')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('Zh4C_3ujgyPwCGJbOjf8c')
                }
              ]
            },
            {
              title: t('aAVbicSCCnnTzjPBh2fld'),
              content: t('vd6PKemIEyNkUa6KR5I_X'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('M7KWW_cBx5HK7PWURA9gj')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('J67BW68lSEQ8cZnlFDFHv')
                }
              ]
            },
            {
              title: t('mtuiKcuwXGCRESx4B2m-v'),
              content: t('p0rk-NHUrQm2-Av3WKUBq'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('QkLk0YHXV9lSVfD7dGx_Q')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('IviIV2hBkkYQCBXvnuKd2')
                }
              ]
            },
            {
              title: t('sc4BIe8UdbbwzyxDlE_9I'),
              content: t('IaypfBF4wufaz-UbGj21_'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('3qUzN4h-DLYkSqx4-WEpb')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('XPBze061hZrYzgNedTb7I')
                }
              ]
            },
            {
              title: t('R_22SECZ7kC8pRBJ61NIP'),
              content: t('hqmITDq9zew30HdH2fhos'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('Nx42eHTwfbM85m81w69GX')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('GWnyT3fJCUssvubfgKW2q')
                }
              ]
            }
          ]
        },
        {
          tab: t('pQE8mFYkAXRGsbbz7PPL_'),
          title: t('solutions.storageSoftware.header.title'),
          content: t('home.superCharge.text8'),
          icon: '/images/home/home_bot_graph_Software@2x.png',
          iconWidth: '392px',
          iconHeight: '294px',
          btn: t('home.superCharge.text9'),
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Software@2x.png',
          mIconWidth: '24.5rem',
          mIconHeight: '18.38rem',
          items: [
            {
              title: t('0MqBP3as_aczBd9_67tWS'),
              content: t('8qBJFdvvbKRMOMGgrDvIt'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('8TkzeXHGH1tFQwd_rqVoc')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('rxpVhbJ4iM2BCuB4HKErM')
                }
              ]
            },
            {
              title: t('r5DtZSJiQMKxGWKjggjQZ'),
              content: t('IxWyPyt7b_uPDsfdCrFK4'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('02NZDFjopH5muOYZ1aG9a')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('YsQ4kmEmdfXu2EIKj96Y2')
                }
              ]
            },
            {
              title: t('p7eXDxo9kDlrKPRwHa0me'),
              content: t('0lZtqN6KTVZopBIgdv6iL'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('MIKMAKFvzRUlCTQZSXl_Q')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('n5JKplN_j3qilT03prTA7')
                }
              ]
            },
            {
              title: t('vOWOwoBmsjm_Iub1SNurg'),
              content: t('_j3J0xQWNnBlQSHJj9X3V'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('-Gm2ASv8lNzKV7V0p9sTf')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('hzu2xlUxnAmJHQUIzgx3m')
                }
              ]
            },
            {
              title: t('kufRUYxQfJ8LDSbtIUj0U'),
              content: t('s8qvYn-tiJljyD7J62CA-'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('pcql_-TTF-ivY2f6kxnl5')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('RGoDixyldapHr6gaEeDpd')
                }
              ]
            },
            {
              title: t('xjkYw3pGCoCl8gj8Zi_8f'),
              content: t('53fju3noCMuxqHuhYxeLb'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('LZGKLf0msmG8yx9Wm4242')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('KaxpLGptKR0G8ucEmlnrl')
                }
              ]
            },
            {
              title: t('HPTZhbGXnQ_zCxEqpkFZ_'),
              content: t('gA1Oi7TBKO-4ujLpW6N-e'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('PZRyiqlBuddLUFlsibleJ')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('i5T2b0lykTBZnBm4dLBCE')
                }
              ]
            },
            {
              title: t('kAUNYcdfQ-HEZ42DgvLPK'),
              content: t('KIoy0v3A969pTYAwErar6'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('MCzMrYDDBRw5UoJn4hxyU')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('xVkZsYL1z7_c3TyeaOnN_')
                }
              ]
            }
          ]
        },
        {
          tab: t('mURYcgQh2niEUqdC3NKyj'),
          title: t('home.superCharge.text11'),
          content: t('home.superCharge.text12'),
          icon: '/images/home/home_bot_graph_Dynamic@2x.png',
          iconWidth: '360px',
          iconHeight: '266px',
          btn: t('home.superCharge.text13'),
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Dynamic@2x.png',
          mIconWidth: '22.5rem',
          mIconHeight: '16.63rem',
          items: [
            {
              title: t('zfNzFGI1Pf4Bs1XcA-V9d'),
              content: t('QqhlbNzw7pnkusJ4q_HCc'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('qPBcEB28bIgJKj5M5iPpd')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('S_TiMemkVNGRoxGiE-270')
                }
              ]
            },
            {
              title: t('fFh40rslqc9LBQMg2BlIn'),
              content: t('Ldc4W4w3syt5o_f5B5Gx3'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('ASdO306xaVvS9Cn3qrTac')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('zVf72ucyhSyna-SRULgbC')
                }
              ]
            },
            {
              title: t('l5k01Kb9lhN02YXSLoGUB'),
              content: t('byTMDh4RDFdG0FU7Gp1OT'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('AnVocCr6OXyrIQeZxhMy-')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('mw0Pjkb-bP6bQH3I59nt9')
                }
              ]
            },
            {
              title: t('lfiZgrf5Ccl-SnmcCEE07'),
              content: t('gperqtLzRT_Xj_ANC6yYV'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('YV510pxn6i6kmL4Wy0m04')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('MElPOWVE83Jmwfb3xmA_o')
                }
              ]
            },
            {
              title: t('pCFkrQeYZH4M39Xnr6YND'),
              content: t('8lwraUmRiqtgadZqSv8ay'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('64IlFVvqsbPgms3N_6Tj2')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('fRPzo3xKmy7CN9FY6WWgz')
                }
              ]
            },
            {
              title: t('6TolsipSOydidMv_kCTH6'),
              content: t('ntVaDM0uzf5JuMjrzPgNE'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('PKazSMtCKx1kCX3p2CXwm')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('zDTZzK_EOaw0enT8YGqVp')
                }
              ]
            },
            {
              title: t('95nyHfyFPA9_DDVedZV8N'),
              content: t('8lNlory_H1kp7rOb3xKJv'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('f-6tbpEhtTR1Pns5rkLVI')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('dmZDy1Yv8bwux9oDR4UWJ')
                }
              ]
            },
            {
              title: t('JpLJkBcQ0BL5Juh1vAo87'),
              content: t('0zAabL09KZzWv2wctz0d0'),
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: t('PbV3mlKii46cqdt9RNtMO')
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: t('cOnvmg11LGWyxEatZYrWt')
                }
              ]
            }
          ]
        }
      ]
    },
    drmCustomer: {
      title: t('g_tXejmNur2f2uDrDvSd-'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('home.join2.subTitle6'),
      faceImg: {
        img: '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '11.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: t('1BywE0gMMmHqYbpuYRGyW'),
        subTitle: t('10KCWD0ValnrFobaa19fG'),
        content: t('hVZvyVFQZA1hXV83roW7e')
      },
      items: [
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_1_2x.png'
        },
        {
          num: 4.4,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_2_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_3_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_4_2x.png'
        }
      ]
    }
  };
});
</script>
<style lang="less" scoped>
.careers-join1 {
  margin-top: 0;
}
@media (max-width: 767px) {
  .about-numbers {
    margin: 6.25rem 0;
  }
  .about-CommonList {
    margin-bottom: 6.3rem;
  }
  .Touch {
    margin-bottom: 6.25rem;
  }
}
</style>

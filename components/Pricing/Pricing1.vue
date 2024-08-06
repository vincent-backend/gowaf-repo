<template>
  <div class="pricing1-container">
    <div class="pricing1 page-container">
      <CommonTabs
        :tabs="i18ntext"
        v-model:cur-tab="curTab"
        style="margin-top: 0"
      />
      <template v-for="(tab, index) in i18ntext">
        <PricingTable
          v-if="index === curTab"
          :header="tab.header"
          :content="tab.content"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const curTab = ref(0);
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      tab: t('products.cdn.breadCrumbs.gowaf'),
      header: t('XiYg0386NBKOn04hmL4zH'),
      content: [
        {
          title: t('86gYMIwtitK4qCc9qFhN2'),
          titleEm: t('jfz7nyYwHDI2EGBQSfYaI'),
          subTitle: t('ZMnHhcZ9_sCx3p0Hps14R'),
          content: t('KV7WJ2klCpERjTKZgf2MV'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: t('NjxDeRbS8Yh6CPYoGhtIy'),
              hint: t('TXHZSBcsKkFAG_y-tqYdK')
            },
            {
              text: t('Q5YtfVL9lf2B_B2JiCjpR'),
              hint: t('5RI4Xp0hmpyXxpwOR9R-H')
            },
            {
              text: t('rmhNv-qFBLEvbiCKCNbeM'),
              hint: t('nationalFlag.continentName5')
            },
            {
              text: t('NTEisdaelNp_X1Jm15Up3'),
              hint: t('eZQYGIi05MT2RTOFaHD6n')
            }
          ]
        },
        {
          title: t('yfjfFQ5dHd72oOu_hc0lM'),
          titleEm: t('Tie1pPniQdN-d0GNf1w7x'),
          subTitle: t('P3E9iwgU2bZ3gJE1oyTva'),
          content: t('gEuc1uFeP_PSprdd06wor'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: t('0BuqKG6p870d1U55wx18H'),
              hint: t('ggziNIgX5vxUd8flQ2dn0')
            },
            {
              text: t('Q0t7VwOOsk3vG4Xnaxbz-'),
              hint: t('yKvIrNrh2glyW9v0y3UTs')
            },
            {
              text: t('mAzGzh4FHxXDbvPrH3ebz'),
              hint: t('ZRzt7XiKMI4sjX5rITk3m')
            },
            {
              text: t('Onu78XvTgkLCBunkIt4gu'),
              hint: t('_bf7TLQyQvr-tR93vqtql')
            }
          ]
        }
      ]
    },
    {
      tab: t('products.stream.overview.header.preTitle'),
      header: t('pricing.stream.header.preTitle'),
      content: [
        {
          title: t('products.stream.overview.simplifiedPricing.title'),
          titleEm: '',
          subTitle: t('2xS2haYmDOZ82G4aqjlxX'),
          content: t('sp0t4ox0VDAlrZNFbCYhM'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: t('MhDttb6PyyValtrIXk1BT')
            },
            {
              text: '$0.1/minute*',
              hint: t('5Ma4gjGQsul3Dl-SnPuJM')
            },
            {
              text: '$0.01/GB',
              hint: t('products.storage.breadCrumbs.parent')
            },
            {
              text: '$0.005/GB',
              hint: 'CDN'
            }
          ],
          bottomList: [
            t('tQQn78CbmvvZriUsVoWCy'),
            t('JI1hCGJvet6sTZ-ULmgXU'),
            t('uYkxEydIsMZf7lXIU_4Z5'),
            t('fQ6eLjc_pSpmuoL6gtemc'),
            t('QTpqDHXnvaqAYzcOL4fhh'),
            t('4zy4kwV5L7xesmuqtiqVu')
          ]
        }
      ]
    },
    {
      tab: t('products.storage.BouuyStorage.header.preTitle'),
      header: t('pricing.storage.header.preTitle'),
      content: [
        {
          title: t('pjO0SL6mKVQoWvd1QsWNv'),
          titleEm: 'HDD',
          subTitle: t('b3at__Jw1vs1ZNTyWnFMz'),
          content: t('3kxEw7odatuVDPym3DtmZ'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: '$0.01/GB',
              hint: t('TEZlazu6G6F6SFqBln0ty')
            },
            {
              text: '$0.02/GB',
              hint: t('lHyG0f_acNtivER5KyJpS')
            },
            {
              text: '$0.025/GB',
              hint: t('0Qu0t80LoAeCv9evsNe6D')
            },
            {
              text: '+$0.005/GB',
              hint: t('vyAl3W-j1UGhIGMTAjN2F')
            }
          ],
          bottomList: [
            t('4pt5tyLGNQp5FIlTgTvDu'),
            t('-JIMxMV5mP5YTkoE1MK4W'),
            t('XZhL1rlR1e6SeAK8UGzWZ'),
            t('OL5ABcsqtoZs5uIKOKRdd'),
            t('JqmOlz7w0iQYQOzSputiR')
          ]
        },
        {
          title: t('GC3jHHiOVraz_2lYG7nUX'),
          titleEm: 'SSD',
          subTitle: t('CCKDinWPUMGQMvwBgqdlX'),
          content: t('3kxEw7odatuVDPym3DtmZ'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: '$0.02/GB',
              hint: t('TEZlazu6G6F6SFqBln0ty')
            },
            {
              text: '+$0.02/GB',
              hint: t('pqxtDBY44jmwt1A5fsKqY')
            }
          ],
          bottomList: [
            t('4pt5tyLGNQp5FIlTgTvDu'),
            t('-JIMxMV5mP5YTkoE1MK4W'),
            t('XZhL1rlR1e6SeAK8UGzWZ'),
            t('OL5ABcsqtoZs5uIKOKRdd'),
            t('JqmOlz7w0iQYQOzSputiR')
          ]
        }
      ]
    },
    {
      tab: t('products.optimizer.overview.header.preTitle'),
      header: t('pricing.optimizer.header.preTitle'),
      content: [
        {
          title: t('qwUQaUzUuuM9oUwoV3B1E'),
          titleEm: '',
          subTitle: t('uLsLJni0W2wsbOIe0slA_'),
          content: t('LpAFMj3g2K1CRilEL3yBi'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: t('CsUDaUmODj4HijmbXqtpy')
            },
            {
              text: 'FREE',
              hint: t('sJSzj8k3IZilQq_J9tv_P')
            },
            {
              text: 'FREE',
              hint: t('Erkvti6CL9nq-W64rOO-T')
            },
            {
              text: '$9.5/website',
              hint: t('rFQXDg78C9Rz8dvsoHL7i')
            }
          ]
        }
      ]
    },
    {
      tab: t('products.DNS.multiDRM.header.preTitle'),
      header: t('pricing.dns.header.preTitle'),
      content: [
        {
          title: t('47jNpoVCsqMI2G89DV7hS'),
          titleEm: '',
          subTitle: t('E8H9I22fYAEywUyRthGKY'),
          content: t('9kehjd3uWlKyYE8aaK9mn'),
          btn: t('vCyatgYi22iOeAKniCizq'),
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: t('ZV647z_lx-qR0DiF3O6LI')
            },
            {
              text: 'FREE',
              hint: t('H5N6gAqbXEC3JOI-8LvrB')
            },
            {
              text: '$0.1/million',
              hint: t('inmAWNu-WZLXdwC3fs0Nw')
            },
            {
              text: '$0.3/million',
              hint: t('9gSxDlulht2DXcygIorOT')
            }
          ]
        }
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.pricing1-container {
  position: relative;
  z-index: 2;
  margin-top: -60px;

  .pricing1 {
    z-index: 2;

    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 24px;

    box-sizing: border-box;
    padding: 20px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .pricing1-container {
    margin-top: -2.31rem;

    .pricing1 {
      border-radius: 1.5rem;
      padding: 1.25rem;
    }
  }
}
</style>

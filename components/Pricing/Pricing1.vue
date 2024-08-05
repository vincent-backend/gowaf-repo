<script lang="ts" setup>
const curTab = ref(0);
</script>

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
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      tab: 'Gowaf CDN',
      header: 'Gowaf CDN Pricing',
      content: [
        {
          title: 'Standard Network',
          titleEm: '123 PoPs',
          subTitle:
            'Hop on a lighting fast global network with region-based pricing.',
          content: 'Serving more than 100TB per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: '$0.01 /GB',
              hint: 'Europe & North America'
            },
            {
              text: '$0.03 /GB',
              hint: 'Asia & Oceania'
            },
            {
              text: '$0.045 /GB',
              hint: 'South America'
            },
            {
              text: '$0.06 /GB',
              hint: 'Middle East & Africa'
            }
          ]
        },
        {
          title: 'Volume Network',
          titleEm: '10 PoPs',
          subTitle:
            "Take advantage of the world's most cost-effective pricing for high bandwidth projects with a single global rate.",
          content: 'Serving more than 1PB per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: '$0.005 /GB',
              hint: 'First 500TB'
            },
            {
              text: '$0.004 /GB',
              hint: 'From 500TB-1PB'
            },
            {
              text: '$0.002 /GB',
              hint: 'From 1PB-2PB'
            },
            {
              text: 'Contact Us',
              hint: 'From 2PB+'
            }
          ]
        }
      ]
    },
    {
      tab: 'Gowaf Stream',
      header: 'Gowaf Stream Pricing',
      content: [
        {
          title: 'Simplified pricing. Up to 10x lower cost.',
          titleEm: '',
          subTitle:
            'Video player, transcoding, and security features are free of charge.',
          content: 'Servina more than 40TB per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: 'Transcoding'
            },
            {
              text: '$0.1/minute*',
              hint: 'Transcribing'
            },
            {
              text: '$0.01/GB',
              hint: 'Storage'
            },
            {
              text: '$0.005/GB',
              hint: 'CDN'
            }
          ],
          bottomList: [
            'No security fees',
            'No transcoding fees',
            'Free laver included',
            'Distributed video storage',
            '150 Tbps+ backbone',
            '* Transcribing is paid per minute per langauge.'
          ]
        }
      ]
    },
    {
      tab: 'Gowaf Storage',
      header: 'Gowaf Storage Pricing',
      content: [
        {
          title: 'Standard Tier',
          titleEm: 'HDD',
          subTitle:
            '$0.01/GB per storage region for up to two regions. $0.005/GB per additional region. Up to 9 regions.',
          content: 'Storing more than 50TB per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: '$0.01/GB',
              hint: 'Single Region'
            },
            {
              text: '$0.02/GB',
              hint: 'Two Regions'
            },
            {
              text: '$0.025/GB',
              hint: 'Three Regions'
            },
            {
              text: '+$0.005/GB',
              hint: 'Each Additional Region'
            }
          ],
          bottomList: [
            'True Pay As you Go',
            '$1 Monthly Minimum',
            'Free Traffic to Bunny CDN',
            'No API fees',
            'Free API egress'
          ]
        },
        {
          title: 'Edge Tier',
          titleEm: 'SSD',
          subTitle: '$0.02/GB per each storage region. Up to 15 regions.',
          content: 'Storing more than 50TB per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: '$0.02/GB',
              hint: 'Single Region'
            },
            {
              text: '+$0.02/GB',
              hint: 'Each additional Region'
            }
          ],
          bottomList: [
            'True Pay As you Go',
            '$1 Monthly Minimum',
            'Free Traffic to Bunny CDN',
            'No API fees',
            'Free API egress'
          ]
        }
      ]
    },
    {
      tab: 'Gowaf Optimizer',
      header: 'Gowaf Optimizer Pricing',
      content: [
        {
          title: 'Excellent solution for any sized project',
          titleEm: '',
          subTitle: 'Fixed monthly price regardless of your traffic and scale.',
          content: 'Want to optimize over 20 websites?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: 'Unlimited Requests'
            },
            {
              text: 'FREE',
              hint: 'Unlimited Transformations'
            },
            {
              text: 'FREE',
              hint: 'Unlimited Optimizations'
            },
            {
              text: '$9.5/website',
              hint: 'Simple Monthly Pricing'
            }
          ]
        }
      ]
    },
    {
      tab: 'Gowaf DNS',
      header: 'Gowaf DNS Pricing',
      content: [
        {
          title: 'Pay per query. No hidden fees.',
          titleEm: '',
          subTitle: 'Simple Pay As You Go pricing with a generous free plan.',
          content: 'Serving more than a billion queries per month?',
          btn: 'Contact sales',
          href: '#',
          items: [
            {
              text: 'FREE',
              hint: 'Standard Queries (First 20 million)'
            },
            {
              text: 'FREE',
              hint: 'Smart Queries (First 1 million)'
            },
            {
              text: '$0.1/million',
              hint: 'Standard Queries (After 20 million)'
            },
            {
              text: '$0.3/million',
              hint: 'Smart Queries (After 1 million)'
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

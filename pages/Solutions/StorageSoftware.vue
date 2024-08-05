<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.storageSoftware.header.preTitle')"
    :title="$t('solutions.storageSoftware.header.title')"
    :content="$t('solutions.storageSoftware.header.content')"
    :btn="$t('solutions.storageSoftware.header.btn')"
    href="#"
    :hint="$t('solutions.storageSoftware.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_1@2x.png',
      w: '466px',
      h: '368px',

      msrc: '/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_1@2x.png',
      mw: '29.13rem',
      mh: '23rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <SolutionsAccelerate
    :title="$t('solutions.storageSoftware.accelerate.title')"
    :content="$t('solutions.storageSoftware.accelerate.content')"
    :up-down="i18ntext.upDown"
    :btn="$t('solutions.storageSoftware.accelerate.btn')"
    href="#"
    :list2="i18ntext.list2"
  />

  <SolutionsAd2
    :title="$t('solutions.storageSoftware.ad2.title')"
    :content="$t('solutions.storageSoftware.ad2.content')"
    :btn="$t('solutions.storageSoftware.ad2.btn')"
    href="#"
    :list="i18ntext.list"
    pic="/images/solutions/storage-software/Solutions_Storage_Software_graph_2@2x.png"
    pic-width="340px"
    pic-height="280px"
    m-pic-width="20.88rem"
    m-pic-height="17.5rem"
    m-pic="/images/solutions/storage-software/Solutions_Storage_Software_graph_2@2x.png"
  />

  <div class="map-container">
    <div class="title">{{ $t('solutions.storageSoftware.map.title') }}</div>
    <div class="sub-title">
      {{ $t('solutions.storageSoftware.map.subTitle') }}
    </div>
    <NetworkBanner class="map-container" />
  </div>

  <SolutionsAd1
    :title="$t('solutions.storageSoftware.ad1.title')"
    :sub-title="$t('solutions.storageSoftware.ad1.subTitle')"
    :btn="$t('solutions.storageSoftware.ad1.btn')"
    href="#"
    pic="/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_2@2x.png"
    pic-width="312px"
    pic-height="330px"
    style="margin-top: 0"
    mPic="/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_2@2x.png"
    mPicWidth="17.1rem"
    mPicHeight="18.8rem"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <SolutionsSupportPlan2 />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/solutions/storage-software/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/images/solutions/storage-software/Network_Overview_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '40 Gbps',
        content: 'Uplink Per Server'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      },
      {
        label: '99.99%',
        content: 'Availability SLA'
      }
    ],
    upDown: {
      up: {
        value: '40%',
        title: 'FASTER LOAD TIME'
      },
      down: {
        value: '30%',
        title: 'LOWER BILLING'
      }
    },
    list2: [
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_1_sel@2x.png',
        title: 'Scalable By Design',
        content:
          'Maximize your growth and expansion without care with a 80+ Tbps network.'
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_2_sel@2x.png',
        title: 'Tier 1 Global Network',
        content:
          'Connect directly to your users with over 3000 ISPs and 14 Tier 1 transit providers. Anywhere.'
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_3_sel@2x.png',
        title: 'NVMe+ SSD Servers',
        content:
          'Optimize delivery and reduce latency with top of the line AMD and NVMe hardware.'
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_4_sel@2x.png',
        title: 'Stay Protected',
        content:
          'Stay safe and focused with a built-in next-generation DDoS protection that just works.'
      }
    ],
    list: [
      '5X Faster Downloads',
      'Automatic Geo-Failover',
      '8 Storage Regions',
      '99.99% SLA'
    ],
    list1: {
      title1: 'Lightning fast. Features packed.',
      title2:
        'Raise the bar with robust security, reporting, and management feature.',
      items: [
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_1@3x.png',
          title: 'Token Authentication',
          content:
            'Take full control of who and for how long they can access your content.'
        },
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_2@3x.png',
          title: 'Origin Protection',
          content:
            'Protect your origin from attacks and traffic surges with the bunny.net origin shield.'
        },
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_3@3x.png',
          title: 'Logging & Statistics',
          content:
            'Get complete insight into your content delivery with valuable insights and customer metrics.'
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ happy customers',
      person: {
        name: 'Tom Mason',
        title: 'Nexus Mods',
        content:
          '“Working with Gowaf has been a breath of fresh air. Their team has been helpful, responsive, and knowledgeable. The service exceeded our expectations every step of the way.”'
      }
    }
  };
});
</script>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin: 20px auto 0;

    width: 912px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}
// For mobile devices
@media (max-width: 767px) {
  .map-container {
    margin-top: 7.5rem;
    margin-bottom: 16rem;
    > .title {
      font-weight: 500;
      font-size: 2.5rem;
      padding: 0 1.8rem;
      line-height: 1.6;
      text-align: left;
    }

    > .sub-title {
      margin: 1rem auto 0;

      width: auto;
      padding: 0 1.8rem;

      font-size: 1.75rem;
      color: #4e4e4e;

      text-align: left;
    }

    .map-container {
      margin-top: 3rem;
    }
  }
}
</style>

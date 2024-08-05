<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.websiteWordpress.header.preTitle')"
    :title="$t('solutions.websiteWordpress.header.title')"
    :content="$t('solutions.websiteWordpress.header.content')"
    :btn="$t('solutions.websiteWordpress.header.btn')"
    href="#"
    :hint="$t('solutions.websiteWordpress.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_banner_graph_1@2x.png',
      w: '460px',
      h: '404px',

      msrc: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_banner_graph_1@2x.png',
      mw: '28.75rem',
      mh: '25.25rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <SolutionsCloserToUser
    :title="$t('solutions.websiteWordpress.closerToUser.title')"
    :sub-title="$t('solutions.websiteWordpress.closerToUser.subTitle')"
  />

  <SolutionsAccelerate
    :title="$t('solutions.websiteWordpress.accelerate.title')"
    :content="$t('solutions.websiteWordpress.accelerate.content')"
    :list1="i18ntext.list1"
    :list2="i18ntext.list2"
    mobileListLayoutType="wrap"
  />

  <SolutionsAd2
    :title="$t('solutions.websiteWordpress.ad2.title')"
    :content="$t('solutions.websiteWordpress.ad2.content')"
    :btn="$t('solutions.websiteWordpress.ad2.btn')"
    href="#"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_2.png"
    pic-width="406px"
    pic-height="288px"
  >
    <div class="ad2-list">
      <div class="ad2-list-container">
        <div class="item" v-for="item in i18ntext.items">
          <div class="value">{{ item.value }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </div>
      <div class="pic" v-if="isMobile">
        <img
          src="/public/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_2.png"
        />
      </div>
    </div>
  </SolutionsAd2>

  <SolutionsAd1
    :title="$t('solutions.websiteWordpress.ad1.title')"
    :sub-title="$t('solutions.websiteWordpress.ad1.subTitle')"
    :btn="$t('solutions.websiteWordpress.ad1.btn')"
    href="#"
    pic="/images/solutions/website-wordpress/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    mPic="/images/solutions/website-wordpress/Network_Overview_banner_graph@2x.png"
    mPicWidth="18.75rem"
    mPicHeight="16.5rem"
  />

  <CommonList1 v-bind="i18ntext.slist1" />

  <SolutionsAd2
    :title="$t('solutions.websiteWordpress.ad2_1.title')"
    :content="$t('solutions.websiteWordpress.ad2_1.content')"
    :btn="$t('solutions.websiteWordpress.ad2_1.btn')"
    href="#"
    :list="i18ntext.ad2list"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_3.png"
    pic-width="426px"
    pic-height="270px"
    m-pic-width="26.78rem"
    m-pic-height="16.95rem"
    m-pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_3.png"
  />

  <SolutionsAd2
    :title="$t('solutions.websiteWordpress.ad2_2.title')"
    :content="$t('solutions.websiteWordpress.ad2_2.content')"
    :btn="$t('solutions.websiteWordpress.ad2_2.btn')"
    href="#"
    pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_4.png"
    pic-width="416px"
    pic-height="284px"
    style="padding-bottom: 120px"
    m-pic-width="26rem"
    m-pic-height="17.75rem"
    m-pic="/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_graph_4.png"
  />

  <SolutionsLogos
    :title="$t('solutions.websiteWordpress.logos.title')"
    :sub-title="$t('solutions.websiteWordpress.logos.subTitle')"
    :imgs="[
      `/mobile-images/solutions/website-wordpress/Solutions_Website_acceleration_logo_wordpress@2x.png`,
      `/mobile-images/solutions/website-wordpress/Solutions_Website_acceleration_logo_magento@2x.png`,
      `/mobile-images/solutions/website-wordpress/Solutions_Website_acceleration_logo_joomla@2x.png`
    ]"
    :btn="$t('solutions.websiteWordpress.logos.btn')"
    href="#"
  />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/solutions/website-wordpress/SmartEdge™__evaluate_character@2x.png',
      mAvatar:
        '/images/solutions/website-wordpress/SmartEdge™__evaluate_character@2x.png',
      showScores: false
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
        label: '1.000.000+',
        content: 'Powered Websites'
      },
      {
        label: 'Up to 5x',
        content: 'Faster Load Times'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '$1/month',
        content: 'As low as'
      }
    ],
    list1: [
      'Simple Installation',
      'DDoS Protection',
      'From $1/month',
      'No Hidden Fees',
      'Up to 5x Faster Website',
      '123 Global PoPs'
    ],
    list2: [
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_1_sel@2x.png',
        title: 'Best WordPress CDN on the market',
        content:
          'Maximize your growth and expansion without care with our 150 Tbps+ network.'
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_2_sel@2x.png',
        title: 'Tier 1 Global Network',
        content:
          'Connect directly to your users with over 3000 ISPs and 14 Tier 1 transit providers. Anywhere.'
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_3_sel@2x.png',
        title: 'NVMe+ SSD Servers',
        content:
          'Optimize delivery and reduce latency with top of the line AMD and NVMe hardware.'
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_4_sel@2x.png',
        title: 'Stay Protected',
        content:
          'Stay safe and focused with a built-in next-generation DDoS protection that just works.'
      }
    ],
    items: [
      {
        value: '5min',
        label: 'SETUP TIME'
      },
      {
        value: '5x',
        label: 'FASTER LOAD TIME'
      }
    ],
    slist1: {
      title1: 'Not just faster but also safer',
      title2:
        'Improve security, protect your content, and stop vulnerabilities.',
      items: [
        {
          icon: '/images/solutions/website-wordpress/cdn_overview_bulid_ic_1@2x.png',
          title: 'Free SSL Encryption',
          content:
            'Utilize free SSL Encryption for all of your Websites and Files hosted on Gowaf network.'
        },
        {
          icon: '/images/solutions/website-wordpress/Solutions_Website_acceleration_card_ic_2@2x.png',
          title: 'Image Watermark Protection',
          content:
            'Protect your images from hotlinking or being shared without credit.'
        },
        {
          icon: '/images/solutions/website-wordpress/Solutions_Website_acceleration_card_ic_3@2x.png',
          title: 'Prevent Video Downloading',
          content:
            'Enable Media Cage to prevent your video from being shared or downloaded.'
        }
      ]
    },
    ad2list: [
      '80% Reduce Image Size',
      'Up to 30% Faster',
      'WeBP Transformation',
      'Minimize Load Time'
    ],
    join1: {
      title: 'Join over 40.000+ global customers',
      person: {
        name: 'James Cantoni',
        title: 'Co-Founder, WP Compress',
        content:
          "“We're constantly impressed with the performance, ease of use, and outstanding support that Gowaf offers us and our clients!”"
      }
    }
  };
});
</script>

<style lang="less" scoped>
.ad2-list {
  margin-top: 40px;
  .ad2-list-container {
    display: flex;
    flex-direction: row;
  }
  .pic {
    margin-top: 3.13rem;
    img {
      width: 23.88rem;
      height: 18rem;
      display: block;
      margin: 0 auto;
    }
  }
  .item {
    flex: 1;
    .value {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 48px;

      line-height: 64px;

      background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .label {
      font-size: 16px;
      color: #4e4e4e;
    }
  }
}

@media (max-width: 767px) {
  .ad2-list {
    margin-top: 2.6rem;
    flex-direction: column;
    display: flex;

    .item {
      flex: 1;

      .value {
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 3.13rem;

        line-height: 1.6;

        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .label {
        font-size: 1.5rem;
        color: #4e4e4e;
      }
    }
  }
}
</style>

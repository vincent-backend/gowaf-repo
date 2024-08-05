<template>
  <Header />

  <div class="test">
    <CommonHeader1
      :pre-title="$t('solutions.websiteAcceleration.header.preTitle')"
      :title="$t('solutions.websiteAcceleration.header.title')"
      :content="$t('solutions.websiteAcceleration.header.content')"
      :btn="$t('solutions.websiteAcceleration.header.btn')"
      href="#"
      :hint="$t('solutions.websiteAcceleration.header.hint')"
      :show-foot="false"
      :pic="{
        src: '/images/solutions/website-acceleration/Solutions_Website_acceleration_banner_graph_1@2x.png',
        w: '480px',
        h: '384px',

        msrc: '/images/solutions/website-acceleration/Solutions_Website_acceleration_banner_graph_1@2x.png',
        mw: '30rem',
        mh: '24rem'
      }"
    />

    <CommonNumbers
      is-row
      is-two-row
      style="margin-top: 80px"
      :items="i18ntext.numbers"
    />

    <SolutionsCloserToUser
      :title="$t('solutions.websiteAcceleration.closerToUser.title')"
      :sub-title="$t('solutions.websiteAcceleration.closerToUser.subTitle')"
    />

    <SolutionsAccelerate
      :title="$t('solutions.websiteAcceleration.accelerate.title')"
      :content="$t('solutions.websiteAcceleration.accelerate.content')"
      :list1="i18ntext.list1"
      :list2="i18ntext.list2"
      mobileListLayoutType="wrap"
    />

    <SolutionsAd1
      :title="$t('solutions.websiteAcceleration.ad1.title')"
      :sub-title="$t('solutions.websiteAcceleration.ad1.subTitle')"
      :btn="$t('solutions.websiteAcceleration.ad1.btn')"
      href="#"
      pic="/images/solutions/website-acceleration/Network_Overview_banner_graph@2x.png"
      pic-width="300px"
      pic-height="300px"
      mPic="/images/solutions/website-acceleration/Network_Overview_banner_graph@2x.png"
      mPicWidth="18.75rem"
      mPicHeight="18.75rem"
    />

    <SolutionsLogos
      :title="$t('solutions.websiteAcceleration.logos.title')"
      :sub-title="$t('solutions.websiteAcceleration.logos.subTitle')"
      :imgs="[
        `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_wordpress@2x.png`,
        `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_magento@2x.png`,
        `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_joomla@2x.png`,
        `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_drupal@2x.png`,
        `/images/solutions/website-acceleration/Solutions_Website_acceleration_logo_shopware@2x.png`
      ]"
      :btn="$t('solutions.websiteAcceleration.logos.btn')"
      href="#"
    />

    <CommonList1 v-bind="i18ntext.slist1" />

    <SolutionsAd2
      :title="$t('solutions.websiteAcceleration.ad2_1.title')"
      :content="$t('solutions.websiteAcceleration.ad2_1.content')"
      :list="i18ntext.adlist"
      pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_1.png"
      pic-width="358px"
      pic-height="286px"
      m-pic-width="22.38rem"
      m-pic-height="17.88rem"
      m-pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_1.png"
    />

    <SolutionsAd2
      :title="$t('solutions.websiteAcceleration.ad2_2.title')"
      :content="$t('solutions.websiteAcceleration.ad2_2.content')"
      :btn="$t('solutions.websiteAcceleration.ad2_2.btn')"
      href="#"
      :list="i18ntext.ad2list"
      pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_2.png"
      pic-width="426px"
      pic-height="270px"
      m-pic-width="26.63rem"
      m-pic-height="16.88rem"
      m-pic="/images/solutions/website-acceleration/Solutions_Website_acceleration_graph_2.png"
    />

    <NetworkJoin1
      v-bind="{
        ...i18ntext.join1,
        avatar:
          '/images/solutions/website-acceleration/SmartEdge™__evaluate_character@2x.png',
        mAvatar:
          '/images/solutions/website-acceleration/SmartEdge™__evaluate_character@2x.png',
        showScores: false
      }"
    />
  </div>

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
        label: '40.000+',
        content: 'Satisfied Customers'
      }
    ],
    list1: [
      'From $1/month',
      'Real-Time Monitoring',
      'No Hidden Fees',
      'DDoS Protection',
      'Perma-Caching',
      'Free SSL Certificate'
    ],
    list2: [
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_1_sel@2x.png',
        title: 'Boost Performance',
        content:
          'Keep your content on the edge, get closer to your users and hop ahead of the competition.'
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_2_sel@2x.png',
        title: 'Win User Experience',
        content:
          'Delight your visitors with an unforgettable user experience thanks to faster website load times.'
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_3_sel@2x.png',
        title: 'Reduce Costs',
        content:
          'Eliminate enormous costs for high volume downloads with a simple pay-as-you-go pricing.'
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_4_sel@2x.png',
        title: 'Stay Protected',
        content:
          'Stay safe and focused with a built-in next-generation DDoS protection that just works.'
      }
    ],
    slist1: {
      title1: 'Not just faster but also safer',
      title2:
        'Improve security, protect your content, and stop vulnerabilities.',
      items: [
        {
          icon: '/images/solutions/website-acceleration/cdn_overview_bulid_ic_1@3x.png',
          title: 'Free SSL',
          content:
            'Take advantage of a free SSL certificate with a single button click.'
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_2@3x.png',
          title: '123 Global PoPs',
          content:
            'Supercharge your website delivery with strategically placed global PoPs.'
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_3@3x.png',
          title: 'Tier 1 Network',
          content:
            'Join a network powered by carefully selected providers with top-tier data centers.'
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_4@3x.png',
          title: 'Hotlinking Protection',
          content:
            'Easily protect your images from being shared on other websites with domain protection.'
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_5@3x.png',
          title: 'Smart Routing',
          content:
            'Route your users where it matters based on your content with the SmartEdge™ routing engine.'
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_6@3x.png',
          title: 'Gowaf Optimizer',
          content:
            'Optimize your images and minify your CSS/JS files for maximum performance.'
        }
      ]
    },
    adlist: [
      'Decrease Bounce Rate',
      'Improve SEO',
      'Increase Conversions',
      'Improve User Experience'
    ],
    ad2list: [
      'Decrease Bounce Rate',
      'Improve SEO',
      'Increase Conversions',
      'Improve User Experience'
    ],
    join1: {
      title: 'Join over 40.000+ happy customers',
      person: {
        name: 'Jerry Caloroso',
        title: 'Chief Streaming Officer, OneStudio',
        content:
          '"Finding Gowaf CDN is like finding a gold mine! It\'s like is this real? "'
      }
    }
  };
});
</script>

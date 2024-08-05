<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.story'),
        href: '/resources/story',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.careers'),
        href: '/resources/careers',
        current: false
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
    :pre-title="$t('resources.about.header.preTitle')"
    :title="$t('resources.about.header.title')"
    :content="$t('resources.about.header.content')"
    page="resourcesAbout"
    href="#"
    :pic="{
      src: '/images/resources/about/resources_about_banner_graph@2x.png',
      w: '540px',
      h: '340px',

      msrc: '/mobile-images/solutions/security-cdn/Solutions_Security_cdn_banner_graph@2x.png',
      mw: '27.38rem',
      mh: '25rem'
    }"
  />

  <ProductsPerfectSolution
    :title="$t('resources.about.perfectSolution.title')"
    :titleWidth="'550px'"
    pic-position="bottom"
    :content="$t('resources.about.perfectSolution.content')"
    :items="i18ntext.items"
    :pic="{
      url: '/images/resources/about/resources_about_graph_1@2x.png',
      width: 340,
      height: 288,
      mheight: '18rem',
      mwidth: '21.25rem'
    }"
  />

  <ResourcesSuperCharge :tab="i18ntext.superCharge" />
  <CommonNumbers
    is-row
    is-two-row
    class="about-numbers"
    :items="i18ntext.numbers"
  />

  <CommonList2 v-bind="i18ntext.list2" />

  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />

  <CommonList3
    title1="Our Gowaf Milestones"
    title2=""
    :items="i18ntext.list"
    layoutType="full"
    class="about-CommonList"
  />
  <ResourcesGetInTouch class="Touch" />
  <Footer
    :type="{
      page: 'about'
    }"
  />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});

const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/resources/about/resources_about_ic_mission@2x.png',
        title: 'Our Mission',
        content:
          'It’s our mission to help make the internet hop faster! By that, we mean building a faster, safer, and more reliable internet for billions of people worldwide.'
      },
      {
        icon: '/images/resources/about/resources_about_ic_vision@2x.png',
        title: 'Our Vision',
        content:
          'To build a genuinely global network driven by constant innovation that helps companies hop ahead and developers to make the internet of tomorrow.'
      },
      {
        icon: '/images/resources/about/resources_about_ic_value@2x.png',
        title: 'Our Main Core Value',
        content:
          'We are connected by 9 core values, but our main one is relentless innovation.'
      }
    ],
    superCharge: {
      tab: 'Website Acceleration',
      title: 'Every ambitious vision has humble beginnings',
      content:
        'Every story, no matter how small or large, has a beginning. While our vision has changed and grown, our beginnings were quite humble. What hasn’t changed is our commitment to focus on solving problems, and always putting the customer first from the moment you sign up.',
      icon: '/images/resources/about/resources_about_graph_2@2x.png',
      iconWidth: '334px',
      iconHeight: '312px',
      btn: 'Read Our Full Story',
      href: '#',
      mIcon: '/mobile-images/resources/about/resources_about_graph_2@2x.png',
      mIconWidth: '20.88rem',
      mIconHeight: '19.5rem'
    },
    numbers: [
      {
        label: '40.000+',
        content: 'Active Customers'
      },
      {
        label: '1.000.000+',
        content: 'Powered Websites'
      },
      {
        label: '650+ Billion',
        content: 'Delivered Monthly Requests'
      }
    ],
    list2: {
      title1: 'We hop by our core values',
      title2:
        'The Gowaf team is connected by 9 Gowaf values to help build a better tomorrow.',
      items: [
        {
          icon: '/images/resources/about/resources_about_card_ic_1@2x.png',
          title: 'We relentlessly innovate.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_2@2x.png',
          title: 'We operate with integrity.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_3@2x.png',
          title: 'We disrupt and deliver impact.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_4@2x.png',
          title: 'We believe great is not good enough.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_5@2x.png',
          title: 'We embrace transparency and open communication.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_6@2x.png',
          title: 'We’re kind and strive to make the world a better place.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_7@2x.png',
          title: 'We learn and improve every day.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_8@2x.png',
          title: 'We put customers first.'
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_9@2x.png',
          title: 'We embrace diversity.'
        }
      ]
    },
    list: [
      {
        title: '1-Million Websites',
        subTitle: 'A million sites hopping with Gowaf!',
        icon: '/images/resources/story/Resources_Story_card_bg_2x.png',
        content1:
          "The Gowaf are taking over the internet! In August 2022, over 1 million websites are now hopping with Gowaf and we're getting ready to grow even faster.",
        content2: 'August 2022'
      },
      {
        title: 'Gowaf Rebrand',
        subTitle: 'A bigger vision under a new name to go along',
        content1:
          'A simple idea of building a great CDN turned into an ambitious new vision to truly help shape the future of the internet and make it hop faster.',
        content2: 'January 2021'
      },
      {
        title: '100.000 Pull Zones',
        subTitle: 'We reached 100.000+ active pull zones',
        content1:
          'It took a few years for things to take off, but we were growing at a nice pace. At the end of 2020, we reached the 1st major milestone of 100.000 Pull Zones!',
        content2: 'December 2020'
      },
      {
        title: 'Beta Launch',
        subTitle: 'Gowaf CDN beta finally launched',
        content1:
          'The idea turned into a vision of disrupting the CDN market. After 3 years of hard work and sleepless nights, Gowaf CDN entered its first beta stage.',
        content2: 'October 2015'
      },
      {
        title: 'The Idea was Born',
        subTitle: 'Idea of Gowaf CDN was first born',
        content1:
          'Struggling with CDN costs, our founder Dejan came up with the first idea of a fast, powerful, but affordable CDN to help others accelerate their content.',
        content2: 'January 2012'
      }
    ]
  };
});
</script>

<style lang="less" scoped>
.footer-1-container {
  margin-top: 0 !important;
}
.about-numbers {
  margin-top: 120px;
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

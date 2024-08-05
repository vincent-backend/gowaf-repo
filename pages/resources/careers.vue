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
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="i18ntext.neverHit"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="i18ntext.neverHit"
    />
  </XsOnly>
  <CommonSuperCharge
    v-bind="i18ntext.currentJob"
    :isList="true"
  />
  <ProductsDRMCustomers
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    list1: {
      title1: 'Gowaf Values That Keep Us Hopping',
      title2: 'Eight simple values that unite one amazing team.',
      items: [
        {
          icon: '/images/resources/careers/Resources_about_card_ic_1_2x.png',
          title: 'We relentlessly innovate.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_2_2x.png',
          title: 'We operate with integrity.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_3_2x.png',
          title: 'We disrupt and deliver impact.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_4_2x.png',
          title: 'We believe great is not good enough.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_5_2x.png',
          title: 'We embrace transparency and open communication.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_6_2x.png',
          title: 'We’re kind and strive to make the world a better place.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_7_2x.png',
          title: 'We learn and improve every day.',
          content: ''
        },
        {
          icon: '/images/resources/careers/Resources_about_card_ic_9_2x.png',
          title: 'We embrace diversity.',
          content: ''
        }
      ]
    },
    neverHit: {
      title: 'Perks and benefits for days',
      subTitle: "We don't want you to just work here.We want you to belong.",
      items: [
        {
          icon: '/images/resources/careers/Resources_Careers_ic_1_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Competitive Salary',
          content: 'You can expect above-average industry salaries.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_2_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Paid Time Off',
          content:
            'Love skiing or visiting the seaside? No problem – we offer 25 days paid vacation.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_3_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Flexible Working Hours',
          content:
            'Don’t like working in the morning? Choose your own working schedule.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_4_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Parental Leave',
          content:
            'Bonding with the little one is super important, so we offer parental leave and flexible scheduling to help you out.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_5_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Remote Work',
          content:
            'Work from the comfort of your home, neighborly coffee shop, or anywhere in the world.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_6_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Home Office Budget',
          content:
            'We believe that everyone is more efficient working in a comfortable office, and we’re happy to help with that.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_7_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Paid Sick Leave',
          content:
            'Feeling ill? Take time off and get back to 100% without worrying about your finances.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_8_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Mental Health',
          content:
            'Feeling down? We’ve got your back. bunny.net provides mental health resources and help via BetterHelp.com.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_9_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Annual Fluffle Building',
          content:
            "We're remote but not distant! Our annual fluffle building is where virtual high fives turn into real ones.",
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_10_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Health Care',
          content:
            'Release the stress of health uncertainties. Rest easy knowing your health care needs are always met.',
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_11_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Wellness budget',
          content:
            "Be it lifting weights, unwinding with a massage, or finding your zen in yoga, we're supporting your wellness journey.",
          contentAlign: 'left'
        },
        {
          icon: '/images/resources/careers/Resources_Careers_ic_12_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Educational Budget',
          content:
            'Dedicated yearly learning and educational budget for books, seminars, and online courses.',
          contentAlign: 'left'
        }
      ]
    },
    currentJob: {
      title: 'Current Job Openings',
      subTitle:
        'Interested in a position and think we’ll be a good fit? Join an international team of amazing Gowaf!',
      tabs: [
        {
          tab: 'All',
          title: 'Make your website hop like a Gowaf',
          content:
            'Turn your website from a snail into a Gowaf. Deliver the best possible experience to your users with our global CDN and optimizer service. Speed up your website and hop ahead of the competition.',
          icon: '/images/home/home_bot_graph_Website@2x.png',
          iconWidth: '374px',
          iconHeight: '272px',
          btn: 'Supercharge Your Website',
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Website@2x.png',
          mIconWidth: '24.13rem',
          mIconHeight: '18.19rem',
          items: [
            {
              title: 'CDN Support Engineer Il',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (CDN)',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Compute)',
              content:
                'You will spearhead the development and management of the Gowaf Edge Compute product line, guiding and developing a forward-',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Security)',
              content:
                'You will spearhead the development and management of the Gowaf Security product line, driving a continuously evolving vision for the',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Stream)',
              content:
                'You will work with the engineering, marketing, leadership, and customer-facing teams to build a cutting-edge video delivery platform.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (DNS)',
              content:
                'You will spearhead the development and management of the Gowaf DNS product line, guiding a continually evolving vision.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Senior Engineer (Front End)',
              content:
                'You will help with the interface of Gowaf products, ensuring our customers have intuitive and efficient access to our solutions.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Technical Content Writer',
              content:
                'You will simplify complex networking concepts into engaging Gowaf Academy articles, work on case studies, and user guides for our dashboard.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            }
          ]
        },
        {
          tab: 'Engineering',
          title: 'Reliable video CDN that truly hops',
          content:
            'Solve the hassle of video delivery by packing transcoding, storage, security, and video player into a powerful but straightforward package. Stream anywhere. Without buffering!',
          icon: '/images/home/home_bot_graph_video@2x.png',
          iconWidth: '386px',
          iconHeight: '291px',
          btn: 'Unforgettable Video Experience',
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_video@2x.png',
          mIconWidth: '23.38rem',
          mIconHeight: '17rem',
          items: [
            {
              title: 'CDN Support Engineer Il',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (CDN)',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Compute)',
              content:
                'You will spearhead the development and management of the Gowaf Edge Compute product line, guiding and developing a forward-',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Security)',
              content:
                'You will spearhead the development and management of the Gowaf Security product line, driving a continuously evolving vision for the',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Stream)',
              content:
                'You will work with the engineering, marketing, leadership, and customer-facing teams to build a cutting-edge video delivery platform.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (DNS)',
              content:
                'You will spearhead the development and management of the Gowaf DNS product line, guiding a continually evolving vision.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Senior Engineer (Front End)',
              content:
                'You will help with the interface of Gowaf products, ensuring our customers have intuitive and efficient access to our solutions.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Technical Content Writer',
              content:
                'You will simplify complex networking concepts into engaging Gowaf Academy articles, work on case studies, and user guides for our dashboard.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            }
          ]
        },
        {
          tab: 'Marketing',
          title: 'Deliver lightning fast downloads',
          content:
            'Supercharge your software downloads worldwide with one of the fastest global networks. Experience high throughput by bringing your content closer to your users anywhere.',
          icon: '/images/home/home_bot_graph_Software@2x.png',
          iconWidth: '392px',
          iconHeight: '294px',
          btn: 'Deliver Faster Downloads',
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Software@2x.png',
          mIconWidth: '24.5rem',
          mIconHeight: '18.38rem',
          items: [
            {
              title: 'CDN Support Engineer Il',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (CDN)',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Compute)',
              content:
                'You will spearhead the development and management of the Gowaf Edge Compute product line, guiding and developing a forward-',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Security)',
              content:
                'You will spearhead the development and management of the Gowaf Security product line, driving a continuously evolving vision for the',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Stream)',
              content:
                'You will work with the engineering, marketing, leadership, and customer-facing teams to build a cutting-edge video delivery platform.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (DNS)',
              content:
                'You will spearhead the development and management of the Gowaf DNS product line, guiding a continually evolving vision.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Senior Engineer (Front End)',
              content:
                'You will help with the interface of Gowaf products, ensuring our customers have intuitive and efficient access to our solutions.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Technical Content Writer',
              content:
                'You will simplify complex networking concepts into engaging Gowaf Academy articles, work on case studies, and user guides for our dashboard.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            }
          ]
        },
        {
          tab: 'Marketing',
          title: 'Transform your images. On the fly.',
          content:
            'Resize, crop, sharpen, and transform images on the fly with an ultra-fast processing engine Gowaf on 123 datacenters worldwide. Simplify development & optimize SEO by reducing image size by up to 80%.',
          icon: '/images/home/home_bot_graph_Dynamic@2x.png',
          iconWidth: '360px',
          iconHeight: '266px',
          btn: 'Optimize Your Images',
          href: '#',
          mIcon: '/mobile-images/home/home_bot_graph_Dynamic@2x.png',
          mIconWidth: '22.5rem',
          mIconHeight: '16.63rem',
          items: [
            {
              title: 'CDN Support Engineer Il',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (CDN)',
              content:
                'Spearhead the development and management of the flagship Gowaf CDN product line, guiding a continually evolving vision to continue improving',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Compute)',
              content:
                'You will spearhead the development and management of the Gowaf Edge Compute product line, guiding and developing a forward-',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Security)',
              content:
                'You will spearhead the development and management of the Gowaf Security product line, driving a continuously evolving vision for the',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (Stream)',
              content:
                'You will work with the engineering, marketing, leadership, and customer-facing teams to build a cutting-edge video delivery platform.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Product Owner (DNS)',
              content:
                'You will spearhead the development and management of the Gowaf DNS product line, guiding a continually evolving vision.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Senior Engineer (Front End)',
              content:
                'You will help with the interface of Gowaf products, ensuring our customers have intuitive and efficient access to our solutions.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            },
            {
              title: 'Technical Content Writer',
              content:
                'You will simplify complex networking concepts into engaging Gowaf Academy articles, work on case studies, and user guides for our dashboard.',
              iconList: [
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Time_2x.png',
                  label: 'Full-Time'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Remote_2x.png',
                  label: 'Remote'
                },
                {
                  icon: '/images/resources/careers/Resources_Careers_card_ic_Shifts_2x.png',
                  label: 'Flexible Hours'
                }
              ]
            }
          ]
        }
      ]
    },
    drmCustomer: {
      title: 'Trusted by 40.000+ global customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 600+ reviews',
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
        title: 'Matthias Mauch',
        subTitle: 'Younity',
        content:
          '"We had a flow! summit without a single complaint. I think, overall, bunny.net is just a very complete solution. Handling videos is so easy with Bunny - you don\'t need a lot of training.It\'s very streamlined."'
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

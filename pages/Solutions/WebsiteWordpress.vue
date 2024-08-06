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
const { t } = useI18n();
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '1.000.000+',
        content: t('ailUpetGngG-Iu1SAPP1Z')
      },
      {
        label: t('zL_N5pvniQimxTom0ni_7'),
        content: t('42XfFYOriwEO3d5a0USlJ')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: '$1/month',
        content: t('23Ew9lfpb1dymnhr6h363')
      }
    ],
    list1: [
      t('A1kQs7wjeedrU-cND7tiI'),
      t('network.breadCrumbs.ddosProtection'),
      t('HWOK2UItHhoG1jpcUllz5'),
      t('UyW_8wt9a6R_vyi2j1EaV'),
      t('o-q_TlCZQu4CpJvqCC3-W'),
      t('EQtYT7hlfwxa4IltERWkQ')
    ],
    list2: [
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_1_sel@2x.png',
        title: t('9YVRNO6BIvXqjjflIKj0G'),
        content: t('HMe7Sdf1ygI6-7fpxH_VE')
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_2_sel@2x.png',
        title: t('2VSWM5fA9jcXRtLFnvGl6'),
        content: t('jFljO5tXwK84zrW6Zl5Hl')
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_3_sel@2x.png',
        title: t('saVbtL2cUjd5F2Al1K0Hf'),
        content: t('2Ld9EoNBSDa-XPRDw7c1o')
      },
      {
        icon: '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/website-wordpress/Solutions_Website_wordpress_cdn_ic_4_sel@2x.png',
        title: t('09wUFOVxktQu_onbJaRqA'),
        content: t('T5wGJhUJMdUWlVqxEHN0J')
      }
    ],
    items: [
      {
        value: '5min',
        label: t('6D9kxz3kgEEVxdwzgh535')
      },
      {
        value: '5x',
        label: t('ohid8KwORcR1vZawcZDM_')
      }
    ],
    slist1: {
      title1: t('PFjZxGwx9t4yJtG1BKm7m'),
      title2: t('jheNHTub91P5E0UJWfwm-'),
      items: [
        {
          icon: '/images/solutions/website-wordpress/cdn_overview_bulid_ic_1@2x.png',
          title: t('ka0ZkKxOlkTrc2yzXO1Mr'),
          content: t('y5-WpS_HvVDLxZ0p37Ukk')
        },
        {
          icon: '/images/solutions/website-wordpress/Solutions_Website_acceleration_card_ic_2@2x.png',
          title: t('9NdLL9malGBjYK2RzNvca'),
          content: t('ScRETUQ-AMa_0o2qyVqIO')
        },
        {
          icon: '/images/solutions/website-wordpress/Solutions_Website_acceleration_card_ic_3@2x.png',
          title: t('BrfnbUovA34T5tnE2eNEE'),
          content: t('YHRy1-xLcrNtF4d6rOd-_')
        }
      ]
    },
    ad2list: [
      t('komvpj_RETkhoTQKkQmXu'),
      t('4RUjAk1m0aFBM2iLPMn0e'),
      t('08TJ4XLLtfdfhO4SVnddO'),
      t('Bwus9KXAX-BXqN9iR9EXC')
    ],
    join1: {
      title: t('8Exj7XGIsGwCmEwgDTN4F'),
      person: {
        name: t('D-oyXa0WrbPTAZ8FJFkpL'),
        title: t('PFn9Jz4oEpBOU1NWirjn1'),
        content: t('qxP_Wkmo9R0Hv1iqtnPZl')
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

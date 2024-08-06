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
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    list1: [
      t('HWOK2UItHhoG1jpcUllz5'),
      t('uRao7VE1b0JinEkTtLiy9'),
      t('UyW_8wt9a6R_vyi2j1EaV'),
      t('network.breadCrumbs.ddosProtection'),
      'Perma-Caching',
      t('WNltSFgIXwNMPL6RL6IsC')
    ],
    list2: [
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_1_sel@2x.png',
        title: t('pzVZvT_6U8-8IQATIFtK2'),
        content: t('oYfDZVf96qjgDq_XtJx0Z')
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_2_sel@2x.png',
        title: t('8vKwNMedMPRXtvw4Qdsg3'),
        content: t('ZrqBv1aNdpYjmNwo6qOu3')
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_3_sel@2x.png',
        title: t('h65iQSDjOfejf_nYJhAlA'),
        content: t('v-1-C550JBTA1-25COkFY')
      },
      {
        icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/website-acceleration/Solutions_Website_acceleration_ic_4_sel@2x.png',
        title: t('09wUFOVxktQu_onbJaRqA'),
        content: t('T5wGJhUJMdUWlVqxEHN0J')
      }
    ],
    slist1: {
      title1: t('PFjZxGwx9t4yJtG1BKm7m'),
      title2: t('jheNHTub91P5E0UJWfwm-'),
      items: [
        {
          icon: '/images/solutions/website-acceleration/cdn_overview_bulid_ic_1@3x.png',
          title: t('Bc-aiaAY-PUKjyvfT0jnX'),
          content: t('wXiKxjwkgfTmobSZJDp89')
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_2@3x.png',
          title: t('EQtYT7hlfwxa4IltERWkQ'),
          content: t('M-oQAn77HXKNeKMGpJFd3')
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_3@3x.png',
          title: t('fi8ZLqDrvP3x4xN9ChR-V'),
          content: t('_S-zyb2WIL-Ii5O4eKkTF')
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_4@3x.png',
          title: t('PVuK0XsZri8h-6ZKXJvG_'),
          content: t('MitbZ03rrb46v2Uw7MXrr')
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_5@3x.png',
          title: t('wKWbPX0ZkLuXM6ZtC0zrI'),
          content: t('xnI9os10_Gk_6SRrEKhfF')
        },
        {
          icon: '/images/solutions/website-acceleration/Solutions_Website_acceleration_card_ic_6@3x.png',
          title: t('products.optimizer.overview.header.preTitle'),
          content: t('eOwg7zhZbx3fnE0to7OTR')
        }
      ]
    },
    adlist: [
      t('dNqiGl8bDzfG839_Skbto'),
      t('peXjEx-4UeGmcETiqqvHY'),
      t('KBPy3XUmJP6XVIIURLr_B'),
      t('Ov-ndR5mHoH_vrI6Zz3ej')
    ],
    ad2list: [
      t('-53p9_8WlIaKZinvPK6oq'),
      t('pbfeFCWooDtwysvAhfTV4'),
      t('CVdf-9w5jeHaomovkzipM'),
      t('qxgO5QPmiwphlyC7EuQMj')
    ],
    join1: {
      title: t('home.join2.title'),
      person: {
        name: t('ZKkMV4DOuwXM2oIbSQ376'),
        title: t('nKW0THu6D57T52EAqvke4'),
        content: t('exNQEWWBs2CoPXFgG2vVd')
      }
    }
  };
});
</script>

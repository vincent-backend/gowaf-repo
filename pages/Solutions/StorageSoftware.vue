<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.storageSoftware.header.preTitle')"
    :title="$t('solutions.storageSoftware.header.title')"
    :content="$t('solutions.storageSoftware.header.content')"
    :btn="$t('solutions.storageSoftware.header.btn')"
    href="/forgot"
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
    href="/forgot"
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
const { t } = useI18n();
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: t('vI-vXhn9brN3cl5LkbU0V'),
        content: t('l4_VWVit0HbCJ8_VAWsXA')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('x3EHuylv_KnlDWqsBwbDK')
      },
      {
        label: '99.99%',
        content: t('HIOHON9Z5SKdA4RAot3E4')
      }
    ],
    upDown: {
      up: {
        value: '40%',
        title: t('ohid8KwORcR1vZawcZDM_')
      },
      down: {
        value: '30%',
        title: t('017JPyg08xayp8cwtU1o4')
      }
    },
    list2: [
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_1_sel@2x.png',
        title: t('wSBlPFt1ZYzF5piinJo8-'),
        content: t('eHz3-F5sN77Xh5IBCxI0x')
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_2_sel@2x.png',
        title: t('2VSWM5fA9jcXRtLFnvGl6'),
        content: t('jFljO5tXwK84zrW6Zl5Hl')
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_3_sel@2x.png',
        title: t('saVbtL2cUjd5F2Al1K0Hf'),
        content: t('2Ld9EoNBSDa-XPRDw7c1o')
      },
      {
        icon: '/images/solutions/storage-software/Solutions_Storage_Software_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/storage-software/Solutions_Storage_Software_ic_4_sel@2x.png',
        title: t('09wUFOVxktQu_onbJaRqA'),
        content: t('T5wGJhUJMdUWlVqxEHN0J')
      }
    ],
    list: [
      t('uPTz_RjuaXCjiShtIVksL'),
      t('ttxFBv5UR8C_GgOJLbGIk'),
      t('0v-a3Od5AIIFUSlzYkZdt'),
      t('vdJ-cTnYOHpor8_zHwIal')
    ],
    list1: {
      title1: t('H4nvRWWsE9a2pvyy_0Efb'),
      title2: t('B--P9gjvy3k40mMBe3EWj'),
      items: [
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_1@3x.png',
          title: t('feQGdTJI4u6AoECQxK1bI'),
          content: t('SOU8aCWoqDn5IJAkSTyAi')
        },
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_2@3x.png',
          title: t('oHyyxzj2TsYqF8hW35jd7'),
          content: t('DTnbzSWUAnBnfF-7btCit')
        },
        {
          icon: '/images/solutions/storage-software/Solutions_Storage_Software_card_ic_3@3x.png',
          title: t('CPQq26El083VjTaU_3Vtw'),
          content: t('SP6573CVMm_Ch9O012nHg')
        }
      ]
    },
    join1: {
      title: t('home.join2.title'),
      person: {
        name: t('ZeeSZ52uudWny1Fk6BsKG'),
        title: t('VVzzamDY3fj2RpKojAPGd'),
        content: t('OmSew8mun8sNwyQTiAUuz')
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

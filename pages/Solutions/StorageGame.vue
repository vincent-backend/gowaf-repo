<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.storageGame.header.preTitle')"
    :title="$t('solutions.storageGame.header.title')"
    :content="$t('solutions.storageGame.header.content')"
    :btn="$t('solutions.storageGame.header.btn')"
    href="/forgot"
    :hint="$t('solutions.storageGame.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/solutions/storage-game/Solutions_Storage_game_banner_graph_1@2x.png',
      w: '442px',
      h: '348px',

      msrc: '/images/solutions/storage-game/Solutions_Storage_game_banner_graph_1@2x.png',
      mw: '27.63rem',
      mh: '21.75rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    class="SecurityCdn-CommonNumbers"
    :items="i18ntext.numbers"
  />

  <SolutionsAccelerate
    :title="$t('solutions.storageGame.accelerate.title')"
    :content="$t('solutions.storageGame.accelerate.content')"
    :list1="i18ntext.list1"
    :list2="i18ntext.list2"
  />

  <CommonSuperCharge
    class="SecurityCdn-SuperCharge"
    v-bind="i18ntext.goFaster"
  />

  <SolutionsAd1
    :title="$t('solutions.storageGame.ad1.title')"
    :sub-title="$t('solutions.storageGame.ad1.subTitle')"
    :btn="$t('solutions.storageGame.ad1.btn')"
    href="/forgot"
    pic="/images/solutions/storage-game/Solutions_Storage_game_Media_banner_graph_2@2x.png"
    pic-width="450px"
    pic-height="330px"
    mPic="/mobile-images/solutions/storage-game/Solutions_Video_Media_banner_graph_2@2x.png"
    mPicWidth="19.38rem"
    mPicHeight="16.13rem"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <NetworkJoin1
    class="SecurityCdn-NetworkJoin1"
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png'
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
        label: '80%',
        content: t('keltIF1Ff--W9BkdZlY8T')
      },
      {
        label: t('q1ufRx9wOX_bkNPJGQmN1'),
        content: t('RDF-FK0HEbcFR8RsEIV6H')
      },
      {
        label: t('zL_N5pvniQimxTom0ni_7'),
        content: t('wiNwuCWHYmlRPGm_V7Ptr')
      },
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('x3EHuylv_KnlDWqsBwbDK')
      }
    ],
    list1: [
      t('mSdyZsOF07JwdEoi5a592'),
      t('SWUm65-BFFQ5yMVHKB4L2'),
      t('1PAn6q6oGb2yDA5_-NNHC'),
      t('network.breadCrumbs.ddosProtection'),
      t('uRao7VE1b0JinEkTtLiy9'),
      t('00cjBG9btnajqzHHnAf7p')
    ],
    list2: [
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_1_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_1_sel@2x.png',
        title: t('T7pZavGAUgmxpFLhKbdo-'),
        content: t('ho3vWZBdPW2C77v7qQ6Ht')
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_2_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_2_sel@2x.png',
        title: t('VesXI9t4UMcKu0oXUPodx'),
        content: t('iP0eD4Fz4dQo7jyJ_ee8e')
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_3_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_3_sel@2x.png',
        title: t('network.breadCrumbs.ddosProtection'),
        content: t('55O27hGsGilLgPC6GKcFn')
      },
      {
        icon: '/images/solutions/storage-game/Solutions_Storage_game_ic_4_nor@2x.png',
        iconActive:
          '/images/solutions/storage-game/Solutions_Storage_game_ic_4_sel@2x.png',
        title: t('h65iQSDjOfejf_nYJhAlA'),
        content: t('Jes4YFrZDJ4Ilg8eNZi2b')
      }
    ],
    goFaster: {
      title: t('LHTTNc8nwNjHeW9kt9Vwb'),
      subTitle: t('-Aas4QTz8cz66TKJ-x5SR'),
      tabs: [
        {
          tab: t('plXKLZeIrUR0M6432ADUk'),
          title: t('_wmEtwcwDFqwsPgBngykt'),
          content: t('P3kO7erNECSDydaD2ccxO'),
          icon: '/images/solutions/storage-game/Solutions_Storage_game_Media_graph_Mobile@2x.png',
          iconWidth: '330px',
          iconHeight: '280px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_Media_graph_Mobile@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: t('aXtm569GloIHL9oZvB_Er'),
          title: t('ojyhj24VUb69E__9EGDZC'),
          content: t('6tggdKB2u_DF3V2_9z7UZ'),
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_VR@2x.png',
          iconWidth: '338px',
          iconHeight: '314px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_VR@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: t('phM4efB08OzHKjyloS4GX'),
          title: t('cHTiZdoCqDUguV36E_FnL'),
          content: t('7tJlBBdMSkTmR5ALJyk47'),
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_Browser@2x.png',
          iconWidth: '324px',
          iconHeight: '246px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_Browser@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        },
        {
          tab: t('7w3tGMNLMEHsPTBwADbh0'),
          title: t('z7wJ6DPMKl82nC9mX_njg'),
          content: t('Ak7wdrl0CWjOl8dFn2Yyo'),
          icon: '/images/solutions/storage-game/Solutions_Storage_game_graph_Download@2x.png',
          iconWidth: '288px',
          iconHeight: '282px',
          mIcon:
            '/images/solutions/storage-game/Solutions_Storage_game_graph_Download@2x.png',
          mIconWidth: '20.63rem',
          mIconHeight: '17.5rem'
        }
      ]
    },
    slist1: {
      title1: t('rbr4C7W5WZwbHByYII8hS'),
      title2: t('Sv_0YLF3YgUxUqz_XIoD-'),
      items: [
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_1@3x.png',
          title: t('tI0-aRMh-hmf3-kaL5dCL'),
          content: t('nMNBy7Bh1_a6U2F4SDgXP')
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_2@3x.png',
          title: t('4wmHr4guOFtTAqHsBHOd9'),
          content: t('GHzzq2xNfIYhjwBcfkm_f')
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_3@3x.png',
          title: t('Ewv8V3Te3xMdqW84zBLxi'),
          content: t('oS8i8X6PgBlY6DHf6uVzZ')
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_4@3x.png',
          title: t('Qs_OaLsUq7mCnQYu1Ha5K'),
          content: t('x3r7ZVSgtUdLW28vEqDec')
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_5@3x.png',
          title: t('oHyyxzj2TsYqF8hW35jd7'),
          content: t('oYqLKTE5hrIW6QPnwdpiU')
        },
        {
          icon: '/images/solutions/storage-game/Solutions_Storage_game_card_ic_6@3x.png',
          title: t('6bqG3cqW9P-GEOZLiDooK'),
          content: t('am2IzRTu_VlNWxHqELz2Q')
        }
      ]
    },
    join1: {
      title: t('uuWeXln9J1DWUMvM1zbac'),
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
.SecurityCdn-SuperCharge,
.SecurityCdn-NetworkJoin1 {
  margin-bottom: 6.25rem;
}
.SecurityCdn-CommonNumbers {
  margin-top: 80px;
}
@media screen and (max-width: 768px) {
  .SecurityCdn-CommonNumbers {
    margin-top: 6.25rem;
  }
}
</style>

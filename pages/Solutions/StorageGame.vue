import Accelerate from '../../components/Solutions/Accelerate.vue';
<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.storageGame.header.preTitle')"
    :title="$t('solutions.storageGame.header.title')"
    :content="$t('solutions.storageGame.header.content')"
    :btn="$t('solutions.storageGame.header.btn')"
    href="#"
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
    style="margin-top: 80px"
    :items="$tm('solutions.storageGame.numbers')"
  />

  <SolutionsAccelerate
    :title="$t('solutions.storageGame.accelerate.title')"
    :content="$t('solutions.storageGame.accelerate.content')"
    :list1="$tm('solutions.storageGame.accelerate.list1')"
    :list2="$tm('solutions.storageGame.accelerate.list2')"
  />

  <CommonSuperCharge v-bind="$tm('solutions.storageGame.goFaster')" />

  <SolutionsAd1
    :title="$t('solutions.storageGame.ad1.title')"
    :sub-title="$t('solutions.storageGame.ad1.subTitle')"
    :btn="$t('solutions.storageGame.ad1.btn')"
    href="#"
    pic="/images/solutions/storage-game/Solutions_Storage_game_Media_banner_graph_2@2x.png"
    pic-width="450px"
    pic-height="330px"
    mPic="/mobile-images/solutions/storage-game/Solutions_Video_Media_banner_graph_2@2x.png"
    mPicWidth="19.38rem"
    mPicHeight="16.13rem"
  />

  <CommonList1 v-bind="$tm('solutions.storageGame.list1')" />

  <NetworkJoin1
    v-bind="{
      ...$tm('solutions.storageGame.join1'),
      avatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>

import Accelerate from '../../components/Solutions/Accelerate.vue';
<template>
  <Header />

  <CommonHeader1 :pre-title="$t('solutions.storageGame.header.preTitle')"
    :title="$t('solutions.storageGame.header.title')" :content="$t('solutions.storageGame.header.content')"
    :btn="$t('solutions.storageGame.header.btn')" href="#" :hint="$t('solutions.storageGame.header.hint')"
    pic="/images/solutions/storage-game/Solutions_Storage_game_banner_graph_1@2x.png" pic-width="442px"
    pic-height="348px" :show-foot="false" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('solutions.storageGame.numbers')" />

  <SolutionsAccelerate :title="$t('solutions.storageGame.accelerate.title')"
    :content="$t('solutions.storageGame.accelerate.content')" :list1="$tm('solutions.storageGame.accelerate.list1')"
    :list2="$tm('solutions.storageGame.accelerate.list2')" />

  <CommonSuperCharge :title="$t('solutions.storageGame.goFaster.title')"
    :sub-title="$t('solutions.storageGame.goFaster.subTitle')" :tabs="$tm('solutions.storageGame.goFaster.tabs')" />

  <SolutionsAd1 :title="$t('solutions.storageGame.ad1.title')" :sub-title="$t('solutions.storageGame.ad1.subTitle')"
    :btn="$t('solutions.storageGame.ad1.btn')" href="#"
    pic="/images/solutions/storage-game/Solutions_Storage_game_Media_banner_graph_2@2x.png" pic-width="450px"
    pic-height="330px" />

  <CommonList1 :title1="$t('solutions.storageGame.title1')" :title2="$t('solutions.storageGame.title2')"
    :items="$tm('solutions.storageGame.list1')" />

  <NetworkJoin1 :title="$t('solutions.storageGame.join1.title')"
    :person-name="$t('solutions.storageGame.join1.person.name')"
    :person-title="$t('solutions.storageGame.join1.person.title')"
    :person-content="$t('solutions.storageGame.join1.person.content')"
    person-avatar="/images/solutions/storage-game/Network_Overview_evaluate_character@2x.png" />

  <Footer />
</template>
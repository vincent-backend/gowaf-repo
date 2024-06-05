<template>
  <Header />

  <CommonHeader1 :pre-title="$t('solutions.storageSoftware.header.preTitle')"
    :title="$t('solutions.storageSoftware.header.title')" :content="$t('solutions.storageSoftware.header.content')"
    :btn="$t('solutions.storageSoftware.header.btn')" href="#" :hint="$t('solutions.storageSoftware.header.hint')"
    :show-foot="false" :pic="{
    src: '/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_1@2x.png',
    w: '466px',
    h: '368px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('solutions.storageSoftware.numbers')" />

  <SolutionsAccelerate :title="$t('solutions.storageSoftware.accelerate.title')"
    :content="$t('solutions.storageSoftware.accelerate.content')"
    :up-down="$tm('solutions.storageSoftware.accelerate.upDown')" :btn="$t('solutions.storageSoftware.accelerate.btn')"
    href="#" :list2="$tm('solutions.storageSoftware.accelerate.list2')" />

  <SolutionsAd2 :title="$t('solutions.storageSoftware.ad2.title')"
    :content="$t('solutions.storageSoftware.ad2.content')" :btn="$t('solutions.storageSoftware.ad2.btn')" href="#"
    :list="$tm('solutions.storageSoftware.ad2.list')"
    pic="/images/solutions/storage-software/Solutions_Storage_Software_graph_2@2x.png" pic-width="340px"
    pic-height="280px" />

  <div class="map-container">
    <div class="title">{{ $t('solutions.storageSoftware.map.title') }}</div>
    <div class="sub-title">{{ $t('solutions.storageSoftware.map.subTitle') }}</div>
    <NetworkBanner class="map-container" />
  </div>

  <SolutionsAd1 :title="$t('solutions.storageSoftware.ad1.title')"
    :sub-title="$t('solutions.storageSoftware.ad1.subTitle')" :btn="$t('solutions.storageSoftware.ad1.btn')" href="#"
    pic="/images/solutions/storage-software/Solutions_Storage_Software_banner_graph_2@2x.png" pic-width="312px"
    pic-height="330px" style="margin-top: 0" />

  <CommonList1 :title1="$t('solutions.storageSoftware.title1')" :title2="$t('solutions.storageSoftware.title2')"
    :items="$tm('solutions.storageSoftware.list1')" />

  <SolutionsSupportPlan2 />

  <NetworkJoin1 :title="$t('solutions.storageSoftware.join1.title')"
    :person-name="$t('solutions.storageSoftware.join1.person.name')"
    :person-title="$t('solutions.storageSoftware.join1.person.title')"
    :person-content="$t('solutions.storageSoftware.join1.person.content')"
    person-avatar="/images/solutions/storage-software/Network_Overview_evaluate_character@2x.png" />

  <Footer />
</template>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  >.title {

    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;


  }

  >.sub-title {
    margin: 20px auto 0;

    width: 912px;


    font-size: 16px;
    color: #4E4E4E;

    text-align: center;


  }

  .map-container {
    margin-top: 40px;
  }
}
</style>
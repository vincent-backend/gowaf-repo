<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.storage.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: true
      },
      {
        label: $t('products.storage.breadCrumbs.edgeTier'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.storage.BouuyStorage.header.preTitle')"
    :title="$t('products.storage.BouuyStorage.header.title')"
    :content="$t('products.storage.BouuyStorage.header.content')"
    :btn="$t('products.storage.BouuyStorage.header.btn')"
    :hint="$t('products.storage.SSDStorage.header.hint')"
    href="#"
    :pic="{
      src: '/images/products/storage/BouuyStorage/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/storage/BouuyStorage/stream_transcribe_banner_graph@2x.png',
      mw: '',
      mh: ''
    }"
  />

  <ProductsEasyPowerful
    :title="$t('products.storage.BouuyStorage.EasyPowerful.title')"
    :sub-title="$t('products.storage.BouuyStorage.EasyPowerful.subTitle')"
    :ful-items="$tm('products.storage.BouuyStorage.EasyPowerful.items')"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.storage.Asia.numbers')"
  />
  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />

  <ProductsCalculate1
    :items="$tm('products.stream.overview.Calculate.list')"
    :subs="$tm('pricing.cdn.calculator1.subs')"
  />
  <CommonList1 v-bind="$tm('products.storage.BouuyStorage.list1')" />
  <PricingSaveMoney
    :title="$t('products.storage.BouuyStorage.SaveMoney.title')"
    :sub-title="$t('products.storage.BouuyStorage.SaveMoney.subTitle')"
    :f-items="$tm('products.storage.BouuyStorage.SaveMoney.fitem')"
    :hint="$t('products.storage.BouuyStorage.SaveMoney.hint')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.BouuyStorage.drmCustomer')"
  />

  <Footer />
</template>

<style lang="scss" scoped>

</style>

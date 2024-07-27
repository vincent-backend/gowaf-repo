<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.cdn.safeHop.header.preTitle')"
    :title="$t('products.cdn.safeHop.header.title')"
    :content="$t('products.cdn.safeHop.header.content')"
    :btn="$t('products.cdn.safeHop.header.btn')"
    href="#"
    :hint="$t('products.cdn.safeHop.header.hint')"
    :pic="{
      src: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      w: '390px',
      h: '359px',
      msrc: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      mw: '21.67rem',
      mh: '19.94rem'
    }"
  />

  <ProductsReduceError />

  <CommonSuperCharge v-bind="$tm('products.cdn.safeHop.goFaster')" />

  <NetworkJoin1
    v-bind="{
      ...$tm('products.cdn.safeHop.join1'),
      avatar:
        '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
</script>

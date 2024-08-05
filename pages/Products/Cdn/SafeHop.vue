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

  <CommonSuperCharge v-bind="i18ntext.safeHop" />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.safeHop.join1,
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
const i18ntext = computed<any>(() => {
  return {
    safeHop: {
      header: {
        preTitle: 'Gowaf SafeHop™',
        title: 'Maximize uptime. Reduce origin errors.',
        content:
          'Reduce origin errors and maximize uptime! SafeHop allows you to easily configure timeouts, delays and request retries to your origin to work around any potential network issues.',
        btn: 'Start 14-Day FREE Trial',
        hint: 'No credit card needed. Start in seconds.'
      },
      reduceError: {
        title: 'Reduce origin errors by up to 80%',
        subTitle:
          'Improve reliability with a click of a button by reducing origin error rates by up to 80%. Easily work around software restarts, network hiccups, or hardware issues.',
        picL: {
          title: 'CDN',
          content: 'Request an uncached file from the CDN.'
        },
        picRT: {
          title: 'Origin Server 1',
          content: 'Connection failed'
        },
        picRB: {
          title: 'Origin Server 2',
          content: 'Request automatically retried.'
        },
        hint: 'With SafeHop, a failed request to the origin is automatically sent to the next server or re-sent to the same one after the configured delay.'
      },
      goFaster: {
        title: 'Save Requests. On your Terms.',
        subTitle:
          'SafeHop™ helps you configure timeouts and retry mechanisms for your specific application.',
        tabs: [
          {
            tab: 'Retry Failed Requests',
            title: 'Automatically retry failed requests to maximize uptime',
            content:
              'Stop bad connections from reducing your uptime. Automatically retry requests to single or multiple servers. SmartHop will intelligently learn which server to prioritize in case of errors to maintain excellent performance.',
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img1@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img1@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: 'Configure Response Timeouts',
            title: 'Complete control with custom response timeouts',
            content:
              'Gain full control of the origin connection by configuring how long bunny.net should wait for a response before giving up. Fail faster if needed or wait up to 60 seconds or longer to match the needs of your application.',
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img2@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img2@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: 'Specify Retry Reasons',
            title: 'Complete control with custom response timeouts',
            content:
              'Gain full control of the origin connection by configuring how long bunny.net should wait for a response before giving up. Fail faster if needed or wait up to 60 seconds or longer to match the needs of your application.',
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: 'Delay Retries',
            title: 'Delay requests between failures to maximize success',
            content:
              'Survive software restarts or temporary network glitches with a configurable retry delay. Set up to 10 seconds of delay between retried requests and give your software stack the time to get back online without origin errors.',
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          }
        ]
      },
      join1: {
        title: 'Trusted by over 40.000+ Customers',
        person: {
          name: 'Ken Schadler',
          title: 'Schaken-Mods',
          content:
            '“So far we are loving the service. We can not even think of anything to complain about!”'
        }
      }
    }
  };
});
</script>

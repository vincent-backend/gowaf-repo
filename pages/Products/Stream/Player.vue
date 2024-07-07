<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.player'),
        href: '#',
        current: true
      },
      {
        label: $t('products.stream.breadCrumbs.mediaCage'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.multiDRM'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.transcribeAI'),
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
    :pre-title="$t('products.stream.player.header.preTitle')"
    :title="$t('products.stream.player.header.title')"
    :content="$t('products.stream.player.header.content')"
    :btn="$t('products.stream.player.header.btn')"
    href="#"
    :hint="$t('products.stream.player.header.hint')"
    :pic="{
      src: '/images/products/stream/player/stream_player_banner_graph@2x.png',
      w: '472px',
      h: '322px',

      msrc: '/images/products/stream/player/stream_player_banner_graph@2x.png',
      mw: '29.5rem',
      mh: '20.13rem'
    }"
  />

  <CommonList1 v-bind="$tm('products.stream.player.list1')" />

  <ProductsPlayerFeatures />

  <SolutionsAd2
    :title="$t('products.stream.player.ad2.title')"
    :content="$t('products.stream.player.ad2.content')"
    :btn="$t('products.stream.player.ad2.btn')"
    href="#"
    pic="/images/products/stream/player/cdnfeatures_security_img@2x.png"
    pic-width="400px"
    pic-height="400px"
    m-pic="/images/products/stream/player/cdnfeatures_security_img@2x.png"
    m-pic-height="25rem"
    m-pic-width="25rem"
    v-bind="
      isMobile
        ? {
            style: {
              marginTop: '6.25rem'
            },
            reverse: true
          }
        : {
            style: {
              marginTop: '163px'
            },
            reverse: true
          }
    "
  />

  <div class="player2-container">
    <div class="title">{{ $t('products.stream.player.player2.title') }}</div>
    <div class="sub-title">
      {{ $t('products.stream.player.player2.subTitle') }}
    </div>
    <div class="pic"></div>
  </div>

  <LgOnly>
    <ProductsDRMCustomers
      :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
    />
  </LgOnly>
  <XsOnly>
    <NetworkJoin1
      v-bind="{
        ...$tm('products.stream.multiDRM.drmCustomernetword'),
        avatar:
          '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
        mAvatar:
          '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png'
      }"
    />
  </XsOnly>
  <Footer />
</template>

<style lang="less" scoped>
.player2-container {
  margin-top: 120px;
  margin-bottom: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin-top: 18px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  > .pic {
    margin: 40px auto 0;

    width: 782px;
    height: 440px;
    background: url(/public/images/products/stream/player/player-1@2x.png);
  }
}
@media (max-width: 767px) {
  .player2-container {
    padding: 0 1.88rem;
    box-sizing: border-box;
    margin-top: 6.25rem;
    margin-bottom: 10rem;

    > .title {
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
    }

    > .sub-title {
      margin-top: 1rem;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
    }

    > .pic {
      margin: 2.5rem auto 0;
      width: 100%;
      height: 24.25rem;
      background: url(/public/images/products/stream/player/player-1@2x.png);
    }
  }
}
</style>

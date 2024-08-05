<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('home.AffiliateProgram.preTitle')"
    :title="$t('home.AffiliateProgram.title')"
    :content="$t('home.AffiliateProgram.content')"
    :show-foot="false"
    :btn="$t('home.AffiliateProgram.btn')"
    :hint="$t('home.AffiliateProgram.hint')"
    href="#"
    :pic="{
      src: '/images/home/affiliate_program_banner_graph@2x.png',
      w: '559px',
      h: '453px',

      msrc: '/images/home/affiliate_program_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '29.13rem'
    }"
  />
  <ProductsEasyPowerful :show-next="false" v-bind="i18ntext.neverHit" />
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <CommonList1 v-bind="i18ntext.list1" />
  <div class="btn-row page-container">
    <div class="btn">
      {{ $t('home.AffiliateProgram.listBtn') }}
    </div>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <div class="page-container Marketing">
    <div class="mk-title">{{ $t('home.AffiliateProgram.mktitle') }}</div>
    <div class="mk-subtitle">{{ $t('home.AffiliateProgram.mksubtitle') }}</div>
    <div class="mkt-img" v-if="!isMobile">
      <img
        class="mkt-img"
        src="/public/images/home/编组_178@2x.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
  <XsOnly>
    <Footer :showbot-foot="false" />
    <SolutionsAd1
      :title="$t('home.AffiliateProgram.fotad1.title')"
      :sub-title="$t('home.AffiliateProgram.fotad1.subTitle')"
      :btn="$t('home.AffiliateProgram.fotad1.btn')"
      href="#"
      pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
      pic-width="300px"
      pic-height="300px"
      m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
      m-pic-width="18.75rem"
      m-pic-height="18.72rem"
    />
    <VSpace h="100px" mh="3.75rem" bg="#fff"></VSpace>
    <SolutionsAd1
      :title="$t('home.AffiliateProgram.fotad2.title')"
      :sub-title="$t('home.AffiliateProgram.fotad2.subTitle')"
      :btn="$t('products.cdn.overview.ad1.btn')"
      href="#"
      pic="/images/home/video_banner_graph@2x.png"
      pic-width="300px"
      pic-height="300px"
      m-pic="/images/home/video_banner_graph@2x.png"
      m-pic-width="18.75rem"
      m-pic-height="18.72rem"
    />
    <VSpace h="100px" mh="3.75rem" bg="#fff"></VSpace>
  </XsOnly>
  <LgOnly>
    <VSpace h="40px" mh="6.25rem"></VSpace>
    <div class="btn-row page-container">
      <div class="btn">
        {{ $t('home.AffiliateProgram.listBtn') }}
      </div>
    </div>
  </LgOnly>
  <VSpace h="100px" mh="3.25rem"></VSpace>
  <div class="page-container">
    <HomeCollapse
      :title="$t('home.AffiliateProgram.Collapse.title')"
      :subtitle="$t('home.AffiliateProgram.Collapse.subtitle')"
      :list="i18ntext.list"
    ></HomeCollapse>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <Footer />
</template>
<script setup lang="ts">
import VSpace from './../components/VSpace.vue';
definePageMeta({
  title: 'AffiliateProgram'
});
const formLabelAlign = reactive({
  name: '',
  Email: '',
  Password: '',
  Company: '',
  Website: '',
  Phone: '',
  link: '',
  Message: '',
  checked: false
});
const activt = ref(0);
const list = ref([
  'Content Delivery',
  'Content Delivery',
  'Content Delivery',
  'Online Storage',
  'Software Distribution',
  'DoS Protection'
]);

const i18ntext = computed<any>(() => {
  return {
    neverHit: {
      title: 'Register. Share. Earn.',
      subTitle: 'Start earning money in 3 simple steps.',
      fulItems: [
        {
          icon: '/images/home/affiliate_1_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Register',
          content: 'Create a paid account at Gowaf.net.',
          contentAlign: 'center'
        },
        {
          icon: '/images/home/affiliate_1_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Share you link',
          content: 'Share your unique link with the world.',
          contentAlign: 'center'
        },
        {
          icon: '/images/home/affiliate_1_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Start making money',
          content: 'Earn $20 for each paid signup.',
          contentAlign: 'center'
        }
      ]
    },
    list1: {
      title1: 'How does it work?',
      title2:
        'Getting started with the Gowaf Affiliate program is free and easy.',
      items: [
        {
          icon: '/images/home/affiliate_2_ic_1@2x.png',
          title: 'Pay Only For What You Use',
          content:
            'Only pay for the number of minutes you transcribe with no minimum recurring costs.'
        },
        {
          icon: '/images/home/affiliate_2_ic_2@2x.png',
          title: '$1 Monthly Minimum',
          content:
            'Get started for free with a 14-day free trial, and continue for as little as $1 per month.'
        },
        {
          icon: '/images/home/affiliate_2_ic_3@2x.png',
          title: 'All Features Included',
          content:
            'Use the full Transcribe AI feature set with no extra charges or hidden costs.'
        }
      ]
    },
    list: [
      {
        title: 'How does the Bunny Affiliate program work?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      },
      {
        title: 'Who is eligible for the Bunny Affiliate program?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program..'
      },
      {
        title: 'How do I join the affiliate program?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      },
      {
        title: 'How much do I earn per referral?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      },
      {
        title: 'Is there a maximum amount for commission?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      },
      {
        title: 'When will I get my payout?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      },
      {
        title: 'Can I create my own marketing materials?',
        subtitle:
          'Anyone who has a paid bunny.net account can join the affiliate program.'
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.btn-row {
  width: 100%;
  display: flex;
  justify-content: center;
  .btn {
    width: 240px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid rgba(70, 207, 58, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.Marketing {
  .mk-title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .mk-subtitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin: 20px 0 40px 0;
  }
  .mkt-img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .btn-row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    .btn {
      width: 22.88rem;
      height: 4.63rem;
      background: #ffffff;
      border-radius: 2.34rem;
      border: 0.13rem solid rgba(70, 207, 58, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 1.63rem;
      color: #000000;
      line-height: 2.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .Marketing {
    .mk-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .mk-subtitle {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin: 1rem 0 2rem 0;
    }
    .mkt-img {
      width: 100%;
    }
  }
}
</style>

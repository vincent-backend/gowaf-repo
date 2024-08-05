<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.Stream.TranscribeAI.header.preTitle')"
    :title="$t('products.Stream.TranscribeAI.header.title')"
    :content="$t('products.Stream.TranscribeAI.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      w: '496px',
      h: '369px',
      msrc: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />
  <ProductsEasyPowerful
    :title="$t('products.Stream.TranscribeAI.EasyPowerful.title')"
    :sub-title="$t('products.Stream.TranscribeAI.EasyPowerful.subTitle')"
    :ful-items="i18ntext.items"
  />
  <LgOnly>
    <ProductsNeverHit :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <SolutionsAd1
    :title="$t('products.Stream.TranscribeAI.ad1.title')"
    :sub-title="$t('products.Stream.TranscribeAI.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.Stream.TranscribeAI.list1.title')"
    :title2="$t('products.Stream.TranscribeAI.list1.subTitle')"
    :items="i18ntext.items1"
  />
  <ProductsStorageSupportPlan
    title=""
    sub-title=""
    icon="/images/products/stream/TranscribeAI/Pricing_CDN_card_graph@2x.png"
    :btn-text="$t('products.Stream.TranscribeAI.SupportPlan.btnText')"
    :btnsubText="$t('products.Stream.TranscribeAI.SupportPlan.btnsubText')"
  >
    <div class="Planlist">
      <div
        class="row-item"
        v-for="item in i18ntext.list"
      >
        <div class="left-title">
          <span class="hit">{{ item.hin }}</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="included">
        <div class="top-title">
          {{ $t('products.Stream.TranscribeAI.SupportPlan.included.title') }}
        </div>
        <div class="Checklist">
          <div
            class="CheckTheBox"
            v-for="(item, index) in i18ntext.list1"
            :key="index"
          >
            <div class="icon"></div>
            <div class="txt">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProductsStorageSupportPlan>
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
  <ProductsPlayerVideo />
  <ProductsDRMCustomers
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/products/stream/TranscribeAI/media_simple_ic_1@2x.png',
        title: 'Upload',
        content:
          'Upload your media files using an HTTP API or web file manager.'
      },
      {
        icon: '/images/products/stream/TranscribeAI/transcribe_1_ic_2@2x.png',
        title: 'Transcribe',
        content:
          'Transcribe Al automatically transcribes and captions your videos during transcoding.'
      },
      {
        icon: '/images/products/stream/TranscribeAI/transcribe_1_ic_3@2x.png',
        title: 'Deliver and Build',
        content:
          'Deliver your captioned videos to new audiences, or access the raw transcriptions through the ApI'
      }
    ],
    neverHit: {
      title: 'The next era of video intelligence.',
      subTitle:
        'Provide valuable business insights, or enhance your user experience.',
      items: [
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Create Subtitles',
          content:
            'Reach a broader audience by removing the language barriers with automated translations to up to 57 languages available in just a few clicks.'
        },
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Generate Meeting Notes',
          content:
            'Accurately transcribe meetinas and generate summaries and titles to quickly categorize and capture the meetings that help teams succeed.'
        },
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Get Powerful Video Insights',
          content:
            'Extract insights from meetings, customer conversations, or customer engagement and enrich your workflow experience.'
        }
      ]
    },
    items1: [
      {
        icon: '/images/products/stream/TranscribeAI/Pricing_Overview_card_ic_4@2x.png',
        title: 'Pay Only For What You Use',
        content:
          'Only pay for the number of minutes you transcribe with no minimum recurring costs.'
      },
      {
        icon: '/images/products/stream/TranscribeAI/Pricing_Overview_card_ic_1@2x.png',
        title: '$1 Monthly Minimum',
        content:
          'Get started for free with a 14-day free trial, and continue for as little as $1 per month.'
      },
      {
        icon: '/images/products/stream/TranscribeAI/Beautiful_Video_Player@2x.png',
        title: 'All Features Included',
        content:
          'Use the full Transcribe AI feature set with no extra charges or hidden costs.'
      }
    ],
    list: [
      {
        title: '/per minute of video*',
        hin: '$0.1',
        content:
          'Eliminate expensive transcribing fees and start utilizing Bunny AI with simple and affordable pricing. Excellent solution that scales with project size.'
      }
    ],
    list1: [
      'Transcriptions in 56 languages',
      'All Features',
      'Full API Support'
    ],
    doNotLeave: {
      title: 'Hop faster with AI that just works.',
      subTitle:
        'Reduce the complexity of video processing and managing multiple APIs with an end-to-end system that just works.',
      tabs: [
        {
          tab: 'Simplify Workflow',
          title: 'Simplify your video workflow',
          content:
            'Replace multiple complicated APIs with a simple, end-to-end solution. Transcribe AI integrates directly into your existing Bunny Stream workflow to reduce complexity and help you hop aster. Just upload your videos, and Bunny Stream will automatically encode, tag, and transcribe any speech into organized and timestamped captions available in just a few minutes.',
          icon: '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          iconWidth: '378px',
          iconHeight: '389px',
          mIcon:
            '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          mIconWidth: '23.63rem',
          mIconHeight: '24.31rem'
        },
        {
          tab: 'Reduce Costs',
          title: 'Amazing performance and unparalleled reliability',
          content:
            'Deliver unparalleled performance and reliability to your users by powering your video with a state-of-the-art CDN system. With a network backbone of 150 Tbps+ and 123+ global PoPs, Bunny Streams ensures that your customers get an excellent experience for every request. Every time.',
          icon: '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          iconWidth: '378px',
          iconHeight: '389px',
          mIcon:
            '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          mIconWidth: '23.63rem',
          mIconHeight: '24.31rem'
        }
      ]
    },
    drmCustomer: {
      title: 'Trusted by 40.000+ global customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 600+ reviews',
      faceImg: {
        img: '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '11.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'Matthias Mauch',
        subTitle: 'Younity',
        content:
          '"We had a flow! summit without a single complaint. I think, overall, bunny.net is just a very complete solution. Handling videos is so easy with Bunny - you don\'t need a lot of training.It\'s very streamlined."'
      },
      items: [
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_1_2x.png'
        },
        {
          num: 4.4,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_2_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_3_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_4_2x.png'
        }
      ]
    }
  };
});
</script>
<style lang="scss" scoped>
.Planlist {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .row-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    gap: 20px;
    padding-bottom: 20px;
    .left-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      .hit {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        color: #000000;
        line-height: 70px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #ff905d 0%, #ffb13e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .included {
    display: flex;
    flex-direction: column;
    .top-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .Checklist {
      width: 440px;
      display: flex;
      flex-wrap: wrap;
      gap: 22px 47px;
      margin-top: 20px;

      .CheckTheBox {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            display: block;
            content: '';
            width: 14px;
            height: 14px;
            background: url('/images/products/stream/TranscribeAI/home_Text_list_ic_tick@2x.png');
            background-size: 100% 100%;
          }
        }
        .txt {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 16px;
          color: #000000;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>

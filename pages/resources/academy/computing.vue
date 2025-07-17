<template>
    <Header />
    <BreadCrumbs
      :title="$t('resources.breadCrumbs.Academy')"
      :items="AcademyMenu($t, $route.path)"
    />
    <CommonHeader1
      :title="$t('resources.academy.computing.header.title')"
      :content="$t('resources.academy.computing.header.content')"
      href="#"
      hint=""
      :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
      :containerStyle="{ height: '398px' }"
      :showFoot="false"
      :pic="{
        src: '/images/resources/academy/Computing_banner_img@2x.png',
        w: '388px',
        h: '228px',
  
        msrc: '/images/resources/academy/Computing_banner_img@2x.png',
        mw: '23.81rem',
        mh: '14.25rem'
      }"
    />
    <div class="bottom-header">
      <div class="page-container">
        <div
          class="option"
          :class="{
            bold: index == 0
          }"
          v-for="(item, index) in i18ntext.option"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="textContent">
      <div class="page-container">
        <div class="left">
          <div
            class="articleBlock"
            v-for="(item, index) in i18ntext.articleList"
            :key="index"
          >
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content" v-html="item.content"></div>
          </div>
          <div class="helpful">
            <div class="putQuestionsTo">{{ $t('resources.helpful.title') }}</div>
            <div class="vs-icon">
              <div class="yes"></div>
              <div class="no"></div>
            </div>
            <div class="tips">
              <span class="bold">40</span> {{ $t('resources.blog.paging2') }}
              <span class="bold">47</span>{{ $t('resources.helpful.helpful') }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-title">
            {{ $t('resources.WhatIsCDN.rightTitle') }}
          </div>
          <div
            class="advertisement"
            v-for="(item, index) in i18ntext.advertisement"
            :key="index"
          >
            <div class="ad-title">
              {{ item.title }}
            </div>
            <div class="ad-content">{{ item.content }}</div>
          </div>
          <div class="advertisement-bot">
            <div class="bot-t">
              {{ $t('resources.WhatIsCDN.bot.title') }}
            </div>
            <div class="bot-img"></div>
            <div class="bot-btn">
              {{ $t('resources.WhatIsCDN.bot.btntxt') }}
              <img
                class="img"
                src="/images/resources/academy/common_price_right_wihte_ic@2x.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :isShowBanner="false" />
  </template>
  
  <script setup lang="ts">
  const { t } = useI18n();
  definePageMeta({
    title: 'Academy'
  });
  const i18ntext = computed(() => {
    return {
      option: [
        t('sWPvZEdNFV3ZYfErN08sm'),
        t('_vQzUEUd6w6HeYGvSA9CT'),
        t('rnEaAeXgQ5gOATenjtA9_'),
        t('uI23fzwkdphcD-yrCLZXt')
      ],
      articleList: [
        {
          title: t('qmm5oOyXiNaMM3otnAIwq'),
          content: t('XIeatUvnXT0QKUb87ExRe')
        },
        {
          title: t('fgYPbHczHgnELGGyRuZ0m'),
          content: t('6W0yhROf2eKyzQOEEU9nd')
        },
        {
          title: t('Qfw-l4haXgBFnkjlIlw_W'),
          content: t('ul-vX2U3pW1I3djCaFhA6')
        },
        {
          title: t('Ul0zV1kMKP_IMVQlF7PFp'),
          content: t('uLoVWjEniaOPPodHptsaR')
        },
        {
          title: t('AiPKnYD_Z7fcefenkHDR3'),
          content: t('jXJuj20u5BmCjDDiQ4qPz')
        }
      ],
      advertisement: [
        {
          title: t('uWpBe8IgFXm2cVaWq2HSk'),
          content: t('cgsmIBsHutY51x2SymkXr')
        },
        {
          title: 'PoP',
          content: t('i9V_kONZoRE-BTWOnnPOV')
        },
        {
          title: 'CDN',
          content: t('g35Ihox3r2w9rN0CaqgD4')
        }
      ]
    };
  });
  </script>
  <style lang="scss" scoped>
  .bottom-header {
    width: 100%;
    height: 80px;
    background: #e6edfc;
    .page-container {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 32px;
      .option {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
        text-align: left;
        font-style: normal;
        text-transform: none;
        &.bold {
          font-weight: 600;
        }
      }
    }
  }
  .textContent {
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    background: #fafafa;
    .page-container {
      display: flex;
      gap: 80px;
      .left {
        width: 700px;
        display: flex;
        flex-direction: column;
        gap: 100px;
        .articleBlock {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .title {
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 50px;
            color: #000000;
            line-height: 70px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            :deep(img) {
              width: 100%;
            }
            :deep(b) {
              font-weight: 700;
            }
          }
        }
        .helpful {
          width: 700px;
          height: 196px;
          background: #e6edfc;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .putQuestionsTo {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .vs-icon {
            display: flex;
            gap: 85px;
            .yes,
            .no {
              width: 100px;
              height: 100px;
              background: url('/images//resources/academy/Thumbs_up@2x.png');
              background-size: 100% 100%;
            }
            .no {
              background: url('/images//resources/academy/Thumbs_down@2x.png');
            }
          }
          .tips {
            display: flex;
            gap: 3px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 16px;
            color: #000000;
            line-height: 24px;
            text-align: center;
            font-style: normal;
            text-transform: none;
            .bold {
              font-weight: 700;
            }
          }
        }
      }
      .right {
        width: 420px;
        flex-direction: column;
        display: flex;
        gap: 20px;
        .right-title {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 36px;
          color: #000000;
          line-height: 70px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .advertisement {
          display: flex;
          flex-direction: column;
          background: #e6edfc;
          border-radius: 20px;
          padding: 30px 20px;
          .ad-title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .ad-content {
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
        .advertisement-bot {
          margin-top: 40px;
          width: 420px;
          height: 432px;
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
          box-shadow: 0px 0px 12px 0px rgba(126, 135, 154, 0.25);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .bot-t {
            width: 220px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .bot-img {
            width: 220px;
            height: 266px;
            background: url('/images//resources/academy/service_women_img@2x.png');
            background-size: 100% 100%;
          }
          .bot-btn {
            width: 372px;
            height: 50px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 20px;
            color: #ffffff;
            .img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .bottom-header {
      width: 100%;
      height: 7.5rem;
      background: #e6edfc;
      .page-container {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 2.5rem;
        overflow-y: hidden;
        overflow-x: auto;
        .option {
          white-space: nowrap;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 2rem;
          color: #000000;
          line-height: 2.81rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          &.bold {
            font-weight: 600;
          }
        }
      }
    }
    .textContent {
      margin-top: 6.25rem;
      margin-bottom: 6.25rem;
      width: 100%;
      background: #fafafa;
      .page-container {
        display: flex;
        flex-direction: column;
        gap: 6.25rem;
        .left {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6.25rem;
          .articleBlock {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .title {
              font-family: Mont, Mont;
              font-weight: bold;
              font-size: 3.13rem;
              color: #000000;
              line-height: 4.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            .content {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.63rem;
              color: #4e4e4e;
              line-height: 2.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              :deep(img) {
                width: 100%;
              }
              :deep(b) {
                font-weight: 700;
              }
            }
          }
          .helpful {
            width: 43.75rem;
            height: 16.69rem;
            background: #e6edfc;
            border-radius: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .putQuestionsTo {
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              font-size: 2rem;
              color: #000000;
              line-height: 2.81rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            .vs-icon {
              display: flex;
              margin: 1.25rem 0;
              gap: 5.3rem;
              .yes,
              .no {
                width: 6.25rem;
                height: 6.25rem;
                background: url('/images//resources/academy/Thumbs_up@2x.png');
                background-size: 100% 100%;
              }
              .no {
                background: url('/images//resources/academy/Thumbs_down@2x.png');
              }
            }
            .tips {
              display: flex;
              gap: 0.88rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              font-size: 1.63rem;
              color: #000000;
              line-height: 2.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              .bold {
                font-weight: 700;
              }
            }
          }
        }
        .right {
          width: 100%;
          flex-direction: column;
          display: flex;
          gap: 1.25rem;
          .right-title {
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 3.13rem;
            color: #000000;
            line-height: 4.38rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .advertisement {
            display: flex;
            flex-direction: column;
            background: #e6edfc;
            border-radius: 1.25rem;
            padding: 1.5rem 1.25rem;
            .ad-title {
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              font-size: 1.63rem;
              color: #000000;
              line-height: 2.31rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            .ad-content {
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 1.63rem;
              color: #4e4e4e;
              line-height: 2.38rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
          .advertisement-bot {
            margin: 0 auto;
            margin-top: 6.25rem;
            width: 26.25rem;
            height: 27rem;
            background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
            box-shadow: 0rem 0rem 0.75rem 0rem rgba(126, 135, 154, 0.25);
            border-radius: 0.88rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .bot-t {
              width: 17.88rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 600;
              font-size: 1.63rem;
              color: #000000;
              line-height: 2.31rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            .bot-img {
              width: 13.75rem;
              height: 16.63rem;
            }
            .bot-btn {
              width: 23.25rem;
              height: 3.13rem;
              background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
              border-radius: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.5rem;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 1.63rem;
              color: #ffffff;
              .img {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
  </style>
  
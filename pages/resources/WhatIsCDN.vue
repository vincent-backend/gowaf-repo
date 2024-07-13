<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.Academy')"
    :items="[
      {
        label: $t('resources.breadCrumbs.CDN'),
        href: '',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.DNS'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Networking'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Security'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.HTTP'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Streaming'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Security'),
        href: '',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.Computing'),
        href: '',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :title="$t('resources.WhatIsCDN.header.title')"
    :content="$t('resources.WhatIsCDN.header.content')"
    href="#"
    hint=""
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/resources/WhatIsCDN/cdn_overview_banner_graph@2x.png',
      w: '381px',
      h: '371px',

      msrc: '/images/resources/WhatIsCDN/cdn_overview_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '21.63rem'
    }"
  />
  <div class="bottom-header">
    <div class="page-container">
      <div
        class="option"
        :class="{
          bold: index == 0
        }"
        v-for="(item, index) in $tm('resources.WhatIsCDN.option')"
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
          v-for="(item, index) in $tm('resources.WhatIsCDN.articleList')"
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
            <span class="bold">40</span> out of <span class="bold">47</span
            >{{ $t('resources.helpful.helpful') }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-title">
          {{ $t('resources.WhatIsCDN.rightTitle') }}
        </div>
        <div
          class="advertisement"
          v-for="(item, index) in $tm('resources.WhatIsCDN.advertisement')"
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
              src="/images/resources/WhatIsCDN/common_price_right_wihte_ic@2x.png"
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

<script setup lang="ts"></script>
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
          margin: 20px 0;
          gap: 85px;
          .yes,
          .no {
            width: 97px;
            height: 64px;
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
</style>

<template>
  <div class="left-list">
    <div class="headlines">
      {{ $t('home.forgot.head') }}
      <span class="subtitle">
        {{ $t('home.forgot.subhead') }}
      </span>
    </div>
    <div class="sub-headlines">
      {{ $t('home.forgot.subheadlines') }}
    </div>
    <div class="ForgotList">
      <div
        class="home-item"
        v-for="(item, index) in i18ntext.list"
        :key="index"
      >
        <div class="icon"></div>
        {{ item }}
      </div>
    </div>
    <div class="card-box">
      <div class="card" v-for="(item, index) in i18ntext.card" :key="index">
        <div class="headPortrait-line">
          <img class="headPortrait" :src="item.img" />
          <div class="name">{{ item.name }}</div>
        </div>
        <div class="describe">{{ item.describe }}</div>
        <div class="describe-content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    card: [
      {
        img: '/images/home/polyfill_Sign Up_avatar_1@2x.png',
        name: 'Ronei de Sousa Almeida',
        describe: 'Great CDN Service',
        content:
          "I did the test, I liked it a lot and I'm using it. It has easy configuration, great features and affordable price. Very good!"
      },
      {
        img: '/images/home/polyfill_Sign Up_avatar_2@2x.png',
        name: 'Jean Didier',
        describe: 'Such an easy Cloudfront alternative',
        content:
          'Such a great, cost effective, complete and easy alternative for AWS Cloudfront. The DRM feature is such a huge service A'
      }
    ],
    list: [
      '120 global PoPs for sub 24ms worldwide latency.',
      'Never go down again with 80 Tbps+ network backbone.',
      'True around-the-clock support 24/7/365 inhouse technical support.'
    ]
  };
});
</script>
<style lang="scss" scoped>
.left-list {
  width: 530px;
  display: flex;
  flex-direction: column;
  .headlines {
    width: 477px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    .subtitle {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .sub-headlines {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 10px;
  }
  .ForgotList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px 0 68px 0;
    .home-item {
      display: flex;
      width: 530px;
      box-sizing: border-box;
      padding: 18px 16px;
      background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
      border-radius: 14px;
      .icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
        border-radius: 50%;
        margin-right: 10px;

        &::before {
          content: '';
          width: 14px;
          height: 14px;
          background: url(/public/images/network/ddos/home_Text_list_ic_tick@2x.png);
          background-size: cover;
        }
      }
    }
  }
  .card-box {
    display: flex;
    gap: 10px;
    .card {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 260px;
      height: 263px;
      border-radius: 14px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #e6e6e6;
      .headPortrait-line {
        display: flex;
        gap: 10px;
        align-items: center;
        .headPortrait {
          width: 50px;
          height: 50px;
        }
        .name {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 16px;
          color: #000000;
          line-height: 22px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
      .describe {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .describe-content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>

<script lang="ts" setup>
const props = defineProps({
  preTitle: String,
  title: String,
  content: String,
  btn: String,
  href: String,
  hint: String,
  pic: String,
  picWidth: String,
  picHeight: String,
  showFoot: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <header class="home-banner-container" :class="{
    'hide-foot': !props.showFoot,
  }">
    <div class="page-container home-banner">
      <main>
        <div class="left">
          <div class="pre-title" v-if="props.preTitle">{{ props.preTitle }}</div>
          <h2 class="title" v-if="props.title">{{ props.title }}</h2>
          <div class="content" v-if="props.content">{{ props.content }}</div>
          <a :href="props.href" class="trail-btn" style="margin-top: 40px;" v-if="props.btn">{{ props.btn }}</a>
          <div class="hint" v-if="props.hint">{{ props.hint }}</div>
        </div>
        <div class="right">
          <div class="pic" v-if="props.pic" :style="{
    backgroundImage: `url(${props.pic})`,
    width: props.picWidth,
    height: props.picHeight,
  }"></div>
        </div>
      </main>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="title">
          <span>{{ $t('home.header.bottom.title1') }}</span>
          <span class="num">{{ $t('home.header.bottom.title2') }}</span>
          <span>{{ $t('home.header.bottom.title3') }}</span>
        </div>
        <div class="sub-title">
          {{ $t('home.header.bottom.subTitle') }}
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{ $t('home.header.bottom.weAreRated') }}
        </div>
        <div class="rate">
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
        </div>
        <div class="sub-title">
          {{ $t('home.header.bottom.weAreRated2') }}
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
.home-banner-container {
  height: 800px;
  max-width: 1920px;
  margin: 0 auto;
  background: url(/public/images/home/home_banner_bg.png);
  background-size: 1920px 800px;
  background-position: center;
  position: relative;

  .home-banner {
    display: flex;

    main {
      display: flex;
      justify-content: space-between;

      .left {
        margin-top: 180px;

        .pre-title {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 30px;
          color: #000000;
          line-height: 40px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        .title {
          width: 728px;
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
          margin-top: 12px;

          width: 677px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4E4E4E;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        .hint {
          margin-top: 10px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 12px;
          color: #4E4E4E;
          opacity: .5;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }

      .right {
        margin-top: 140px;

        .pic {}
      }
    }
  }

  .bottom {
    width: 1232px;
    height: 132px;
    background: url(/public/images/home/home_banner_bot_bg.png);
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    margin-left: -616px;
    bottom: 0;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 54px;

      .title {
        display: flex;
        align-items: center;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
        line-height: 34px;

        .num {
          margin: 0 10px;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 30px;
          color: #000000;
          line-height: 40px;
          background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 66px;

      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .rate {
        margin-top: 14px;
        display: flex;
        gap: 8px;

        .rate-item {
          width: 28px;
          height: 28px;
          background: url(/public/images/home/home_banner_ic_star.png);

        }
      }

      .sub-title {
        margin-top: 10px;

        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }

  &.hide-foot {
    height: 650px;

    .bottom {
      display: none;
    }
  }
}
</style>
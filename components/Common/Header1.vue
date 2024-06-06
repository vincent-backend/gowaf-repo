<script lang="ts" setup>
withDefaults(defineProps<{
  preTitle?: string;
  title?: string;
  content?: string;
  btn?: string;
  href?: string;
  hint?: string;
  pic: {
    src: string;
    w: string;
    h: string;

    msrc: string;
    mw: string;
    mh: string;
  };
  showFoot?: boolean;
}>(), {
  showFoot: true,
});
</script>

<template>
  <header class="home-banner-container" :class="{
    'hide-foot': !showFoot,
  }">
    <div class="page-container home-banner">
      <div class="left">
        <div class="pre-title" v-if="preTitle">{{ preTitle }}</div>
        <h2 class="title" v-if="title">{{ title }}</h2>
        <div class="content" v-if="content">{{ content }}</div>
        <a :href="href" class="trail-btn" v-if="btn">{{ btn }}</a>
        <div class="hint" v-if="hint">{{ hint }}</div>
      </div>
      <div class="right">
        <div class="pic" v-if="pic" :style="{
    backgroundImage: `url(${obeyDevice(pic.src, pic.msrc).value})`,
    width: obeyDevice(pic.w, pic.mw).value,
    height: obeyDevice(pic.h, pic.mh).value,
  }"></div>
      </div>
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
  background: url(/public/images/home/home_banner_bg@2x.png);
  background-size: 1920px 800px;
  background-position: center;
  position: relative;

  .home-banner {
    display: flex;
    justify-content: space-between;

    >.left {
      margin-top: 180px;

      .pre-title {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 30px;
        line-height: 40px;
      }

      .title {
        width: 728px;
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        line-height: 70px;
      }

      .content {
        margin-top: 12px;

        width: 677px;
        color: #4E4E4E;
      }

      .trail-btn {
        margin-top: 40px;
      }

      .hint {
        margin-top: 10px;

        font-size: 12px;
        color: #4E4E4E;
        opacity: .5;
      }
    }

    >.right {
      margin-top: 140px;
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
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;

        .num {
          margin: 0 10px;
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 30px;
          line-height: 40px;
          background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .sub-title {
        color: #4E4E4E;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 66px;

      .title {
        font-weight: 500;
        font-size: 16px;
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
        color: #4E4E4E;
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

// For mobile devices
@media (max-width: 767px) {
  .home-banner-container {
    width: 100%;
    max-width: none;
    height: auto;
    background: url(/public/mobile-images/home/home_banner_bg@2x.png);

    .home-banner {
      flex-direction: column;
      box-sizing: border-box;
      padding-top: 3.75rem;

      >.left {
        margin-top: 0;

        .pre-title {
          font-size: 2.5rem;
          line-height: 3.31rem;
        }

        .title {
          margin-top: 0.63rem;

          width: 34.75rem;
          font-size: 3.5rem;
          line-height: 5rem;
        }

        .content {
          margin-top: 1.5rem;

          width: 39.5rem;
        }

        .trail-btn {
          margin-top: 3.13rem;
        }

        .hint {
          margin-top: 1.87rem;
          font-size: 1.38rem;
        }
      }

      >.right {
        margin-top: 5rem;

        display: flex;
        justify-content: center;
      }
    }

    .bottom {
      margin: 5rem auto 0;

      width: 43.13rem;
      height: 26.88rem;
      background: rgba(255, 255, 255, 0.7);
      box-shadow: 0rem -0.12rem 0rem 0rem #FFFFFF;
      border-radius: 1.5rem 1.5rem 0rem 0rem;
      backdrop-filter: blur(5px);
      position: static;
      flex-direction: column;
      box-sizing: border-box;
      padding: 1.94rem 3.13rem 0;

      .left {
        padding: 0;

        .title {
          display: block;
          font-size: 2.25rem;
          font-weight: 500;
          line-height: 1rem;

          span {
            line-height: 1rem;
          }

          .num {
            font-size: 2.25rem;

            margin: 0.5rem
          }
        }

        .sub-title {
          margin-top: 2rem;
          font-size: 1.5rem;
        }
      }

      .right {
        margin-top: 0rem;

        padding: 0;

        .title {
          font-size: 1.63rem;
        }

        .rate {
          margin-top: 0.5rem;

          .rate-item {
            width: 2.63rem;
            height: 2.63rem;
          }
        }

        .sub-title {
          margin-top: 0.3rem;
        }
      }
    }

    &.hide-foot {
      height: 60rem;

      .bottom {
        display: none;
      }
    }
  }
}
</style>
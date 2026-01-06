<script lang="ts" setup>
import gsap from 'gsap';
withDefaults(
  defineProps<{
    preTitle?: string;
    logo?: string;
    logoWidth?: string;
    logoHeight?: string;
    title?: string;
    content?: string;
    btn?: string;
    href?: string;
    hint?: string;
    page?: string;
    btn2BorderColor?: string;
    inputPlaceholder?: string;
    isHidenLinkHit?: boolean;
    btn2?: string;
    pic: {
      src: string;
      w: string;
      h: string;
      msrc: string;
      mw: string;
      mh: string;
    };
    showFoot?: boolean;
  }>(),
  {
    showFoot: true
  }
);

const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".home-banner",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
      )
    });
});
onUnmounted(() => {
  ctx.value.revert();
});

</script>

<template>
  <header
    class="home-banner-container"
    :class="{
      'hide-foot': !showFoot
    }"
  >
    <div class="page-container home-banner">
      <div class="left">
        <div class="pre-title" v-if="preTitle">{{ preTitle }}</div>
        <div class="pre-logo" v-if="logo">
          <img
            :src="logo"
            alt=""
            :style="
              !isMobile() && logoWidth
                ? { width: logoWidth, height: logoHeight }
                : ''
            "
          />
        </div>

        <h2 class="title" v-if="title">{{ title }}</h2>
        <div class="content" v-if="content">{{ content }}</div>
        <div class="header1-input-container" v-if="inputPlaceholder">
          <FormInput name="email" :placeholder="inputPlaceholder" />
          <NuxtLinkLocale
            :to="href"
            class="trail-btn"
            v-if="btn"
            style="margin-top: 0; margin-left: 14px"
          >
            {{ btn }}
          </NuxtLinkLocale>
        </div>
        <div v-else style="display: flex;">
          <NuxtLinkLocale
            :to="href"
            class="trail-btn"
            v-if="btn2"
            style="margin-right: 10px"
          >
            {{ btn2 }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            :to="href"
            class="trail-btn"
            v-if="btn"
          >
            {{ btn }}
          </NuxtLinkLocale>
        </div>
        <FormCheckbox name="agree" value="1" v-if="isHidenLinkHit">
          <span>{{ $t('pricing.cdn.getInTouch.form.agree') }}</span>
          <NuxtLinkLocale class="agree-link">
            {{ $t('pricing.cdn.getInTouch.form.agreeLink') }}
          </NuxtLinkLocale>
        </FormCheckbox>
        <div class="hint" v-if="hint && !isHidenLinkHit">{{ hint }}</div>
      </div>
      <div class="right">
        <div v-if="pic">
          <img class="pic" :src="obeyDevice(pic.src, pic.msrc).value" :width="obeyDevice(pic.w, remToPixel(pic.mw)).value" :height="obeyDevice(pic.h, remToPixel(pic.mh)).value" />
        </div>
      </div>
    </div>
    <div class="bottom" v-if="!page">
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
    <div class="bottom-resource" v-if="page == 'resourcesAbout'">
      <div class="left">
        <div class="title">
          <span>{{ $t('home.header.bottom1.title1') }}</span>
          <span class="num">{{ $t('home.header.bottom1.title2') }}</span>
          <span>{{ $t('home.header.bottom1.title3') }}</span>
        </div>
        <div class="sub-title">
          {{ $t('home.header.bottom1.subTitle') }}
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{ $t('home.header.bottom1.weAreRated') }}
        </div>
        <div class="rate">
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
          <div class="rate-item"></div>
        </div>
        <div class="sub-title">
          {{ $t('home.header.bottom1.weAreRated2') }}
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
  background: url(/images/home/home_banner_bg@2x.png);
  background-size: 1920px 800px;
  background-position: center;
  position: relative;

  .home-banner {
    display: flex;
    justify-content: space-between;
    opacity: 0;
    > .left {
      margin-top: 180px;

      .pre-title {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 30px;
        line-height: 40px;
      }
      .pre-logo {
        margin-bottom: 20px;
        img {
          width: 236px;
          height: 30px;
        }
      }
      .title {
        width: 728px;
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        line-height: 70px;
        white-space: pre-wrap;
      }

      .content {
        margin-top: 12px;

        width: 677px;
        color: #4e4e4e;
      }
      .header1-input-container {
        display: flex;
        margin-top: 40px;
        margin-bottom: 14px;
        .input-container {
          :v-deep(input) {
            border-radius: 27px !important;
            width: 292px;
          }
        }
      }
      .trail-btn {
        margin-top: 40px;
        background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
        color: white;
        border: none;
      }

      .hint {
        margin-top: 10px;

        font-size: 12px;
        color: #4e4e4e;
        opacity: 0.5;
      }
    }

    > .right {
      margin-top: 90px;
      padding : 20px;
      .pic {
        background-size: contain !important;
        width: 100%;
        height: auto;
      }
    }
  }

  .bottom {
    width: 100%;
    max-width: 1200px;
    height: 132px;
    background: url(/images/home/home_banner_bot_bg.png);
    background-size: 100% 100% !important;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin: 0 calc((100% - 1200px) / 2);
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
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .sub-title {
        color: #4e4e4e;
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
          background: url(/images/home/home_banner_ic_star.png);
        }
      }

      .sub-title {
        margin-top: 10px;
        color: #4e4e4e;
      }
    }
  }

  .bottom-resource {
    width: 100%;
    max-width: 1200px;
    height: 132px;
    background: url(/images/home/home_banner_bot_bg.png);
    background-size: 100% 100% !important;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin: 0 calc((100% - 1200px) / 2);
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
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .sub-title {
        color: #4e4e4e;
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
          background: url(/images/home/home_banner_ic_star.png);
        }
      }

      .sub-title {
        margin-top: 10px;
        color: #4e4e4e;
      }
    }
  }

  &.hide-foot {
    height: 590px;

    .bottom {
      display: none;
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1280px) {
  .home-banner-container {
    height: 700px;
  }
  .home-banner-container  .bottom {
    width: 90%;
    max-width: unset;
    left: 5%;
    margin: 0 auto;
  }
  .home-banner-container .home-banner {
    align-items: center;
  }
  .home-banner-container .home-banner > .left {
    width: 55%;

    .pre-title {
      font-size: 28px;
    }
    .title {
      width: 100%;
      font-size: 38px;
      line-height: 45px;
    }
    .content {
      width: 100%;
    }
  }
  .home-banner-container .home-banner > .right {
    width: 45%;
  }
  .home-banner-container .home-banner > .left {
    margin-top: 100px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .home-banner-container {
    width: 100%;
    max-width: none;
    height: auto;
    background: url(/public/mobile-images/home/home_banner_bg@2x.png);
    background-size: 100% 100% !important;
    background-repeat: no-repeat;

    .home-banner {
      flex-direction: column;
      box-sizing: border-box;
      padding-top: 3.75rem;

      > .left {
        margin-top: 0;

        .pre-title {
          font-size: 2.5rem;
          line-height: 3.31rem;
        }

        .title {
          margin-top: 0.63rem;
          width: 100%;
          font-size: 3.5rem;
          line-height: 5rem;
        }

        .content {
          margin-top: 1.5rem;
          width: 100%;
        }

        .trail-btn {
          margin-top: 3.13rem;
        }

        .hint {
          margin-top: 1.87rem;
          font-size: 1.38rem;
        }
        .pre-logo {
          margin-bottom: 0.94rem;
          img {
            width: auto;
            height: 2.63rem;
          }
        }
      }

      > .right {
        margin: 3rem 0;
        display: flex;
        justify-content: center;
      }
    }

    .bottom {
      margin: 5rem auto 0;

      width: 43.13rem;
      height: 26.88rem;
      background: rgba(255, 255, 255, 0.7);
      box-shadow: 0rem -0.12rem 0rem 0rem #ffffff;
      border-radius: 1.5rem 1.5rem 0rem 0rem;
      backdrop-filter: blur(5px);
      position: static;
      flex-direction: column;
      box-sizing: border-box;
      padding: 1.94rem 3.13rem 1.25rem;

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

            margin: 0.5rem;
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

    .bottom-resource {
      margin: 5rem auto 0;

      width: 43.13rem;
      height: 26.88rem;
      background: rgba(255, 255, 255, 0.7);
      box-shadow: 0rem -0.12rem 0rem 0rem #ffffff;
      border-radius: 1.5rem 1.5rem 0rem 0rem;
      backdrop-filter: blur(5px);
      position: absolute;
      flex-direction: column;
      box-sizing: border-box;
      padding: 1.94rem 3.13rem 1.25rem;
      left: 15%;

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

            margin: 0.5rem;
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
      height: fit-content;

      .bottom {
        display: none;
      }
    }
  }
}
</style>
<script lang="ts" setup>
defineProps<
  Partial<{
    title: string;
    subTitle: string;
    btn: string;
    href: string;
    pic: string;
    picWidth: string;
    picHeight: string;
    mPic: string;
    mPicWidth: string;
    reverse: Boolean;
    mPicHeight: string;
  }>
>();
</script>

<template>
  <div class="ad1-container">
    <div class="ad1 page-container" :class="{ reverse: reverse }">
      <div class="left">
        <div class="title">{{ title }}</div>
        <div class="sub-title">{{ subTitle }}</div>
        <div class="btn-container">
          <NuxtLinkLocale :to="href" class="trail-btn" v-if="btn">{{ btn }}</NuxtLinkLocale>
        </div>
      </div>
      <div class="right">
        <div
          
        >
        <img class="pic" v-if="$device.isMobile" :height="mPicHeight" :src="mPic" />
        <img class="pic" v-if="!$device.isMobile" :height="picHeight" :src="pic" />
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ad1-container {
  margin-top: 120px;

  height: 330px;
  background: linear-gradient(180deg, #e6edfc 0%, #ffffff 100%);

  .ad1 {
    width: 1090px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .left {
      .title {
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      .sub-title {
        margin-top: 10px;

        font-size: 16px;
        color: #4e4e4e;
      }

      .btn-container {
        margin-top: 40px;
      }
    }

    > .right {
      .pic {
      }
    }
    &.reverse {
      flex-direction: row-reverse;
      // flex-direction: column-reverse;
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .ad1-container {
    margin-top: 0;
    padding-top: 6.25rem;

    height: 28rem;

    .ad1 {
      width: 100%;
      height: 100%;
      gap: 3.38rem;

      box-sizing: border-box;
      padding-left: 1.87rem;
      padding-right: 0.63rem;

      > .left {
        flex: 1;

        .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        .sub-title {
          margin-top: 1rem;

          font-size: 1.63rem;
          line-height: 2.38rem;
        }

        .btn-container {
          margin-top: 2.5rem;
        }
      }

      > .right {
        .pic {
        }
      }
      &.reverse {
        // flex-direction: row-reverse;
        flex-direction: column-reverse;
      }
    }
  }
}
</style>

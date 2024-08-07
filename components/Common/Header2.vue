<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    content?: string;
  }>(),
  {}
);
</script>

<template>
  <header class="home-banner-container">
    <div class="page-container home-banner">
      <div class="subTitle">{{ subTitle }}</div>
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </header>
</template>

<style lang="less" scoped>
.home-banner-container {
  height: 710px;
  max-width: 1920px;
  margin: 0 auto;
  background: url(/images/home/home_banner_bg@2x.png);
  background-size: 1920px 800px;
  background-position: center;
  position: relative;
  .home-banner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 65px;
      color: #000000;
      line-height: 70px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      margin: 28px 0 68px 0;
    }
    .subTitle {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 36px;
      color: #000000;
      line-height: 48px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 30px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .home-banner-container {
    width: 100%;
    max-width: none;
    height: 42.69rem;
    background: url(/public/mobile-images/home/home_banner_bg@2x.png);
    background-size: 100% 100% !important;
    background-repeat: no-repeat;
    .home-banner {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .subTitle {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.31rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .title {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 3.5rem;
        color: #000000;
        line-height: 5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin: 0;
      }
      .content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.81rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>

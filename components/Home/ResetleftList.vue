<template>
  <div class="left-list">
    <div class="home-item" v-for="(item, index) in i18ntext" :key="index">
      <NuxtImg class="img" :src="item.img" alt="" srcset="" />
      <div class="main">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    {
      img: '/images/home/log_icon_1@2x.png',
      title: t('HNvqXE6c0Y9z7XOtmaI55'),
      content: t('ooCSA30bIst8lrne1ovsq')
    },
    {
      img: '/images/home/log_icon_2@2x.png',
      title: t('TSJDS8bUnSytfW0snO8aU'),
      content: t('zB38vTPDaRqlPwCmXvg7R')
    },
    {
      img: '/images/home/log_icon_3@2x.png',
      title: t('eyR9BMltWEh2J6Ctm5Lht'),
      content: t('7n5D6hiYKoW_Pzd6pePuA')
    },
    {
      img: '/images/home/log_icon_4@2x.png',
      title: t('TKZxaXw1T12K8BOzP40yh'),
      content: t('7n5D6hiYKoW_Pzd6pePuA')
    }
  ];
});
</script>
<style lang="scss" scoped>
.left-list {
  width: 530px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  .home-item {
    position: relative;
    display: flex;
    .img {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -43px;
      left: 48px;
      width: 5px;
      height: 26px;
      background: url('/images/home/log_schedule@2x.png');
      background-size: 100% 100%;
    }
    &:last-child {
      &::before {
        display: none;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      text-transform: none;
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
}
</style>

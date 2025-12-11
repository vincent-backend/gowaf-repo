<template>
  <div class="left-list">
    <div class="home-item" v-for="(item, index) in i18ntext" :key="index">
      <imgtImg class="img" :src="item.img" alt="" srcset="" />
      <div class="main">
        <div class="icon"></div>
        <div class="text-content">
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
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
    }
  ];
});
</script>
<style lang="scss" scoped>
.left-list {
  width: 530px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .home-item {
    display: flex;
    flex-direction: column;
    .img {
      width: 100px;
      height: 100px;
      margin-left: 30px;
    }
  }
  .main {
    display: flex;
    gap: 14px;
    .icon {
      margin-top: 12px;
      width: 16px;
      height: 4px;
      background: linear-gradient(270deg, #46cf3a 0%, #36cfbc 100%);
    }
    .text-content {
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
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1260px) {
  .left-list {
    width: auto;
  }
}
</style>

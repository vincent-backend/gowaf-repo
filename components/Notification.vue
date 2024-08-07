<script lang="ts" setup>
const visible = ref(true);
</script>

<template>
  <div class="notification-container" v-if="visible">
    <NuxtLinkLocale class="close" @click="visible = false"></NuxtLinkLocale>
    <div class="logo-container">
      <div class="logo"></div>
    </div>
    <div class="content-container">
      <div class="title">
        {{ $t('notification.title') }}
      </div>
      <div class="content">
        {{ $t('notification.content') }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.notification-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9;

  box-sizing: border-box;
  padding: 16px;
  width: 269px;
  height: 122px;

  background: url(/images/home/suspension_bg_team.png) left no-repeat,
    linear-gradient(
      180deg,
      #59cfcf 0%,
      #7edbd2 9%,
      rgba(146, 234, 220, 0.95) 19%,
      #b3f7e5 32%,
      #ffffff 70%,
      #ffffff 100%
    );
  box-shadow: 0px 4px 10px 0px #f1f1f1;
  border-radius: 14px;

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    background: url(/images/home/suspension_ic_close_b_nor.png);
  }

  .logo-container {
    .logo {
      width: 42px;
      height: 28px;
      background: url(/images/home/suspension_logo.png);
    }
  }

  .content-container {
    margin-top: 10px;

    .title {
      font-family: PingFang-SC, PingFang-SC;
      font-weight: bold;
      font-size: 20px;

      line-height: 28px;
    }

    .content {
      font-size: 16px;
      color: #4e4e4e;
      line-height: 22px;
    }
  }
}
</style>

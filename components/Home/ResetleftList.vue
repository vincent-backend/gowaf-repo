<template>
  <div class="left-list">
    <div
      class="home-item"
      v-for="(item, index) in $tm('home.ResetPassword.list')"
      :key="index"
    >
      <img class="img" :src="item.img" alt="" srcset="" />
      <div class="main">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
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
      background: url('/public/images/home/log_schedule@2x.png');
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

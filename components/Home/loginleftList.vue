<template>
  <div class="left-list">
    <div
      class="home-item"
      v-for="(item, index) in $tm('home.login.list')"
      :key="index"
    >
      <img class="img" :src="item.img" alt="" srcset="" />
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

<script setup lang="ts"></script>
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
</style>

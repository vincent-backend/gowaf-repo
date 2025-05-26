<template>
  <div v-if="type == 'white'" class="nationalFlag-list">
    <div class="title">{{ title }}</div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img class="nationalFlag" :src="item.img" alt="" srcset="" />
        <div class="name">{{ item.name }}</div>
        <div class="more"></div>
      </div>
    </div>
  </div>
  <div v-else class="transparent-list">
    <div class="title">{{ title }}</div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img class="nationalFlag" :src="item.img" alt="" srcset="" />
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    type?: string;
    list?: Array<{
      img: string;
      name: string;
    }>;
  }>(),
  {
    type: 'white'
  }
);
</script>
<style lang="scss" scoped>
.nationalFlag-list {
  width: 560px;
  display: flex;
  flex-direction: column;
  .title {
    padding: 20px 0;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .item {
      display: flex;
      align-items: center;
      width: 560px;
      height: 68px;
      box-sizing: border-box;
      background: #ffffff;
      border-radius: 12px;
      gap: 20px;
      padding: 0 14px;
      .nationalFlag {
        width: 40px;
        height: 40px;
      }
      .name {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .more {
        width: 32px;
        height: 32px;
        margin-left: auto;
        background: url('/images/nationalFlag/common_more@2x.png');
        background-size: 100% 100%;
      }
    }
  }
}
.transparent-list {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
    line-height: 42px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 52px;
    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: 20px;
      .nationalFlag {
        width: 40px;
        height: 40px;
      }
      .name {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #ffffff;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
@media (max-width: 767px) {
  .nationalFlag-list {
    width: 35rem;
    display: flex;
    flex-direction: column;
    .title {
      padding: 1.25rem 0;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 1.88rem;
      color: #000000;
      line-height: 2.63rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      .item {
        display: flex;
        align-items: center;
        width: 35rem;
        height: 4.25rem;
        background: #ffffff;
        border-radius: 0.75rem;
        box-sizing: border-box;
        gap: 1.25rem;
        padding: 0 0.88rem;
        .nationalFlag {
          width: 2.5rem;
          height: 2.5rem;
        }
        .name {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 1.5rem;
          color: #000000;
          line-height: 2.06rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .more {
          width: 2rem;
          height: 2rem;
          margin-left: auto;
          background: url('/images/nationalFlag/common_more@2x.png');
          background-size: 100% 100%;
        }
      }
    }
  }
  .transparent-list {
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #ffffff;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 52px;
      .item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        gap: 20px;
        .nationalFlag {
          width: 40px;
          height: 40px;
        }
        .name {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #ffffff;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>

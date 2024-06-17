
<script lang="ts" setup>
defineProps<{
  isShowTitle: boolean,
  neverHit: {
    title: string;
    subTitle: string;
    list: {
      icon: string,
      width: string,
      height: string,
      alignType: string,
      title: string;
      content: string;
    }[];
    items: Array<{
      num: Number;
      icon: string;
    }>;
  }[];
}>();
</script>
<template>
  <div class="never-hit-container">
    <div class="never-hit page-container">
      <div class="title" v-if="isShowTitle">{{ neverHit.title }}</div>
      <div class="sub-title" v-if="isShowTitle">{{ neverHit.subTitle }}</div>
      <div class="content">
        <div class="item" v-for="item in neverHit.items"  :style="{ alignItems: `${item.alignType}` }">
          <div class="icon" 
            :style="{ backgroundImage: `url(${item.icon})`, width: `${item.width}`, height: `${item.height}` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content" :style="{textAlign: `${item.contentAlign}`}">{{ item.content }}</div>
        </div>

        <div class="icon icon-1"></div>
        <div class="icon icon-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.never-hit-container {
  margin-top: 120px;
  margin-bottom: 20px;
  .never-hit {
    width: 1200px;

    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.content {
      margin-top: 60px;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      >.item {
        padding-right: 70px;
        width: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 80px;
          height: 80px;
        }

        .title {
          margin-top: 22px;

          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 26px;

          line-height: 35px;
          text-align: center;


        }

        .content {
          margin-top: 8px;




          color: #4E4E4E;

          text-align: center;


        }
      }

      >.icon {
        position: absolute;

        &.icon-1 {}

        &.icon-2 {}
      }
    }
  }
}
</style>
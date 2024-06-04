<script lang="ts" setup>
const props = defineProps({
  items: Array<any>,
});
</script>

<template>
  <div class="feature-list-container">
    <div class="feature-list page-container">
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.feature-list-container {
  margin-top: 120px;

  .feature-list {
    .list {
      display: flex;
      gap: 90px;

      .item {
        .icon {
          width: 100px;
          height: 100px;
        }

        .title {
          margin-top: 20px;


          font-weight: 500;
          font-size: 20px;

          line-height: 28px;



        }

        .content {
          margin-top: 10px;



          font-size: 16px;
          color: #4E4E4E;




        }
      }
    }
  }
}
</style>
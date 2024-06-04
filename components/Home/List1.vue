<script lang="ts" setup>
const imgs = [
  '/images/home/home_logo_1@2x.png',
  '/images/home/home_logo_2@2x.png',
  '/images/home/home_logo_3@2x.png',
  '/images/home/home_logo_4@2x.png',
  '/images/home/home_logo_5@2x.png',
  '/images/home/home_logo_6@2x.png',
  '/images/home/home_logo_7@2x.png',
  '/images/home/home_logo_8@2x.png',
  '/images/home/home_logo_9@2x.png',
  '/images/home/home_logo_10@2x.png',
  '/images/home/home_logo_11@2x.png',
  '/images/home/home_logo_12@2x.png',
  '/images/home/home_logo_13@2x.png',
  '/images/home/home_logo_14@2x.png',
  '/images/home/home_logo_15@2x.png',
  '/images/home/home_logo_16@2x.png',
];
</script>

<template>
  <div class="list1-container">
    <div class="page-container list1">
      <div class="title">
        {{ $t('home.list1.title') }}
      </div>
      <div class="list">
        <div class="list-item" v-for="img in imgs">
          <img :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  padding-top: 60px;

  .list1 {
    .title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;



    }

    .list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      .list-item {
        width: 190px;
        height: 84px;
        background: #FFFFFF;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          display: block;

          height: 40px;
        }
      }
    }
  }
}
</style>
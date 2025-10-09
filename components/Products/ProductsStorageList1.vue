<script lang="ts" setup>
const props = defineProps({
  list: Array<string>,
  title: String,
  subTitle: String
});
// const imgs = obeyDevice([
//   '/images/products/storage/europe/home_logo_1_2x_1.png',
//   '/images/products/storage/europe/home_logo_2_2x_1.png',
//   '/images/products/storage/europe/home_logo_3_2x_1.png',
//   '/images/products/storage/europe/home_logo_4_2x_1.png',
//   '/images/products/storage/europe/home_logo_5_2x_1.png',
//   '/images/products/storage/europe/home_logo_6_2x_1.png',
//   '/images/products/storage/europe/home_logo_7_2x_1.png',
//   '/images/products/storage/europe/home_logo_8_2x_1.png',
// ], [
//   '/images/products/storage/europe/home_logo_1_2x_1.png',
//   '/images/products/storage/europe/home_logo_2_2x_1.png',
//   '/images/products/storage/europe/home_logo_3_2x_1.png',
//   '/images/products/storage/europe/home_logo_4_2x_1.png',
//   '/images/products/storage/europe/home_logo_5_2x_1.png',
//   '/images/products/storage/europe/home_logo_6_2x_1.png',
//   '/images/products/storage/europe/home_logo_7_2x_1.png',
//   '/images/products/storage/europe/home_logo_8_2x_1.png',
// ]);
</script>

<template>
  <div class="list1-container">
    <div class="page-container list1">
      <div class="title">
        {{ title }}
        <p>{{ subTitle }}</p>
      </div>
      <div class="list">
        <div class="item" v-for="img in list">
          <img :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  padding-top: 60px;
  padding-bottom: 102px;
  .list1 {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      p {
        font-size: 16px;
        color: #4e4e4e;
        padding-top: 16px;
      }
    }

    > .list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      > .item {
        width: 23.5%;
        max-width: 190px;
        height: 84px;
        background: #ffffff;
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

// For mobile devices
@media (max-width: 767px) {
  .list1-container {
    padding: 6.25rem 0;

    .list1 {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .list {
        margin-top: 2.5rem;
        justify-content: space-between;
        gap: 0.88rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        > .item {
          width: 13.75rem;
          height: 6.25rem;
          border-radius: 0.5rem;

          img {
            height: 3rem;
          }
        }
      }
    }
  }
}
</style>

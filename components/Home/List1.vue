<script lang="ts" setup>
import { isMobile } from '#imports';

const imgs = isMobile() ? [
  '/mobile-images/home/home_logo_1@2x.png',
  '/mobile-images/home/home_logo_2@2x.png',
  '/mobile-images/home/home_logo_3@2x.png',
  '/mobile-images/home/home_logo_4@2x.png',
  '/mobile-images/home/home_logo_5@2x.png',
  '/mobile-images/home/home_logo_6@2x.png',
  '/mobile-images/home/home_logo_7@2x.png',
  '/mobile-images/home/home_logo_8@2x.png',
  '/mobile-images/home/home_logo_9@2x.png',
  '/mobile-images/home/home_logo_10@2x.png',
  '/mobile-images/home/home_logo_11@2x.png',
  '/mobile-images/home/home_logo_12@2x.png',
  '/mobile-images/home/home_logo_13@2x.png',
  '/mobile-images/home/home_logo_14@2x.png',
  '/mobile-images/home/home_logo_15@2x.png',
  '/mobile-images/home/home_logo_16@2x.png',
] : [
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
        <div class="item" v-for="img in imgs">
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
    >.title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    >.list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      >.item {
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

// For mobile devices
@media (max-width: 767px) {
  .list1-container {
    padding-top: 6.25rem;

    .list1 {
      >.title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      >.list {
        margin-top: 2.5rem;
        justify-content: space-between;
        gap: 0.88rem 0;

        >.item {
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
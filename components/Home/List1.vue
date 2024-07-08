<script lang="ts" setup>
withDefaults(
  defineProps<{
    isHidenTile?: boolean;
    bgColor?: string;
    btText?: string;
    list: [];
  }>(),
  {}
);
const imgs = obeyDevice(
  [
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
    '/images/home/home_logo_16@2x.png'
  ],
  [
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
    '/mobile-images/home/home_logo_16@2x.png'
  ]
);
</script>

<template>
  <div class="list1-container" :style="{ background: `${bgColor}` }">
    <div class="page-container list1">
      <div class="title" v-if="!isHidenTile">
        {{ $t('home.list1.title') }}
      </div>
      <div class="list" :class="{ isList: list.length > 0 }">
        <div class="item" v-for="img in list || imgs">
          <img :src="img" />
        </div>
      </div>
    </div>
    <p>{{ btText }}</p>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  padding-top: 60px;
  p {
    font-weight: 400;
    font-size: 14px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    padding-bottom: 40px;
    padding-top: 10px;
  }
  .list1 {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .list {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      > .item {
        width: 190px;
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
    padding-top: 6.25rem;
    p {
      font-size: 1.5rem;
    }

    .list1 {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .list {
        margin-top: 2.5rem;
        justify-content: space-between;
        gap: 0.88rem 0;

        > .item {
          width: 13.75rem;
          height: 6.25rem;
          border-radius: 0.5rem;

          img {
            height: 3rem;
          }
        }
        &.isList {
          flex-wrap: wrap;
          .item {
            width: calc(50% - 0.88rem);
            height: 6.25rem;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            img {
              height: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>

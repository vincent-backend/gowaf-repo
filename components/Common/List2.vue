<script lang="ts" setup>
defineProps<{
  title1: string;
  title2: string;
  items: {
    icon: string;
    title: string;
  }[];
}>();
</script>

<template>
  <div class="list1-container">
    <div class="list1 page-container">
      <div class="title1" v-if="title1">{{ title1 }}</div>
      <div class="title2" v-if="title2">{{ title2 }}</div>
      <div class="list">
        <div class="item" v-for="item in items">
          <div
            class="icon"
            :style="{ backgroundImage: `url(${item.icon})` }"
          ></div>
          <div class="title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  overflow: hidden;

  .list1 {
    margin-top: 80px;

    .title1 {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    .title2 {
      margin: 20px auto 0;

      width: 612px;
      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }

    .list {
      margin: 80px auto 0;

      width: 1090px;
      display: flex;
      flex-wrap: wrap;
      gap: 50px;

      .item {
        width: 330px;
        height: 200px;
        background:
          url(/public/images/network/Network_DDoS_card_bg.png) no-repeat top,
          #ffffff;
        box-shadow: 0px 4px 10px 0px #f1f1f1;
        border-radius: 14px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        padding: 20px;

        .icon {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          background-size: 80px 80px;
        }

        .title {
          margin-top: 24px;

          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list1-container {
    .list1 {
      margin-top: 3.63rem;

      .title1 {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      .title2 {
        margin-top: 1rem;

        width: auto;
        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      .list {
        margin-top: 3.13rem;

        width: auto;
        gap: 1.25rem 0;
        justify-content: space-between;

        > .item {
          width: 20.9rem;
          height: 18.25rem;
          padding: 0.63rem 0 1.25rem 1.25rem;

          .icon {
            width: 8.25rem;
            height: 8.25rem;
          }

          .title {
            margin-top: 1.87rem;

            font-size: 2.13rem;
            line-height: 3.13rem;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
defineProps<{
  title1?: string;
  title2?: string;
  title2Width?: String;
  items?: {
    icon: string;
    title: string;
    content?: string;
  }[];
}>();
</script>

<template>
  <div class="list1-container">
    <div class="list1 page-container">
      <div class="title1" v-if="title1">{{ title1 }}</div>
      <div
        class="title2"
        :style="{ width: isMobile() ? '100%' : title2Width }"
        v-if="title2"
      >
        {{ title2 }}
      </div>
      <div class="list">
        <div class="item" v-for="item in items">
          <img class="icon" :src="item.icon" />
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content" v-if="item.content">
            {{ item.content }}
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

  .title1 {
    margin-top: 120px;
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
  }

  .title2 {
    margin: 18px auto 80px;
    font-size: 16px;
    color: #4e4e4e;
    text-align: center;
    word-break: break-all;
  }

  .list1 {
    margin-top: 80px;
    // width: 1090px;

    > .list {
      margin-top: 80px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px;
      &::after {
        content: '';
        flex: auto;
      }
      .item {
        width: 100%;
        height: 380px;
        background: url(/images/network/Network_DDoS_card_bg.png)
            no-repeat top,
          #ffffff;
        background-size: 100% 200px !important;
        box-shadow: 0px 4px 10px 0px #f1f1f1;
        border-radius: 14px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 88px;
          height: 88px;
        }

        .title {
          margin-top: 60px;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          width: 100%;
        }

        .content {
          margin-top: 10px;
          font-size: 16px;
          color: #4e4e4e;
        }
      }
    }
  }
}

// For tablet devices
@media (min-width: 768px) and (max-width: 991px)  {
  .list1-container .list1 > .list {
    grid-template-columns: 1fr 1fr;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list1-container {
    .title1 {
      margin-top: 1.25rem;
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
    }

    .title2 {
      margin: 0;
      margin-top: 1rem;
      width: 100%;
      font-size: 1.75rem;
      line-height: 2.38rem;
      text-align: left;
    }

    .list1 {
      margin-top: 3.13rem;
      width: 43rem;

      > .list {
        margin-top: 3.13rem;
        gap: 1.25rem 1rem;
        grid-template-columns: 1fr 1fr;

        .item {
          width: 20.94rem;
          height: auto;
          background-size: 20.94rem 18.5rem !important;
          padding: 0.63rem 1.25rem 2rem;

          .icon {
            width: 8rem;
            height: 8rem;
          }

          .title {
            margin-top: 1.87rem;
            font-size: 2.13rem;
            line-height: 3.13rem;
          }

          .content {
            margin-top: 1.25rem;
            font-size: 1.5rem;
            line-height: 2.13rem;
          }
        }
      }
    }
  }
}
</style>

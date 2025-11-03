<script lang="ts" setup>
const props = defineProps({
  items: Array<any>
});
</script>

<template>
  <div class="feature-list-container">
    <div class="feature-list page-container">
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="img-pane">
            <img class="icon" :src="item.icon" />
          </div>
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
          text-align: center;
        }

        .content {
          margin-top: 10px;
          font-size: 16px;
          color: #4e4e4e;
          text-align: center;
        }

        .img-pane {
          text-align: center;
        }
      }
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1300px) {
  .feature-list-container .feature-list .list {
    gap: 20px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .feature-list-container {
    margin-top: 6.25rem;

    .feature-list {
      .list {
        flex-direction: column;
        gap: 2.5rem;

        .item {
          .img-pane {
            text-align: center;
            .icon {
              width: 9.38rem;
              height: 9.38rem;
            }
          }

          .title {
            margin-top: 1.25rem;
            font-size: 2.13rem;
            color: #000000;
            line-height: 3rem;
          }

          .content {
            margin-top: 0.63rem;

            font-size: 1.5rem;
            line-height: 2.19rem;
          }
        }
      }
    }
  }
}
</style>

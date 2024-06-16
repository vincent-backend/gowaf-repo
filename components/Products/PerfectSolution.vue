<script lang="ts" setup>
withDefaults(defineProps<{
  title?: string;
  titleWidth: string;
  content?: string;
  items: any;
  pic?: {
    url?: string;
    width?: number;
    height?: number;
  };
  showFoot?: boolean;
}>(), {
  showFoot: true,
});
</script>
<template>
  <div class="perfect-solution-container">
    <div class="perfect-solution page-container">
      <div class="left">
        <div class="title" v-if="title" :style="{ width: titleWidth }">{{ title }}</div>
        <div class="content" v-if="content">{{ content }}</div>
        <div class="list">
          <div class="item" v-if="items.length > 0" v-for="item in items">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="pic" :style="{ backgroundImage: `url(${pic?.url})`, width: pic?.width + 'px', height: pic?.height + 'px' }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.perfect-solution-container {
  margin-top: 120px;

  .perfect-solution {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    >.left {
      >.title {
        width: 249px;

        font-weight: 500;
        font-size: 30px;

        line-height: 42px;



      }

      >.content {
        margin-top: 18px;

        width: 569px;


        font-size: 16px;
        color: #4E4E4E;




      }

      >.list {
        margin-top: 50px;

        display: flex;
        flex-direction: column;
        gap: 52px;

        >.item {
          display: flex;

          >.icon {
            width: 60px;
            height: 60px;
          }

          >.right {
            margin-left: 26px;

            >.title {

              font-weight: 500;
              font-size: 16px;

              line-height: 22px;



            }

            >.content {
              margin-top: 6px;

              width: 395px;



              color: #4E4E4E;
              line-height: 20px;



            }
          }
        }
      }
    }

    >.right {
      padding-top: 101px;

      >.pic {
        width: 460px;
        height: 480px;
        // background-image: url(/public/images/products/stream/media-cage/media_perfect_img@2x.png);
      }
    }
  }
}
</style>
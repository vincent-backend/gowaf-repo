<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    titleWidth: string;
    content?: string;
    items: any;
    pic?: {
      url?: string;
      width?: number;
      height?: number;
      mwidth?: string;
      mheight?: string;
    };
    picPosition: string;
    showFoot?: boolean;
  }>(),
  {
    showFoot: true,
    picPosition: 'top'
  }
);
</script>
<template>
  <div class="perfect-solution-container">
    <div class="perfect-solution page-container">
      <div class="left">
        <div
          class="title"
          v-if="title"
          :style="{ width: isMobile ? '100%' : titleWidth }"
        >
          {{ title }}
        </div>
        <div class="content" v-if="content">{{ content }}</div>
        <XsOnly>
          <div
            v-if="picPosition === 'top'"
            class="pic"
            :style="{
              backgroundImage: `url(${pic?.url})`,
              width: pic?.mwidth,
              height: pic?.mheight
            }"
          ></div>
        </XsOnly>
        <div class="list">
          <div class="item" v-if="items.length > 0" v-for="item in items">
            <div
              class="icon"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <XsOnly>
          <div
            v-if="picPosition !== 'top'"
            class="pic"
            :style="{
              backgroundImage: `url(${pic?.url})`,
              width: pic?.mwidth,
              height: pic?.mheight,
              marginTop: '3.13rem'
            }"
          ></div>
        </XsOnly>
      </div>
      <LgOnly>
        <div class="right">
          <div
            class="pic"
            :style="{
              backgroundImage: `url(${pic?.url})`,
              width: pic?.width + 'px',
              height: pic?.height + 'px'
            }"
          ></div>
        </div>
      </LgOnly>
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

    > .left {
      > .title {
        width: 249px;

        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
      }

      > .content {
        margin-top: 18px;

        width: 569px;

        font-size: 16px;
        color: #4e4e4e;
      }

      > .list {
        margin-top: 50px;

        display: flex;
        flex-direction: column;
        gap: 52px;

        > .item {
          display: flex;

          > .icon {
            width: 60px;
            height: 60px;
          }

          > .right {
            margin-left: 26px;

            > .title {
              font-weight: 500;
              font-size: 16px;

              line-height: 22px;
            }

            > .content {
              margin-top: 6px;

              width: 395px;

              color: #4e4e4e;
              line-height: 20px;
            }
          }
        }
      }
    }

    > .right {
      padding-top: 101px;

      > .pic {
        width: 460px;
        height: 480px;
        // background-image: url(/public/images/products/stream/media-cage/media_perfect_img@2x.png);
      }
    }
  }
}
@media (max-width: 767px) {
  .perfect-solution-container {
    margin-top: 6.25rem;
    padding: 0 1.8rem;

    .perfect-solution {
      display: flex;
      flex-direction: column-reverse;

      > .left {
        > .title {
          width: 100%;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 3.5rem;
        }
        > .pic {
          margin: 0 auto;
          width: 28.75rem;
          height: 30rem;
          // background-image: url(/public/images/products/stream/media-cage/media_perfect_img@2x.png);
        }
        > .content {
          margin-top: 1rem;
          font-size: 1.75rem;
          width: 100%;
          color: #4e4e4e;
        }

        > .list {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;

          > .item {
            display: flex;
            flex-direction: column;

            > .icon {
              width: 7.5rem;
              height: 7.5rem;
            }

            > .right {
              margin-left: 0;

              > .title {
                font-weight: 500;
                margin-top: 1.25rem;
                font-size: 2.13rem;
                line-height: 3rem;
              }

              > .content {
                margin-top: 0.6rem;
                font-size: 1.5rem;
                width: 100%;
                color: #4e4e4e;
                line-height: 2.19rem;
              }
            }
          }
        }
      }

      > .right {
        padding-top: 2.5rem;

        > .pic {
          width: 28.75rem;
          height: 30rem;
          // background-image: url(/public/images/products/stream/media-cage/media_perfect_img@2x.png);
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
  content2: String,
  content3: String,
  content4: String,
  list: Array<any>,
  btn: String,
  href: String,
  pic: String,
  picWidth: String,
  picHeight: String,
  mPic: String,
  mPicWidth: String,
  mPicHeight: String,
  btnSubtext: String,
  reverse: Boolean,
  singleRowlist: Boolean
});
</script>

<template>
  <div class="ad2-container">
    <div class="ad2 page-container" :class="{ reverse: props.reverse }">
      <div class="left">
        <div>
          <img class="pic" v-if="isMobile()" :height="remToPixel(mPicHeight)" :src="mPic" />
          <img class="pic" v-if="!isMobile()" :height="picHeight" :src="pic" />
        </div>
        <!-- btn -->
        <div class="btn-container" v-if="props.btn">
          <NuxtLinkLocale :to="props.href" class="trail-btn">{{ props.btn }}</NuxtLinkLocale>
          <div class="btn-sub">{{ props.btnSubtext }}</div>
        </div>
      </div>
      <div class="right">
        <!-- title -->
        <div class="title"><slot name="title" />{{ props.title }}</div>

        <!-- content -->
        <div class="content">{{ props.content }}</div>
        <div class="content" v-if="props.content2">{{ props.content2 }}</div>
        <div class="content" v-if="props.content3">{{ props.content3 }}</div>
        <div class="content" v-if="props.content4">{{ props.content4 }}</div>
        <!-- list -->
        <div class="list" :class="{ singleRowlist }" v-if="props.list">
          <div class="item" v-for="item in props.list">
            <div class="icon">
              <div class="icon-img"></div>
            </div>
            <div class="title">{{ item }}</div>
          </div>
        </div>

        <slot />

        <!-- btn -->
        <div class="btn-container" v-if="props.btn">
          <NuxtLinkLocale :to="props.href" class="trail-btn">{{ props.btn }}</NuxtLinkLocale>
          <div class="btn-sub">{{ props.btnSubtext }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ad2-container {
  margin-top: 120px;

  &.pb-md-6 {
    padding-bottom: 120px;
  }

  &.no-img {
    .ad2 {
      > .left {
        margin-top: 0;

        > div:first-child {
          display: none;
        }

        .btn-container {
          margin-top: 0;
          margin-bottom: 3rem;
        }
      }
      > .right {
        width: 100%;
      }
    }  
  }

  .ad2 {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .left {

      > .btn-container {
        display: none;
      }
    }

    > .right {
      width: 600px;

      > .title {
        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
      }

      > .content {
        margin-top: 20px;

        font-size: 16px;
        color: #4e4e4e;
      }

      > .list {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px 0;

        .item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            border-radius: 50%;

            .icon-img {
              width: 100%;
              height: 100%;
              background: url(/images/solutions/storage-software/home_Text_list_ic_tick@2x.png);
            }
          }

          .title {
            margin-left: 8px;

            font-weight: 500;
            font-size: 16px;

            line-height: 22px;
          }
        }

        &.singleRowlist {
          .item {
            width: 100%;
          }
        }
      }

      > .btn-container {
        margin-top: 40px;

        .btn-sub {
          margin-top: 10px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 12px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1160px){
  .ad2-container .ad2 {
    width: calc(100% - 6rem);
    flex-direction: column;
  }
  .ad2-container .ad2.reverse {
    flex-direction: column;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .ad2-container {
    margin-top: 6rem;

    &.mb-md-5 {
      margin-bottom: 6rem;
    }

    &.pb-md-6 {
      padding-bottom: 4.8rem;
    }

    &.mt-1 {
      margin-top: 1rem;
    }

    .ad2 {
      width: 43.13rem;
      display: flex;
      flex-direction: column;

      > .left {
        margin-top: 3.13rem;
        margin-bottom: 2rem;

        > .btn-container {
          margin-top: 3.6rem;
          display: flex;
          gap: 0.7rem;
          flex-direction: column;
          justify-content: center;
          .btn-sub {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 1.63rem;
            color: #4e4e4e;
            line-height: 2.38rem;
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
        }
      }

      > .right {
        width: 43.13rem;

        > .title {
          font-weight: 500;
          font-size: 2.5rem;

          line-height: 1.4;
        }

        > .content {
          margin-top: 1.75rem;

          font-size: 1.75rem;
          color: #4e4e4e;
        }

        > .list {
          margin-top: 2.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem 0;

          .item {
            width: 50%;
            display: flex;
            align-items: center;

            .icon {
              width: 18px;
              height: 18px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);

              .icon-img {
                width: 50%;
                height: 50%;
                background-image: url(/public/mobile-images/solutions/storage-software/home_Text_list_ic_tick@2x.png);
              }
            }

            .title {
              margin-left: 0.75rem;

              font-weight: 500;
              font-size: 1.5rem;

              line-height: 1.4;
            }
          }
        }

        > .btn-container {
          display: none;
        }
      }

      &.reverse {
        // flex-direction: row-reverse;
        flex-direction: column-reverse;
      }
    }
  }
}
</style>

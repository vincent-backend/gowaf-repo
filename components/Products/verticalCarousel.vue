<template>
  <div class="verticalCarousel-container">
    <div class="verticalCarousel page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div class="left">
          <div
            class="sweper-item"
            v-for="item in localizedDefaults.sweperList"
            :class="{ Active: item.title === current.title }"
          >
            <img
              class="icon"
              :src="item.title === current.title ? item.aicon : item.icon"
              :style="{
                width: isMobile ? item.miconw : item.iconw
              }"
              alt=""
              srcset=""
            />
            <div class="text">{{ item.title }}</div>
          </div>
        </div>
        <div class="right">
          <img
            :src="current.bigPic"
            :style="{
              width: isMobile ? '100%' : current.bigpicW
            }"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="btn-row" v-if="localizedDefaults.btnText">
        <div class="btn">
          {{ localizedDefaults.btnText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t, tm } = useI18n();
const current: any = ref({});
const props = withDefaults(
  defineProps<{
    title: string;
    subTitle: string;
    btnText: string;
    sweperList: Array<{
      icon: string;
      iconw: string;
      miconw: string;
      title: string;
      bigPic: string;
      bigpicW: string;
      mbigpicW: string;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('products.optimizer.TransformAPI.verticalCarousel.title'),
    subTitle: $t('products.optimizer.TransformAPI.verticalCarousel.subTitle'),
    btnText: $t('products.optimizer.TransformAPI.verticalCarousel.btnText'),
    sweperList: tm(
      'products.optimizer.TransformAPI.verticalCarousel.sweperList'
    ) as any
  };
  return mergeWithDefaults(obj, props);
});
const currentIndex = ref(0);

// 更新当前索引到下一个索引
const updateIndex = () => {
  const length = localizedDefaults.value.sweperList.length;
  if (currentIndex.value < length - 1) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = 0;
  }
  current.value = localizedDefaults.value.sweperList[currentIndex.value];
};
onMounted(() => {
  current.value = localizedDefaults.value.sweperList[0];
});
const { pause, resume, isActive } = useIntervalFn(updateIndex, 2000, {
  immediate: true
});
</script>
<style lang="scss" scoped>
.verticalCarousel-container {
  margin-top: 120px;

  .verticalCarousel {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      background: #fafafa;
      display: flex;
      gap: 50px;
      margin-top: 50px;
      .left {
        display: flex;
        flex-shrink: 0;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        .sweper-item {
          width: 320px;
          height: 90px;
          padding: 14px 20px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 8px;
          gap: 26px;
          display: flex;
          align-items: center;
          .text {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .icon {
            width: 60px;
          }
          &.Active {
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 4px;
            .text {
              color: #ffffff;
            }
          }
        }
      }
      .right {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .btn-row {
      width: 100%;
      display: flex;
      margin-top: 18px;
      .btn {
        margin-left: auto;
        margin-right: 431px;
        width: 290px;
        height: 50px;
        background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
      }
    }
  }
}
@media (max-width: 767px) {
  .verticalCarousel-container {
    margin-top: 6.25rem;

    .verticalCarousel {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
        background: #fafafa;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2.5rem;
        .left {
          display: flex;
          flex-shrink: 0;
          flex-direction: row;
          justify-content: center;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 1.5rem;
          .sweper-item {
            flex-shrink: 0;
            width: 19.25rem;
            height: 5.63rem;
            padding: 0.88rem 1.25rem;
            box-sizing: border-box;
            background: #ffffff;
            border-radius: 0.5rem;
            gap: 1rem;
            display: flex;
            align-items: center;
            .text {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 1.75rem;
              color: #000000;
              line-height: 2.5rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            .icon {
              width: 3.75rem;
            }
            &.Active {
              background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
              border-radius: 0.5rem;
              .text {
                color: #ffffff;
              }
            }
          }
        }
        .right {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .btn-row {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
        .btn {
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
          height: 4.63rem;
          background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
          border-radius: 2.31rem;
          white-space: nowrap;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

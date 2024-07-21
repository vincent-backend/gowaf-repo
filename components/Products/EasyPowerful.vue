<template>
  <div class="easy-powerful-container">
    <div class="easy-powerful page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div
          class="item"
          :class="{ showNext }"
          v-for="(item, index) in localizedDefaults.fulItems"
        >
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }">
            <div class="index">
              {{ (index + 1).toString().padStart(2, '0') }}
            </div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t, tm } = useI18n();
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    showNext?: Boolean;
    fulItems?: Array<{
      icon: string;
      title: string;
      content: string;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('products.stream.mediaCage.easyPowerful.title'),
    subTitle: $t('products.stream.mediaCage.easyPowerful.subTitle'),
    showNext: true,
    fulItems: tm('products.stream.mediaCage.easyPowerful.items') as any
  };
  return mergeWithDefaults(obj, props);
});
</script>

<style lang="less" scoped>
.easy-powerful-container {
  margin-top: 80px;

  .easy-powerful {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 18px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      width: 100%;

      > .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 33px;
        position: relative;
        &.showNext {
          &::after {
            display: block;
            content: '';
            width: 118.01px;
            height: 46.31px;
            position: absolute;
            right: -50%;
            top: 0;
            margin-left: -32px;
            margin-top: 46px;
            background: url('/images/home/arrow@2x.png');
            background-size: 100% 100%;
          }
          &:last-child {
            &::after {
              display: none;
            }
          }
        }
        > .icon {
          width: 80px;
          height: 80px;
          position: relative;

          .index {
            position: absolute;
            right: -26px;
            top: -33px;

            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 50px;

            line-height: 64px;

            background: linear-gradient(
              41.5494227786465deg,
              #46cf3a 0%,
              #36cfbc 100%
            );
            opacity: 0.3;

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        > .title {
          margin-top: 22px;

          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 26px;

          line-height: 35px;
        }

        > .content {
          margin-top: 8px;

          width: 220px;

          color: #4e4e4e;

          text-align: center;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .easy-powerful-container {
    margin-top: 6.25rem;
    padding: 0 1.88rem;

    .easy-powerful {
      width: 100%;

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
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        > .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 3rem;
          &::after {
            display: none;
          }

          > .icon {
            width: 7.5rem;
            height: 7.5rem;
            position: relative;

            .index {
              position: absolute;
              right: -3.13rem;
              top: -3.5rem;
              font-family: Mont, Mont;
              font-weight: bold;
              font-size: 6.25rem;
              line-height: 6rem;
              background: linear-gradient(
                41.5494227786465deg,
                #46cf3a 0%,
                #36cfbc 100%
              );
              opacity: 0.3;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          > .title {
            margin-top: 1.63rem;
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 2.13rem;
            line-height: 3rem;
          }

          > .content {
            margin-top: 8px;
            font-size: 1.63rem;
            width: 37.13rem;
            color: #4e4e4e;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

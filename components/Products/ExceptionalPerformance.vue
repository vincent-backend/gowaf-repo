<script lang="ts" setup>
const { t } = useI18n();
const props = defineProps<{
  markerColor: string;
  title: string;
  content: string;
  img: string;
}>();
const localizedDefaults: any = computed(() => {
  const obj = {
    title: t('r6y3-cOGjfG4n1d-2y1lG'),
    content: t('products.storage.Europe.exceptionalPerformance.content'),
    markerColor: '#3F59FF'
  };
  return mergeWithDefaults(obj, props);
});
</script>
<template>
  <div class="exceptional-performance-container">
    <div class="never-hit page-container">
      <div class="title">{{ localizedDefaults.title }}</div>
      <div class="sub-title">{{ localizedDefaults.content }}</div>
    </div>
    <div class="img">
      <ul class="position-container">
        <li
          v-for="(item, index) in [
            13, 18, 31, 42, 15, 26, 18, 39, 10, 21, 32, 23, 14, 15, 16, 25, 11,
            29, 14, 41, 35, 28, 12, 9
          ]"
          :key="index"
          :style="
            isMobile()
              ? {
                  left: item * (Math.floor(Math.random() * 4) + 5) + 'px',
                  top: item * Math.floor(Math.random() * 11) + 'px'
                }
              : {
                  left: item * (Math.floor(Math.random() * 4) + 20) + 'px',
                  top: item * (Math.floor(Math.random() * 11) + 2) + 'px'
                }
          "
        >
          <div class="circle">
            <div
              class="big-circle"
              :style="{ background: `${localizedDefaults.markerColor}` }"
            ></div>
            <div
              class="small-circle"
              :style="{ background: `${localizedDefaults.markerColor}` }"
            ></div>
          </div>
        </li>
      </ul>
      <img :src="localizedDefaults.img" alt="exceptional-performance" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.exceptional-performance-container {
  margin-top: 120px;
  .img {
    background: #cad6d7;
    height: 840px;
    margin-top: 62px;
    position: relative;
    .position-container {
      position: absolute;
      width: 710px;
      height: 576px;
      top: 210px;
      left: 50%;
      margin-left: -465px;
      li {
        position: absolute;
        left: 100px;
        top: 100px;
        .circle {
          position: relative;
          width: 20px;
          height: 20px;
        }
        .small-circle {
          border-radius: 50%;
          width: 10px;
          height: 10px;
          background: #3f59ff;
          position: absolute;
        }
        .big-circle {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #3f59ff;
          animation: twinkling 1s infinite ease-in-out;
          animation-fill-mode: both;
        }
      }
    }
    img {
      max-width: 1200px;
      height: 840px;
      margin: 0 auto;
      display: block;
    }
  }
  @keyframes twinkling {
    0% {
      opacity: 0.1;
      transform: scale(1);
    }

    50% {
      opacity: 0.3;
      transform: scale(1.1);
    }

    100% {
      opacity: 0.1;
      transform: scale(1);
    }
  }
  .never-hit {
    width: 980px;

    > .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    > .sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
}
@media (max-width: 767px) {
  .exceptional-performance-container {
    margin-top: 6.38rem;
    .img {
      background: #cad6d7;
      height: 38.75rem;
      margin-top: 2.5rem;
      position: relative;
      .position-container {
        position: absolute;
        width: 23.19rem;
        height: 31.63rem;
        top: 4.56rem;
        left: 50%;
        margin-left: -11.5rem;
        li {
          position: absolute;
          left: 0;
          top: 0;
          .circle {
            position: relative;
            width: 0.47rem;
            height: 0.47rem;
          }
          .small-circle {
            border-radius: 50%;
            width: 0.25rem;
            height: 0.25rem;
            background: #3f59ff;
            position: absolute;
          }
          .big-circle {
            position: absolute;
            top: -0.1rem;
            left: -0.1rem;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #3f59ff;
            animation: twinkling 1s infinite ease-in-out;
            animation-fill-mode: both;
          }
        }
      }
      img {
        max-width: 100%;
        height: 36.25rem;
        margin: 0 auto;
        display: block;
      }
    }
    @keyframes twinkling {
      0% {
        opacity: 0.1;
        transform: scale(1);
      }

      50% {
        opacity: 0.3;
        transform: scale(1.1);
      }

      100% {
        opacity: 0.1;
        transform: scale(1);
      }
    }
    .never-hit {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1.88rem;
      margin-top: 6.38rem;

      > .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        max-width: 43rem;
        margin: 0 auto;
      }

      > .sub-title {
        margin: 1rem auto;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        max-width: 43rem;
      }
    }
  }
}
</style>

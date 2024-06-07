<script lang="ts" setup>
withDefaults(defineProps<{
  markerColor: string,
  title: string,
  content: string,
  img:string,
}>(), {
  title: 'Exceptional performance.For every request.Every time.',
  content: 'Deliver fantastic experience with 36 PoPs around Europe.Reach users in most major cities in under 10ms.',
  markerColor: '#3F59FF',
});
</script>
<template>
  <div class="exceptional-performance-container">
    <div class="never-hit page-container">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ content }}</div>
    </div>
    <div class="img">
      <ul class="position-container">
        <li v-for="(item, index) in [13,18,31,42,15,26,18,39,10,21,32,23,14,15,16,25,11,29,14,41,35,28,12,9]" 
          :key="index"
          :style="{left: item * (Math.floor(Math.random() * 4) + 20) + 'px', top: item * (Math.floor(Math.random() * 11) + 2) + 'px'}"
        >
          <div class="circle">
            <div class="big-circle" :style="{background: `${markerColor}`}"></div>
            <div class="small-circle" :style="{background: `${markerColor}`}"></div>
          </div>
        </li>
      </ul>
      <img :src="img" alt="exceptional-performance">
    </div>
  </div>
</template>

<style lang="less" scoped>
.exceptional-performance-container {
  margin-top: 120px;
  .img {
    background: #CAD6D7;
    height: 840px;
    margin-top: 62px;
    position: relative;
    .position-container{
      position: absolute;
      width: 710px;
      height: 576px;
      top:210px;
      left:50%;
      margin-left: -465px;
      li{
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
            background: #3F59FF;
            position: absolute;
        }
        .big-circle {
            position: absolute;
            top: -5px;
            left: -5px;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #3F59FF;
            animation: twinkling 1s infinite ease-in-out;
            animation-fill-mode: both;
        }
      }
    }
    img{
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

    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    
  }
}
</style>
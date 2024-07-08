<template>
  <div class="carousel-container">
    <div class="container">
      <h2>{{ $t('resources.careers.carouselList.title') }}</h2>
      <h5>{{ $t('resources.careers.carouselList.subTitle') }}</h5>
      <Line top="40px" m-top="3.13rem" />
      <div
        class="slide"
        v-for="(item, index) in $tm('resources.careers.carouselList.items')"
        :key="index"
        :class="currentSlide === index ? 'active' : ''"
      >
        <div class="img1" :style="getStyles(item)">
          <img :src="item.icon" alt="" :style="getStyles(item)" />
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
      <div class="controls">
        <ul class="num-ul">
          <li
            v-for="(item, index) in $tm('resources.careers.carouselList.items')"
            :key="index"
            :class="currentSlide === index ? 'circle-active' : ''"
          ></li>
        </ul>
      </div>
    </div>
    <div class="btn-container">
      <div id="prevBtn" @click="showSlide(currentSlide - 1)">
        <img
          src="/public/images/resources/careers/home_Slide_left_2x.png"
          alt=""
        />
      </div>
      <div id="nextBtn" @click="showSlide(currentSlide + 1)">
        <img
          src="/public/images/resources/careers/home_Slide_right_2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  tab: {
    title: string;
    content: string;
    btn: string;
    href: string;

    icon: string;
    iconWidth: string;
    iconHeight: string;

    mIcon: string;
    mIconWidth: string;
    mIconHeight: string;
  };
}>();

const nextBtn: any = ref(null);
const prevBtn: any = ref(null);

// tabs
const curTab = ref(0);
let currentSlide = ref(0);
onMounted(() => {});
// 设置图片的样式
const showSlide = (index: number) => {
  currentSlide.value = index >= 4 ? 0 : index < 0 ? 3 : index;
};
const getStyles = (item: any) => {
  return isMobile
    ? {}
    : {
        width: `${item.width}`,
        height: `${item.height}`
      };
};
</script>
<style lang="less" scoped>
.carousel-container {
  width: 1200px;
  margin: 100px auto;
  .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-bottom: 20px;
  }
  h5 {
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .slide {
    width: 960px;
    height: 340px;
    margin: 40px auto 20px auto;
    display: none;
    h3 {
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-bottom: 20px;
      padding-left: 130px;
      padding-top: 70px;
      white-space: pre-wrap;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-left: 130px;
    }
  }
  .active {
    display: flex;
  }
  .img1 {
    width: 334px;
    height: 334px;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .img2 {
    width: 400px;
    height: 200px;
    background: goldenrod;
  }

  .img3 {
    width: 400px;
    height: 200px;
    background: yellowgreen;
  }
  .btn-container {
    margin: 52px auto;
    width: 174px;
    display: flex;
    justify-content: space-between;
    img {
      width: 80px;
      height: 80px;
      cursor: pointer;
    }
  }
  #prevBtn,
  #nextBtn {
    width: 80px;
    height: 80px;
    border: 1px #fafafa solid;

    &:hover {
      border: 1px #ddd solid;
    }
  }
  // #prevBtn {
  //   position: absolute;
  //   left: 20px;
  //   z-index: 2;
  // }
  // #nextBtn {
  //   position: absolute;
  //   right: 20px;
  //   z-index: 2;
  // }
  .controls {
    display: flex;
    justify-content: center;
  }

  .num-ul {
    list-style: none;
    padding: 0;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    .circle-active {
      background: #46cf3a;
      width: 14px;
      height: 14px;
      border-radius: 7px;
    }
  }
  .num-ul li {
    width: 10px;
    height: 10px;
    background: #e8e8e8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .carousel-container {
    width: 100%;
    margin: 6.25rem auto;
    .container {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      padding: 0 1.88rem;
      box-sizing: border-box;
    }
    h2 {
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 1rem;
    }
    h5 {
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .slide {
      width: 100%;
      height: 40.31rem;
      margin: 3rem auto 3.1rem auto;
      display: none;
      h3 {
        font-weight: 500;
        font-size: 2.13rem;
        color: #000000;
        line-height: 3rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-bottom: 0;
        padding-left: 0;
        padding-top: 0;
        white-space: pre-wrap;
        margin-bottom: 1.25rem;
      }
      p {
        font-weight: 400;
        font-size: 1.63rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-left: 0;
      }
    }
    .active {
      display: flex;
      flex-direction: column;
    }
    .img1 {
      width: 20.88rem;
      height: 20.88rem;
      margin: 0 auto;
      margin-top: 3.1rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .btn-container {
      display: none;
    }
    #prevBtn,
    #nextBtn {
      width: 80px;
      height: 80px;
      border: 1px #fafafa solid;

      &:hover {
        border: 1px #ddd solid;
      }
    }
    .controls {
      display: flex;
      justify-content: center;
    }

    .num-ul {
      list-style: none;
      padding: 0;
      margin-top: 3.13rem;
      display: flex;
      align-items: center;
      gap: 1.3rem;
      .circle-active {
        background: #46cf3a;
        width: 1.31rem;
        height: 1.31rem;
        border-radius: 7px;
      }
    }
    .num-ul li {
      width: 1.31rem;
      height: 1.31rem;
      background: #e8e8e8;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

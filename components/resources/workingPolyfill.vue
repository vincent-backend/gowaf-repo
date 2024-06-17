<template>
  <div class="carousel-container">
    <div class="container">
      <h2>{{ $t('resources.careers.carouselList.title') }}</h2>
      <h5>{{ $t('resources.careers.carouselList.subTitle') }}</h5>
      <Line top="40px" m-top="3.13rem" />
      <div class="slide" 
        v-for="(item, index) in $tm('resources.careers.carouselList.items')"
        :key="index"
        :class="currentSlide === index ? 'active' : ''"
      >
        <div class="img1"><img :src="item.icon" alt="" /></div>
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
            :class="currentSlide === index ? 'circle-active' : ''"></li>
        </ul>
      </div>
    </div>
    <div class="btn-container">
      <div id="prevBtn" @click="showSlide(currentSlide-1)">
        <img src="/public/images/resources/careers/home_Slide_left_2x.png" alt="">
      </div>
      <div id="nextBtn"  @click="showSlide(currentSlide+1)">
        <img src="/public/images/resources/careers/home_Slide_right_2x.png" alt="">
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

const nextBtn: any = ref(null)
const prevBtn: any = ref(null)


// tabs
const curTab = ref(0);
let currentSlide = ref(0)
onMounted(() => {})
// 设置图片的样式
const showSlide = (index: number) => {
  currentSlide.value = index >= 4 ? 0 : (index < 0 ? 3 : index);
}
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
      h2{
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        margin-bottom: 20px;
      }
      h5{
        font-weight: 400;
        font-size: 16px;
        color: #4E4E4E;
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
        h3{
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
          padding-right: 100px;
        }
        p{
          font-weight: 400;
          font-size: 16px;
          color: #4E4E4E;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-left: 130px;

        }
      }
      .active{
        display: flex;
      }
      .img1 {
        width: 334px;
        height: 334px;
        img{
          width: 334px;
          height: 334px;
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
      .btn-container{
        margin: 52px auto;
        width: 174px;
        display: flex;
        justify-content: space-between;
        img{
          width: 80px;
          height: 80px;
          cursor: pointer;
        }
      }
      #prevBtn,
      #nextBtn {
        width: 80px;
        height: 80px;
          border: 1px #FAFAFA solid;

        &:hover{
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
        .circle-active{
          background: #46CF3A;
          width: 14px;
          height: 14px;
          border-radius: 7px;

        }
      }
      .num-ul li {
        width: 10px;
        height: 10px;
        background: #E8E8E8;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
}

// For mobile devices
@media (max-width: 767px) {
  .super-charge-container {
  
  }
}
</style>
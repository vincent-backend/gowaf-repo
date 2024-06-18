<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  items: {
    icon: string,
    icon2: string,
    title: string,
    subTitle: string,
    content1: string,
    content2: string,
  }[];
}>();
</script>

<template>
  <div class="list-container">
    <h2 v-if="title">{{ title }}</h2>
    <h4 v-if="subTitle">{{ subTitle }}</h4>
    <ul>
      <li v-for="(item, index) in items" :key="index">
       <img :src="item.icon" :alt="item.title" />
        <span><img :src="item.icon2" :alt="item.title" /></span>
        <h5>{{ item.title }}</h5>
        <p><label></label>{{ item.content1 }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 50px auto;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    li{
      width: 380px;
      margin-top: 30px;
      background: #FFFFFF;
      box-shadow: 0px 4px 10px 0px #F1F1F1;
      border-radius: 14px;
      border: 1px solid #E6E6E6;
      // width: 33.333%; /* 三列平分100%的宽度 */
      margin-right: 30px;
      box-sizing: border-box;
      &:nth-child(3n+0){
        margin-right: 0;
      }
      h5{
        padding: 10px 20px 20px 20px;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        height: 85px; 
      }
      p{
        margin: 5px 20px;
        border-top: 1px solid #E6E6E6;
        padding: 14px 0;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
        line-height: 20px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        label{
          float: right;
          width: 16px;
          height: 16px;
          background: url(/images/resources/caseStudies/nav_ic_arrow_right_nor_2x.png) no-repeat 0 0;
          background-size: 16px 16px !important;
        }
      }
      span{
        padding-left: 20px;
        padding-top: 20px;
        display: block;
        img{
          width: auto;
          height: 30px;          
        }
      }
      img{
        width: 380px;
        height: 250px;
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list-container {

  }
}
</style>
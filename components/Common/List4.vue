<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  items: {
    icon?: string;
    icon2?: string;
    title?: string;
    subTitle?: string;
    content1?: string;
    content2?: string;
    content3?: string;
    content4?: string;
    link?: string;
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
        <p>
          <NuxtLinkLocale :to="item.link" class="content1">
            {{ item.content1 }}<label></label>
          </NuxtLinkLocale>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.list-container {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    li {
      width: 380px;
      margin-top: 30px;
      background: #ffffff;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: 1px solid #e6e6e6;
      // width: 33.333%; /* 三列平分100%的宽度 */
      margin-right: 30px;
      box-sizing: border-box;
      &:nth-child(3n + 0) {
        margin-right: 0;
      }
      h5 {
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
      p {
        margin: 5px 20px;
        border-top: 1px solid #e6e6e6;
        padding: 14px 0;
        font-weight: 400;
        font-size: 14px;
        color: #4e4e4e;
        line-height: 20px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        a {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          label {
            width: 16px;
            height: 16px;
            background: url(/images/resources/case-studies/nav_ic_arrow_right_nor_2x.png)
              no-repeat 0 0;
            background-size: 16px 16px !important;
          }
        }
      }
      span {
        padding-left: 20px;
        padding-top: 20px;
        display: block;
        img {
          width: auto;
          height: 30px;
        }
      }
      img {
        width: 380px;
        height: 250px;
      }
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1240px) {
  .list-container ul {
    width: calc(100% - 60px);
    padding: 0 30px;
  }
  .list-container ul li {
    width: 30%;
  }
  .list-container ul li img {
    width: 100%;
    height: auto;
  }
  .list-container ul li h5 {
    font-size: 18px;
    line-height: 20px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list-container {
    width: 100%;
    padding: 1.88rem;
    padding-right: 0.63rem;
    box-sizing: border-box;
    margin: 6.25rem auto;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1.25rem;
      li {
        width: calc(50% - 1.25rem);
        background: #ffffff;
        box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
        border-radius: 0.88rem;
        border: 0.06rem solid #e6e6e6;
        box-sizing: border-box;
        margin: 0;
        h5 {
          padding: 0.75rem 1.25rem;
          font-size: 1.75rem;
          color: #000000;
          font-weight: 500;
          line-height: 2.5rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          height: 85px;
        }
        p {
          margin: 0.23rem 1.25rem;
          border-top: 1px solid #e6e6e6;
          padding: 1.25rem 0;
          font-weight: 500;
          font-size: 1.75rem;
          color: #000000;
          line-height: 2.5rem;
          text-align: left;
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
          a {
            label {
              width: 1.25rem;
              height: 1.25rem;
              background: url(/images/resources/case-studies/nav_ic_arrow_right_nor_2x.png)
                no-repeat 0 0;
              background-size: 1.25rem 1.25rem !important;
              margin-left: 3px;
            }
          }
        }
        span {
          padding-left: 1.25rem;
          padding-top: 1.25rem;
          display: block;
          img {
            width: auto;
            height: 2.81rem;
          }
        }
        img {
          width: 100%;
          height: 13.75rem;
        }
      }
    }
  }
}
</style>

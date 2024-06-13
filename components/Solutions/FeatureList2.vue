<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  items: Array<any>,
});
</script>

<template>
  <div class="feature-list-container">
    <div class="feature-list page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="header">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="tip" v-if="item.tip">{{ item.tip }}</div>
          </div>
          <div class="title">
            {{ item.title }} 
            <span v-if="item.tip" class="mobile-tip">{{ item.tip }}</span>
          </div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.feature-list-container {
  margin-top: 80px;

  .feature-list {

    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 18px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.list {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;

      .item {
        width: 340px;

        .header {
          display: flex;
          align-items: center;

          .icon {
            width: 44px;
            height: 44px;
          }

          .tip {
            margin-left: 16px;

            padding: 6px 12px;
            background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
            border-radius: 25px;




            color: #FFFFFF;
            line-height: 20px;



          }
        }

        .title {
          margin-top: 20px;


          font-weight: 500;
          font-size: 16px;

          line-height: 22px;

        .mobile-tip{
          display: none;
        }

        }

        .content {
          margin-top: 14px;




          color: #4E4E4E;
          line-height: 20px;



        }
      }
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .feature-list-container {
    margin-top: 6.25rem;

    .feature-list {

      >.title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      >.sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4E4E4E;
        text-align: left;
      }
      >.list {
        margin-top: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .item {
          position: relative;    
          padding-left: 5.38rem;  
          margin-top: 2.5rem;    

          .header {
            position: absolute;
            left:0;
            top:2.81rem;
            display: flex;
            flex-direction: row;
            .icon {
              width: 4.13rem;
              height: 4.13rem;
            }
            .tip {
              display: none;
            }
          }

          .title {
            margin-top: 0;


            font-weight: 500;
            font-size: 1.75rem;

            line-height: 22px;
          .mobile-tip{
            display: inline-block;
              margin-left: 1rems;
              padding: .4rem .8rem;
              background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
              border-radius: 1.6rem;
              color: #FFFFFF;
              line-height: 1.4rem;
              font-size: 1.25rem;
          }


          }

          .content {
            margin-top: .6rem;
            color: #4E4E4E;
            font-size: 1.5rem;
            line-height: 1.4;
          }
        }
      }
    }
  }
}
</style>
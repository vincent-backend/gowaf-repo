<template>
  <div class="ready-to-hop-container">
    <div class="ready-to-hop page-container">
      <div class="title">{{ $t('products.cdn.overview.readyToHop.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.overview.readyToHop.subTitle') }}</div>
      <div class="step-container">
        <div class="step-item" v-for="item in $tm('products.cdn.overview.readyToHop.items')">
          <div class="step">{{ item.step }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ready-to-hop-container {
  margin-top: 120px;

  .ready-to-hop {
    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.step-container {
      margin: 80px auto 0;
      width: 1000px;
      display: flex;
      justify-content: space-between;

      >.step-item {
        width: 260px;

        >.step {
          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 50px;

          line-height: 64px;



          background: linear-gradient(41.5494227786465deg, #46CF3A 0%, #36CFBC 100%);

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        >.title {

          font-weight: 500;
          font-size: 16px;

          line-height: 22px;



        }

        >.content {
          margin-top: 14px;




          color: #4E4E4E;
          line-height: 20px;



        }
      }
    }
  }
}
</style>
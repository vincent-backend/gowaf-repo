<template>
  <div class="easy-powerful-container">
    <div class="easy-powerful page-container">
      <div class="title">{{ $t('products.stream.mediaCage.easyPowerful.title') }}</div>
      <div class="sub-title">{{ $t('products.stream.mediaCage.easyPowerful.subTitle') }}</div>
      <div class="content">
        <div class="item" v-for="item, index in $tm('products.stream.mediaCage.easyPowerful.items')">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }">
            <div class="index">{{ (index + 1).toString().padStart(2, '0') }}</div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.easy-powerful-container {
  margin-top: 80px;

  .easy-powerful {
    width: 920px;

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

    >.content {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;

      >.item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 33px;

        >.icon {
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



            background: linear-gradient(41.5494227786465deg, #46CF3A 0%, #36CFBC 100%);
            opacity: .3;

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        >.title {
          margin-top: 22px;

          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 26px;

          line-height: 35px;



        }

        >.content {
          margin-top: 8px;

          width: 220px;



          color: #4E4E4E;

          text-align: center;


        }
      }
    }
  }
}
</style>
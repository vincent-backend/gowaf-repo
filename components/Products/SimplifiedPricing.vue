<template>
  <div class="simplified-pricing-container">
    <div class="simplified-pricing page-container">
      <div class="title">{{ $t('products.stream.overview.simplifiedPricing.title') }}</div>
      <div class="sub-title">{{ $t('products.stream.overview.simplifiedPricing.subTitle') }}</div>
      <div class="content">
        <div :class="['column', `column-${index}`]"
          v-for="item, index in $tm('products.stream.overview.simplifiedPricing.columns')">
          <div class="head">{{ item.head }}</div>
          <div class="items" :class="`items-${index}`">
            <div class="item" v-for="item2 in item.items">
              <div class="title">{{ item2.title }}</div>
              <div class="sub-title">{{ item2.subTitle }}</div>
            </div>
          </div>
          <div class="items-2">
            <div class="item" v-for="item2 in item.items2">
              <i class="icon"></i>
              {{ item2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.simplified-pricing-container {
  margin-top: 120px;

  .simplified-pricing {
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
      margin-top: 18px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.content {
      margin-top: 40px;
      display: flex;
      gap: 20px;
      background: #FFFFFF;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;

      box-sizing: border-box;
      padding: 20px;

      >.column {
        flex: 1;
        padding: 20px;
        padding-top: 74px;
        min-height: 590px;
        position: relative;

        >.head {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 54px;
          border-radius: 14px 14px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: center;


          font-weight: 500;
          font-size: 22px;
          color: #FFFFFF;
          line-height: 30px;



        }

        >.items {
          display: flex;
          flex-direction: column;
          gap: 14px;

          >.item {
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            border-radius: 14px;

            >.title {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 30px;

              line-height: 40px;
              text-align: center;


            }

            >.sub-title {
              margin-top: 10px;



              font-size: 16px;
              color: #4E4E4E;




            }
          }
        }

        >.items-2 {
          margin-top: 20px;

          display: flex;
          flex-direction: column;
          gap: 14px;

          >.item {
            display: flex;
            align-items: center;




            color: #4E4E4E;
            line-height: 20px;




            .icon {
              width: 18px;
              height: 18px;
              margin-right: 8px;
            }
          }
        }

        &.column-0 {
          background: linear-gradient(312deg, #F6F6F6 0%, #FAFAFA 100%);

          >.head {
            background: #292929;
          }

          >.items-2 {
            >.item {
              .icon {
                background: url(/public/images/products/stream/overview/home_Text_list_ic_tick_forbidden@2x.png);
              }
            }
          }
        }

        &.column-1 {
          background: linear-gradient(312deg, #E9F8FC 0%, #FFFBF0 100%);

          >.head {
            background: linear-gradient(316deg, #3475F5 0%, #12E599 100%);
            border-radius: 14px 14px 0px 0px;
          }

          >.items {
            >.item {
              >.title {
                background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }

          >.items-2 {
            >.item {
              .icon {
                background: url(/public/images/products/stream/overview/home_Text_list_ic_tick@2x.png);
              }
            }
          }
        }
      }
    }
  }
}
</style>
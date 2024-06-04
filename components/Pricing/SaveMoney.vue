<template>
  <div class="save-money-container">
    <div class="save-money page-container">
      <div class="title">{{ $t('pricing.overview.saveMoney.title') }}</div>
      <div class="sub-title">{{ $t('pricing.overview.saveMoney.subTitle') }}</div>
      <Line top="40px" />
      <div class="list">
        <div class="item" v-for="item in $tm('pricing.overview.saveMoney.list')">
          <div class="header">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
          </div>
          <div class="list">
            <div class="item" v-for="item2 in item.items">
              <div class="label">{{ item2.label }}</div>
              <div class="value">{{ item2.value }}</div>
              <div class="bar">
                <div class="bar-value" :style="{ width: item2.width }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hint">{{ $t('pricing.overview.saveMoney.hint') }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.save-money-container {
  margin-top: 120px;

  .save-money {
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
      margin-top: 40px;
      display: flex;
      gap: 20px;

      >.item {
        flex: 1;

        >.header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          >.title {

            font-weight: 500;
            font-size: 20px;

            line-height: 28px;



          }

          >.sub-title {


            font-size: 16px;
            color: #4E4E4E;

            text-align: right;


          }
        }

        >.list {
          margin-top: 16px;
          padding: 10px 20px;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #E6E6E6;

          >.item {
            height: 56px;
            display: flex;
            align-items: center;

            .label {
              flex: 1;


              font-weight: 500;
              font-size: 16px;

              line-height: 22px;



            }

            .value {

              font-weight: 500;


              line-height: 20px;
              text-align: right;


            }

            .bar {
              margin-left: 16px;
              width: 160px;
              height: 6px;
              background: #FAFAFA;
              border-radius: 3px;

              .bar-value {
                height: 6px;
                background: linear-gradient(90deg, #46CF3A 0%, #36CFBC 100%);
                border-radius: 3px;
              }
            }
          }
        }
      }
    }

    >.hint {
      margin-top: 40px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }
  }
}
</style>
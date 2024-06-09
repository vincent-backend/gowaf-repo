<template>
  <div class="pricing-table2-container">
    <div class="pricing-table2 page-container">
      <div class="table-container" v-for="item, index in $tm('pricing.stream.tables')" :class="`table-${index}`">
        <div class="header">{{ item.title }}</div>
        <div class="list-1">
          <div class="item" v-for="item2 in item.items">
            <div class="title">{{ item2.title }}</div>
            <div class="hint">{{ item2.hint }}</div>
          </div>
        </div>
        <div class="list-2">
          <div class="item" v-for="text in item.items2">
            <div class="icon"></div>
            <div class="text">{{ text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing-table2-container {
  position: relative;
  top: -60px;

  .pricing-table2 {
    background: #FFFFFF;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 24px;
    padding: 20px;
    display: flex;
    gap: 20px;

    .table-container {
      flex: 1;
      border-radius: 14px;

      .header {
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

      .list-1 {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .item {
          height: 122px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border-radius: 14px;

          .title {
            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
          }

          .hint {
            margin-top: 10px;

            font-size: 16px;
            color: #4E4E4E;
          }
        }
      }

      .list-2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        padding-top: 0;

        .item {
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
          }

          .text {
            margin-left: 8px;

            font-weight: 500;
            line-height: 20px;
          }
        }
      }

      &.table-0 {
        background: linear-gradient(312deg, #F6F6F6 0%, #FAFAFA 100%);

        .header {
          background: #292929;
        }

        .list-1 {
          .item {
            .title {}
          }
        }

        .list-2 {
          .item {
            .icon {
              background: url(/public/images/pricing/stream/home_Text_list_ic_tick_bl.png);
            }
          }
        }
      }

      &.table-1 {
        background: linear-gradient(312deg, #E9F8FC 0%, #FFFBF0 100%);

        .header {
          background: linear-gradient(316deg, #3475F5 0%, #12E599 100%);
        }

        .list-1 {
          .item {
            .title {
              background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .list-2 {
          .item {
            .icon {
              background: url(/public/images/pricing/stream/home_Text_list_ic_tick4.png);
            }
          }
        }
      }
    }
  }
}
</style>
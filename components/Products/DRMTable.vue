<template>
  <div class="drm-table-container">
    <div class="drm-table page-container">
      <div class="table">
        <div class="header">
          <div class="row">
            <div
              class="cell"
              v-for="item in $tm(
                'products.stream.multiDRM.drmTable.table.header'
              )"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="body">
          <div
            class="row"
            v-for="row in $tm('products.stream.multiDRM.drmTable.table.body')"
          >
            <div class="cell" v-for="item in row">
              <span v-if="item === true" class="icon-true"></span>
              <span v-else-if="item === false" class="icon-false"></span>
              <span v-else>{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="row">
            <div
              class="cell"
              v-for="item in $tm(
                'products.stream.multiDRM.drmTable.table.footer'
              )"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <CommonMultiLine
        class="hint"
        :text="$t('products.stream.multiDRM.drmTable.hint')"
      />
      <div class="btn-container">
        <a href="#" class="trail-btn">{{
          $t('products.stream.multiDRM.drmTable.btn')
        }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.drm-table-container {
  margin-top: 120px;

  .drm-table {
    width: 1000px;

    padding: 10px 30px 40px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 14px;

    > .table {
      .row {
        height: 50px;
        display: flex;

        .cell {
          flex: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          &:first-child {
            justify-content: flex-start;
          }
        }
      }

      .header {
        .row {
          .cell {
            font-weight: 600;
            font-size: 18px;

            line-height: 25px;
          }
        }
      }

      .body {
        .row {
          .cell {
            font-weight: 500;

            line-height: 20px;

            .icon-true,
            .icon-false {
              width: 18px;
              height: 18px;
            }

            .icon-true {
              background-image: url(/public/images/products/stream/multi-drm/home_Text_list_ic_tick@2x.png);
            }

            .icon-false {
              background-image: url(/public/images/products/stream/multi-drm/home_Text_list_ic_close@2x.png);
            }
          }
        }
      }

      .footer {
        .row {
          .cell {
            line-height: 20px;
            text-align: center;
          }
        }
      }
    }

    > .hint {
      margin-top: 40px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .btn-container {
      margin-top: 20px;

      display: flex;
      justify-content: center;
    }
  }
}
</style>

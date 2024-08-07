<template>
  <div class="drm-table-container">
    <div class="drm-table page-container">
      <div class="table">
        <div v-if="isMobile" class="shadow"></div>
        <div class="header">
          <div class="row">
            <div class="cell" v-for="item in i18ntext.header">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="body">
          <div class="row" v-for="row in i18ntext.body">
            <div class="cell" v-for="item in row">
              <span v-if="item === true" class="icon-true"></span>
              <span v-else-if="item === false" class="icon-false"></span>
              <span v-else>{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="row">
            <div class="cell" v-for="item in i18ntext.footer">
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
        <NuxtLinkLocale href="#" class="trail-btn">{{
          $t('products.stream.multiDRM.drmTable.btn')
        }}</NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return {
    header: [
      t('gxNsdI2APtM7wsmyZZ04M'),
      t('49YjH5jze25UJRNUzr_gE'),
      t('D8xnGicy4STE45OjEw8sD')
    ],
    body: [
      [t('tjq_oqilm3gHYa7aGBFnS'), true, true],
      [t('0tu1QgytvC1Rpsf4X5_QP'), false, true],
      [t('x-rAP3VEF1yYz0lHO1JSO'), false, true],
      [t('FYCogGWvBpp4H7cqTN4FF'), true, false],
      [t('-xknnXqjlHWZvXXEAY4v5'), true, true],
      [t('9WX51zXtKRT3fOug9w7rB'), true, true],
      [t('xim7PcLIiwdKO5t_iPBnT'), true, true],
      [t('CJ_fVtlfO6BeiKwlae9wZ'), false, true],
      [t('7OzZzHfo7Qq4_JAuqtVl0'), false, true]
    ],
    footer: [
      t('pricing.breadCrumbs.parent'),
      t('POwpvpakqxWvRUATLyt5l'),
      t('nH_CSdx1bvsnNVFWOQp05')
    ]
  };
});
</script>

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
              background-image: url(/images/products/stream/multi-drm/home_Text_list_ic_tick@2x.png);
            }

            .icon-false {
              background-image: url(/images/products/stream/multi-drm/home_Text_list_ic_close@2x.png);
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
@media (max-width: 767px) {
  .drm-table-container {
    margin-top: 6.25rem;

    .drm-table {
      width: 100%;
      padding: 1.63rem 1.88rem;
      box-sizing: border-box;
      background: #ffffff;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 0.5rem;

      > .table {
        position: relative;
        .shadow {
          position: absolute;
          right: 0;
          top: -1.63rem;
          z-index: 0;
          width: 15rem;
          height: 100%;
          background: linear-gradient(
            180deg,
            #e6edfc 0%,
            #f6f8fa 42%,
            #fafafa 100%
          );
          border-radius: 0.5rem;
        }
        .row {
          position: relative;
          z-index: 2;
          height: fit-content;
          display: flex;

          .cell {
            flex: 1;
            padding-left: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;

            &:first-child {
              justify-content: flex-start;
            }
          }
        }

        .header {
          z-index: 2;
          padding-top: 1.63rem;
          .row {
            .cell {
              font-weight: 600;
              font-size: 2.13rem;
              padding-left: 1.25rem;
              line-height: 3rem;
            }
          }
        }

        .body {
          z-index: 2;
          .row {
            .cell {
              font-weight: 500;
              font-size: 1.75rem;
              line-height: 2.38rem;

              .icon-true,
              .icon-false {
                width: 2.25rem;
                height: 2.25rem;
              }

              .icon-true {
                background-image: url(/images/products/stream/multi-drm/home_Text_list_ic_tick@2x.png);
              }

              .icon-false {
                background-image: url(/images/products/stream/multi-drm/home_Text_list_ic_close@2x.png);
              }
            }
          }
        }

        .footer {
          z-index: 2;
          .row {
            .cell {
              line-height: 2.38rem;
              text-align: center;
            }
          }
        }
      }

      > .hint {
        margin-top: 2.25rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .btn-container {
        margin-top: 2.25rem;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>

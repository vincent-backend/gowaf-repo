<template>
  <div class="pricing-table2-container">
    <div class="pricing-table2 page-container">
      <div
        class="table-container"
        v-for="(item, index) in i18ntext"
        :class="`table-${index}`"
      >
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

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    {
      title: 'Traditional Cloud Provider',
      items: [
        {
          title: '$0.02/minute+',
          hint: 'Encoding'
        },
        {
          title: 'From $0.02/GB',
          hint: 'Storage'
        },
        {
          title: 'From $0.085/GB',
          hint: 'CDN'
        }
      ],
      items2: [
        'Expensive transcoding fees',
        'Bring and integrate your own external player',
        'Complex integration with additional charges',
        'Centralized storage prone to bottlenecks'
      ]
    },
    {
      title: 'Bunny Stream',
      items: [
        {
          title: 'FREE',
          hint: 'Encoding'
        },
        {
          title: 'From $0.01/GB',
          hint: 'Storage'
        },
        {
          title: 'From $0.005/GB',
          hint: 'CDN'
        }
      ],
      items2: [
        'No security fees',
        'No transcoding fees',
        'Free player included',
        'Distributed video storage',
        'Extreme performance with 150 Tbps+ backbone'
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.pricing-table2-container {
  position: relative;
  top: -60px;

  .pricing-table2 {
    background: #ffffff;
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
        color: #ffffff;
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
          background: #ffffff;
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
            color: #4e4e4e;
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
        background: linear-gradient(312deg, #f6f6f6 0%, #fafafa 100%);

        .header {
          background: #292929;
        }

        .list-1 {
          .item {
            .title {
            }
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
        background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);

        .header {
          background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
        }

        .list-1 {
          .item {
            .title {
              background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
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

// For mobile devices
@media (max-width: 767px) {
  .pricing-table2-container {
    top: -2.25rem;

    .pricing-table2 {
      border-radius: 1.5rem;
      padding: 1.25rem;
      gap: 1.25rem;
      flex-direction: column;

      .table-container {
        border-radius: 0.87rem;

        .header {
          height: 4.13rem;
          border-radius: 0.87rem 0.87rem 0px 0px;
          font-size: 2rem;
          line-height: 2.81rem;
        }

        .list-1 {
          padding: 1.87rem 1.25rem 0;
          gap: 1.25rem;

          .item {
            height: 8.63rem;
            border-radius: 0.88rem;

            .title {
              font-size: 2.5rem;
              line-height: 3.31rem;
            }

            .hint {
              margin-top: 0.44rem;

              font-size: 1.38rem;
              line-height: 1.88rem;
            }
          }
        }

        .list-2 {
          margin-top: 1.75rem;

          gap: 1.25rem;

          .item {
            .icon {
              width: 1.75rem;
              height: 1.75rem;
            }

            .text {
              margin-left: 1rem;
              font-size: 1.63rem;
              line-height: 2.31rem;
            }
          }
        }

        &.table-0 {
          .header {
          }

          .list-1 {
            .item {
              .title {
              }
            }
          }

          .list-2 {
            .item {
              .icon {
              }
            }
          }
        }

        &.table-1 {
          .header {
          }

          .list-1 {
            .item {
              .title {
              }
            }
          }

          .list-2 {
            .item {
              .icon {
              }
            }
          }
        }
      }
    }
  }
}
</style>

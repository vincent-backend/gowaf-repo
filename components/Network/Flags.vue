<template>
  <div class="flags-container">
    <div class="flags page-container">
      <div class="title">
        {{ $t('network.overview.flags.title') }}
      </div>
      <div class="sub-title">
        {{ $t('network.overview.flags.subTitle') }}
      </div>
      <div class="flag-groups">
        <div class="flag-group" v-for="group in $tm('network.overview.flags.groups')">
          <div class="title">
            <div class="icon" :style="{ backgroundImage: `url(/images/network/${group.icon}@2x.png)` }"></div>
            <div class="text">{{ group.region }}</div>
          </div>
          <Line top="16px" m-top="1.25rem" />
          <div class="content">
            <div class="flag" v-for="flag in group.items">
              <div class="icon" :style="{ backgroundImage: `url(/images/network/${flag.img}@2x.png)` }"></div>
              <div class="text">{{ flag.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.flags-container {
  margin-top: 80px;

  >.flags {
    >.title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    >.sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4E4E4E;
    }

    >.flag-groups {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .flag-group {
        padding: 16px 30px 32px;
        background: #FFFFFF;
        border-radius: 24px;

        >.title {
          height: 60px;
          display: flex;
          align-items: center;

          .icon {
            width: 14px;
            height: 14px;
          }

          .text {
            margin-left: 12px;

            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
        }

        >.content {
          margin-top: 32px;

          display: flex;
          flex-wrap: wrap;
          gap: 30px;

          .flag {
            width: 14%;
            display: flex;
            align-items: center;

            .icon {
              width: 30px;
              height: 20px;
            }

            .text {
              margin-left: 10px;

              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .flags-container {
    margin-top: 6.25rem;

    >.flags {
      >.title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      >.sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
      }

      >.flag-groups {
        margin-top: 3.13rem;

        .flag-group {
          padding: 1.25rem;
          padding-bottom: 3.13rem;
          border-radius: 1.5rem;

          >.title {
            height: 5.13rem;

            .icon {
              width: 1.25rem;
              height: 1.25rem;
            }

            .text {
              margin-left: 0.63rem;

              font-size: 1.88rem;
              line-height: 2.63rem;
            }
          }

          >.content {
            margin-top: 3.13rem;
            gap: 4.38rem 0;

            .flag {
              width: 33.3%;

              .icon {
                width: 2.88rem;
                height: 1.88rem;
              }

              .text {
                margin-left: 0.5rem;

                font-size: 1.38rem;
                line-height: 1.88rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
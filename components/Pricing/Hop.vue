<template>
  <div class="hop-container">
    <div class="hop page-container">
      <div class="title">{{ $t('pricing.cdn.hop.title') }}</div>
      <div class="sub-title">{{ $t('pricing.cdn.hop.subTitle') }}</div>
      <div class="list">
        <div class="item" v-for="item in i18ntext">
          <div class="head">
            <div
              class="icon"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="title-container">
              <div class="title">{{ item.title }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
            </div>
          </div>
          <div class="btn-container">
            <a :href="item.href" class="trail-btn">{{ item.btn }}</a>
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
      icon: '/images/pricing/cdn/Pricing_CDN_ic_Storage.png',
      title: 'Gowaf Storage',
      subTitle: 'From $0.01 /GB',
      btn: 'See pricing details',
      href: '#'
    },
    {
      icon: '/images/pricing/cdn/Pricing_CDN_ic_Optimizer.png',
      title: 'Gowaf Optimizer',
      subTitle: '$9.50 /website',
      btn: 'See pricing details',
      href: '#'
    },
    {
      icon: '/images/pricing/cdn/Pricing_CDN_ic_Stream.png',
      title: 'Gowaf Stream',
      subTitle: 'From $0.005 /GB',
      btn: 'See pricing details',
      href: '#'
    }
  ];
});
</script>
<style lang="less" scoped>
.hop-container {
  margin-top: 120px;

  .hop {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }

    > .list {
      margin-top: 80px;

      display: flex;
      justify-content: space-around;

      > .item {
        width: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;

        > .head {
          display: flex;
          flex-direction: column;
          align-items: center;

          > .icon {
            width: 100px;
            height: 100px;
          }

          > .title-container {
            display: flex;
            flex-direction: column;
            align-items: center;

            > .title {
              margin-top: 20px;

              font-weight: 500;
              font-size: 20px;
              line-height: 28px;
            }

            > .sub-title {
              margin-top: 10px;

              font-size: 16px;
              color: #4e4e4e;
            }
          }
        }

        > .btn-container {
          margin-top: 20px;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .hop-container {
    margin-top: 6.25rem;

    .hop {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      > .list {
        margin: 3.13rem auto 0;

        width: 29rem;
        flex-direction: column;
        gap: 3.13rem;

        > .item {
          width: auto;

          > .head {
            flex-direction: row;

            > .icon {
              width: 9.38rem;
              height: 9.38rem;
            }

            > .title-container {
              margin-left: 1.87rem;

              align-items: flex-start;
              justify-content: center;

              > .title {
                margin-top: 0;

                font-size: 2.13rem;
                line-height: 3rem;
                text-align: left;
              }

              > .sub-title {
                margin-top: 0.63rem;

                font-size: 1.5rem;
                line-height: 2.19rem;
                text-align: left;
              }
            }
          }

          > .btn-container {
            margin-top: 1.25rem;

            width: 100%;

            .trail-btn {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

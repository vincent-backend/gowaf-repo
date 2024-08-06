<template>
  <div class="protect-at-edge-container">
    <div class="protect-at-edge page-container">
      <div class="title">{{ $t('network.ddos.protectAtEdge.title') }}</div>
      <div class="sub-title">
        {{ $t('network.ddos.protectAtEdge.subTitle') }}
      </div>
      <div class="pic"></div>
      <div class="features">
        <div
          class="item"
          v-for="item in i18ntext"
        >
          <span class="icon"></span>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    t('i0JbhmSg5DxKA27fxGnwZ'),
    t('Mq2oYwHuy8d0lTT68s3Yc'),
    t('cKUXvvRXSOIvkf5ILaPAD'),
    t('dRVUsQYzQJXzq7-pueoEP'),
    t('OE3RE-ArbLCJtQjtNiwsg')
  ];
});
</script>
<style lang="less" scoped>
.protect-at-edge-container {
  margin-top: 80px;

  .protect-at-edge {
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

    > .pic {
      margin: 80px auto 0;

      width: 1102px;
      height: 368px;
      background: url(/public/images/network/ddos/Network_DDoS_flow.png)
        no-repeat;
    }

    > .features {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      gap: 30px;

      .item {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;

        .icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
          border-radius: 50%;
          margin-right: 10px;

          &::before {
            content: '';
            width: 14px;
            height: 14px;
            background: url(/public/images/network/ddos/home_Text_list_ic_tick@2x.png);
            background-size: cover;
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .protect-at-edge-container {
    margin-top: 6.25rem;

    .protect-at-edge {
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

      > .pic {
        margin-top: 3.13rem;

        width: 46.88rem;
        height: 60rem;
        background: url(/public/mobile-images/network/ddos/Network_DDoS_flow@2x.png);
      }

      > .features {
        margin-top: 3.13rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2.5rem 0;

        .item {
          width: 50%;
          font-size: 1.63rem;
          line-height: 2.31rem;

          .icon {
            width: 2.25rem;
            height: 2.25rem;
            margin-right: 1.25rem;

            &::before {
              width: 1.25rem;
              height: 1.25rem;
            }
          }
        }
      }
    }
  }
}
</style>

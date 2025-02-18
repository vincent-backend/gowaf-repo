<template>
  <div class="intuitive-panels-container">
    <div class="intuitive-panels page-container">
      <div class="title">
        {{ $t('products.cdn.overview.intuitivePanels.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.intuitivePanels.subTitle') }}
      </div>
      <Line top="30px" m-top="2.2rem" />
      <CommonTabs :tabs="i18ntext" v-model:cur-tab="curTab" />
      <template v-for="(tab, index) in i18ntext">
        <div class="tab-content" v-if="index === curTab">
          <div class="content">{{ tab.content }}</div>
          <div
            class="pic"
            :style="
              $device.isMobile
                ? {
                    backgroundImage: `url(${tab.pic})`,
                    width: tab.mpicWidth,
                    height: tab.mpicHeight
                  }
                : {
                    backgroundImage: `url(${tab.pic})`,
                    width: tab.picWidth,
                    height: tab.picHeight
                  }
            "
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const curTab = ref(0);
const { t } = useI18n();
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
const i18ntext = computed<any>(() => {
  return props.list
    ? props.list
    : [
        {
          tab: t('tH1lXAaLYgRyEQSvJaAcN'),
          content: t('ddlCZufTsX4BEKX3YzB2K'),
          pic: '/images/products/cdn/overview/cdn_overview_mockup@2x.png',
          picWidth: '760px',
          picHeight: '480px',
          mpicWidth: '38.72rem',
          mpicHeight: '24.44rem'
        },
        {
          tab: t('gzfSWwGIJzFT-bIUZoEtQ'),
          content: t('0buAGSOd1EtlxA7uG6y3c'),
          pic: '/images/products/cdn/overview/cdn_overview_mockup@2x.png',
          picWidth: '760px',
          picHeight: '480px',
          mpicWidth: '38.72rem',
          mpicHeight: '24.44rem'
        },
        {
          tab: t('mC_E6AGWntvPccYLCjx0U'),
          content: t('Y43wQu1zLlL_sjReUkI9R'),
          pic: '/images/products/cdn/overview/cdn_overview_mockup@2x.png',
          picWidth: '760px',
          picHeight: '480px',
          mpicWidth: '38.72rem',
          mpicHeight: '24.44rem'
        },
        {
          tab: t('7vxHpe4sfv4-cvDaS0NpM'),
          content: t('bKc5OsHYwh5tU3ggL64S0'),
          pic: '/images/products/cdn/overview/cdn_overview_mockup@2x.png',
          picWidth: '760px',
          picHeight: '480px',
          mpicWidth: '38.72rem',
          mpicHeight: '24.44rem'
        }
      ];
});
</script>

<style lang="less" scoped>
.intuitive-panels-container {
  margin-top: 90px;
  background: url(/images/products/cdn/overview/cdn_overview_9_bg.png);
  background-size: 1920px 951px;
  height: 951px;

  .intuitive-panels {
    > .title {
      margin-top: 30px;

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

    > .tab-content {
      margin-top: 30px;

      > .content {
        font-size: 16px;
        color: #4e4e4e;

        text-align: center;
      }

      > .pic {
        margin: 50px auto 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .intuitive-panels-container {
    height: fit-content;
    margin-bottom: 7.8rem;
    .intuitive-panels {
      > .title {
        margin-top: 0;
        font-weight: 500;
        font-size: 2.22rem;
        line-height: 3.11rem;
        text-align: left;
      }

      > .sub-title {
        width: 90%;
        margin-top: 0.89rem;
        font-weight: 400;
        font-size: 1.56rem;
        color: #4e4e4e;
        line-height: 2.11rem;
        text-align: left;
      }

      > .tab-content {
        margin-top: 30px;

        > .content {
          font-size: 16px;
          color: #4e4e4e;

          text-align: center;
        }

        > .pic {
          margin: 50px auto 0;
        }
      }
    }
  }
}
</style>

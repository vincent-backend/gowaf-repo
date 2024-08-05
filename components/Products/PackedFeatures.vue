<template>
  <div class="packed-features-container">
    <div class="packed-features page-container">
      <div class="title">
        {{ $t('products.stream.overview.packedFeatures.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.stream.overview.packedFeatures.subTitle') }}
      </div>
      <div class="content">
        <div
          class="item"
          v-for="item in i18ntext"
        >
          <div
            class="icon"
            :style="{ backgroundImage: `url(${item.icon})` }"
          ></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed<any>(() => {
  return [
    {
      icon: '/images/products/stream/overview/stream_overview_ic_aicontest@2x.png',
      title: 'AI Content Tagging'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_customizable@2x.png',
      title: 'Customizable Player'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_api@2x.png',
      title: 'Simple API'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_watermarking@2x.png',
      title: 'Watermarking Player'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_hotlinking@2x.png',
      title: 'Hotlinking Protection'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_hotlinking@2x.png',
      title: 'Customizable Transcoding'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_drm@2x.png',
      title: 'Enterprise DRM'
    },
    {
      icon: '/images/products/stream/overview/stream_overview_ic_token@2x.png',
      title: 'Token Authentication'
    }
  ];
});
</script>

<style lang="less" scoped>
.packed-features-container {
  margin-top: 120px;

  .packed-features {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin: 20px auto 0;

      width: 560px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;

      > .item {
        width: 25%;
        height: 162px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #e6e6e6;
        margin-right: -1px;
        margin-bottom: -1px;

        .icon {
          width: 44px;
          height: 44px;
        }

        .title {
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .packed-features-container {
    margin-top: 6.25rem;

    .packed-features {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: center;
      }

      > .sub-title {
        margin: 0.9rem auto 0;
        width: 43.13rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: center;
      }

      > .content {
        margin-top: 2.38rem;
        display: flex;
        flex-wrap: wrap;

        > .item {
          width: 50%;
          height: 13.69rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          border: 1px solid #e6e6e6;
          margin-right: -1px;
          margin-bottom: -1px;
          padding: 1.3rem;

          .icon {
            width: 4.13rem;
            height: 4.13rem;
          }

          .title {
            margin-top: 1.63rem;
            font-weight: 500;
            width: 100%;
            white-space: wrap;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>

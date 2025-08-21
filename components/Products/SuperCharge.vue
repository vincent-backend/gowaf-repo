<template>
  <div class="products-super-charge">
    <div class="products-super page-container">
      <div class="title">
        {{ $t('products.cdn.overview.productsSuperCharge.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.cdn.overview.productsSuperCharge.subTitle') }}
      </div>
      <div class="list">
        <div
          class="item"
          v-for="item in i18ntext"
        >
          <img class="icon" :width="obeyDevice('88px', '66px').value" :src="item.icon" />
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const i18ntext = computed<any>(() => {
  return [
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_1@2x.png',
      title: 'Website CDN'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_2@2x.png',
      title: 'Image CDN'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_3@2x.png',
      title: 'Video CDN'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_4@2x.png',
      title: 'Gaming CDN'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_5@2x.png',
      title: 'Software Distribution'
    },
    {
      icon: '/images/products/cdn/overview/cdn_overview_supercharge_ic_6@2x.png',
      title: 'WordPress CDN'
    }
  ];
});
</script>
<style lang="less" scoped>
.products-super-charge {
  margin-top: 87px;

  .products-super {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .sub-title {
      margin-top: 20px;
      font-size: 16px;
      color: #4e4e4e;
    }

    > .list {
      margin-top: 64px;
      display: flex;
      flex-wrap: wrap;

      > .item {
        width: 33.3%;
        box-sizing: border-box;
        text-align: center;
        vertical-align: middle;
        padding-top: 22px;
        padding-bottom: 22px;
        border: 1px solid #e6e6e6;

        > .title {
          margin-top: 14px;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .products-super-charge {
    margin-top: 3rem;

    .products-super {
    > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .sub-title {
        font-size: 1.75rem;
      }
    }
  }
}
</style>

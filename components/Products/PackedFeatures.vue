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
          v-for="item in $tm('products.stream.overview.packedFeatures.items')"
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
</style>

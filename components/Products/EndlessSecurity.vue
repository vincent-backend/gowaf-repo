<template>
  <div class="endless-security-container">
    <div class="endless-security page-container">
      <div class="title">
        {{ $t('products.stream.multiDRM.endlessSecurity.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.stream.multiDRM.endlessSecurity.subTitle') }}
      </div>
      <div class="content" v-if="!$device.isMobile">
        <CommonMultiLine
          class="tag tag-1"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.sourceVideo')
          "
        />
        <CommonMultiLine
          class="tag tag-2"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.drmService')
          "
        />
        <CommonMultiLine
          class="tag tag-3"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.generateKey')
          "
        />
        <CommonMultiLine
          class="tag tag-4"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.contentKey')
          "
        />
        <CommonMultiLine
          class="tag tag-5"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.transcode')
          "
        />
        <CommonMultiLine
          class="tag tag-6"
          :text="
            $t(
              'products.stream.multiDRM.endlessSecurity.content.packageEncryption'
            )
          "
        />
        <CommonMultiLine
          class="tag tag-7"
          :text="$t('products.stream.multiDRM.endlessSecurity.content.storage')"
        />
        <CommonMultiLine
          class="tag tag-8"
          :text="
            $t('products.stream.multiDRM.endlessSecurity.content.watermark')
          "
        />
        <CommonMultiLine
          class="tag tag-9"
          :text="$t('products.stream.multiDRM.endlessSecurity.content.cdn')"
        />
      </div>
      <div class="content" v-else></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.endless-security-container {
  margin-top: 120px;

  .endless-security {
    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 18px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 60px;

      height: 1041px;
      background: url(/images/products/stream/multi-drm/stream_mulitdrm_3_img@2x.png)
        center;
      background-size: 1508px 1041px;
      position: relative;

      .tag {
        position: absolute;

        color: #4e4e4e;
        line-height: 20px;
        text-align: center;

        width: 600px;
        margin-left: -300px;

        &.tag-1 {
          top: 300px;
          left: 600px;
        }

        &.tag-2 {
          top: 580px;
          left: 600px;
        }

        &.tag-3 {
          top: 700px;
          left: 490px;
        }

        &.tag-4 {
          top: 700px;
          left: 710px;
        }

        &.tag-5 {
          top: 850px;
          left: 310px;
        }

        &.tag-6 {
          top: 850px;
          left: 600px;
        }

        &.tag-7 {
          top: 850px;
          left: 880px;
        }

        &.tag-8 {
          top: 1040px;
          left: 320px;
        }

        &.tag-9 {
          top: 1040px;
          left: 880px;
        }
      }
    }

    > .content {
    }
  }
}
@media (max-width: 767px) {
  .endless-security-container {
    margin-top: 6.25rem;

    .endless-security {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
        margin-top: 2.25rem;
        height: 69.88rem;
        width: 43.88rem;
        box-sizing: border-box;
        background: url(/public/mobile-images/products/stream/MultiDRM/EndlesssecurityLimitlessDelivery@2x.png)
          center;
        background-size: contain !important;
        background-repeat: no-repeat;
        position: relative;
      }
    }
  }
}
</style>

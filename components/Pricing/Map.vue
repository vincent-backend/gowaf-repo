<script lang="ts" setup>
withDefaults(defineProps<{
  content?: {
    title?: string;
    subTitle?: string;
  };
  showFoot?: boolean;
}>(), {
  showFoot: true,
});
</script>
<template>
  <div class="pricing-map-container">
    <div class="pricing-map page-container">
      <div class="title">{{ content?.title }}</div>
      <div class="sub-title">{{ content?.subTitle }}</div>
      <div class="map-container">
        <div class="map">
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing-map-container {
  margin-top: 120px;

  .pricing-map {
    >.title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    >.sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4E4E4E;
      text-align: center;
    }

    >.map-container {
      margin-top: 40px;

      width: 1200px;
      height: 589px;
      background: #FFFFFF;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .map {
        width: 896px;
        height: 512px;
        background: url(/public/images/pricing/storage/home_map.png);
        position: relative;

        .dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(90deg, #46CF3A 0%, #36CFBC 100%);
          border: 4px solid rgba(65, 207, 99, 0.18);
          border-radius: 50%;
          position: absolute;
          left: 300px;
          top: 100px;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .pricing-map-container {
    margin-top: 6.25rem;

    .pricing-map {
      >.title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      >.sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      >.map-container {
        margin-top: 3.13rem;

        width: 43.13rem;
        height: 30rem;
        border-radius: 0;

        .map {
          width: 43.13rem;
          height: 30rem;

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-width: 0.25rem;
            left: 22rem;
            top: 24rem;
          }
        }
      }
    }
  }
}
</style>
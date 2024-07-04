<template>
  <div class="hop-container">
    <div class="hop page-container">
      <div class="left">
        <div class="title">
          {{ $t('network.overview.hop.title') }}
        </div>
        <div class="sub-title">
          {{ $t('network.overview.hop.subTitle') }}
        </div>
        <div>
          <a href="#" class="trail-btn">
            {{ $t('network.overview.hop.btn') }}
          </a>
        </div>
      </div>
      <div class="right">
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hop-container {
  margin-top: 80px;

  height: 330px;
  background: linear-gradient(180deg, #e6edfc 0%, #ffffff 100%);

  .hop {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      .title {
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      .sub-title {
        margin-top: 10px;

        font-size: 16px;
        color: #4e4e4e;
      }

      .trail-btn {
        margin-top: 40px;
      }
    }

    .right {
      .pic {
        width: 300px;
        height: 300px;
        background: url(/public/images/network/Network_Overview_banner_graph.png);
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .hop-container {
    margin-top: 6.25rem;

    height: 28rem;

    .hop {
      width: 100%;
      padding-left: 1.88rem;

      .left {
        .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        .sub-title {
          margin-top: 1rem;

          font-size: 1.63rem;
          line-height: 2.38rem;
        }

        .trail-btn {
          margin-top: 2.5rem;
        }
      }

      .right {
        .pic {
          width: 18.75rem;
          height: 18.75rem;
        }
      }
    }
  }
}
</style>

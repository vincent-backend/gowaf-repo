<template>
  <div class="stay-protect-always-container">
    <div class="stay-protect-always page-container">
      <div class="left">
        <div class="title">
          {{ $t('network.ddos.stayProtectAlways.title') }}
        </div>
        <div class="sub-title">
          {{ $t('network.ddos.stayProtectAlways.subTitle') }}
        </div>
        <div class="btn-container">
          <a href="#" class="trail-btn">{{
            $t('network.ddos.stayProtectAlways.btn')
          }}</a>
        </div>
      </div>
      <div class="right">
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.stay-protect-always-container {
  margin-top: 120px;
  background: linear-gradient(180deg, #e6edfc 0%, #ffffff 100%);
  height: 330px;

  .stay-protect-always {
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

      .btn-container {
        margin-top: 40px;
      }
    }

    .right {
      .pic {
        width: 238px;
        height: 242px;
        background: url(/public/images/network/ddos/Network_DDoS_banner_graph_2.png);
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .stay-protect-always-container {
    margin-top: 6.25rem;
    height: 28rem;

    .stay-protect-always {
      .left {
        .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
          width: 20rem;
        }

        .sub-title {
          margin-top: 1rem;

          font-size: 1.63rem;
          line-height: 2.38rem;
        }

        .btn-container {
          margin-top: 2.5rem;
        }
      }

      .right {
        .pic {
          width: 14.88rem;
          height: 15.13rem;
        }
      }
    }
  }
}
</style>

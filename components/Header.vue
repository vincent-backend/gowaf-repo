<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const alertVisible = ref(route.path === '/');
</script>

<template>
  <div class="header-placeholder"></div>
  <div class="header-container">
    <div class="header page-container">
      <div class="left">
        <a href="/" class="logo"></a>
      </div>
      <div class="right lg-only">
        <HeaderMenu />
        <div class="buttons-container">
          <a href="#" class="button button-login">
            {{ $t('header.login') }}
          </a>
          <a href="#" class="button button-get-started">
            {{ $t('header.getStarted') }}
          </a>
          <a href="#" class="button button-lang">
            EN
          </a>
        </div>
      </div>
      <div class="right xs-only">
        <a href="#" class="menu-icon"></a>
      </div>
    </div>
  </div>
  <div class="header-alert-container" v-if="alertVisible">
    <div class="header-alert page-container">
      <div class="left">
        <span class="text">
          {{ $t('header.alert.text') }}
        </span>
        <span class="rocket"></span>
        <a href="/bookmeeting" class="btn">
          {{ $t('header.alert.btn') }}
        </a>
      </div>
      <div class="right">
        <a href="#" class="close" @click.prevent="alertVisible = false"></a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header-placeholder {
  height: 60px;
}

.header-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, .6);
  backdrop-filter: blur(5px);

  .header {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .left {
      display: flex;
      align-items: center;

      .logo {
        display: block;
        width: 112px;
        height: 32px;
        background: url(/public/images/home/logo2.png);
      }
    }

    .right {
      display: flex;

      .buttons-container {
        display: flex;
        align-items: center;
        margin-left: 34px;
        gap: 10px;

        .button {
          &.button-login {
            width: 62px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid rgba(70, 207, 58, 1);
            display: flex;
            align-items: center;
            justify-content: center;




            color: #46CF3A;
            line-height: 18px;


          }

          &.button-get-started {
            width: 100px;
            height: 30px;
            background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;




            color: #FFFFFF;
            line-height: 18px;


          }

          &.button-lang {
            width: 62px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid #E6E6E6;
            display: flex;
            align-items: center;
            justify-content: center;





            line-height: 18px;


          }
        }
      }
    }
  }
}

.header-alert-container {
  position: fixed;
  left: 0;
  top: 60px;
  width: 100%;
  z-index: 9;
  height: 50px;
  background: linear-gradient(316deg, #3475F5 0%, #12E599 100%) center;
  background-size: 1920px 50px;

  .header-alert {
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .text {


        font-size: 16px;
        color: #FFFFFF;
        line-height: 18px;


      }

      .rocket {
        margin-left: 4px;

        width: 34px;
        height: 34px;
        background: url(/public/images/home/top_popup_ic_rocket.png);
      }

      .btn {
        margin-left: 20px;

        width: 128px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 15px;




        line-height: 18px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .close {
        width: 20px;
        height: 20px;
        background: url(/public/images/home/top_popup_ic_close_w_nor.png);
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .header-placeholder {
    height: 5.5rem;
  }

  .header-container {
    height: 5.5rem;

    .header {
      .left {
        .logo {
          width: 10.5rem;
          height: 3rem;
          margin-left: 1.87rem;
        }
      }

      .right {
        .menu-icon {
          width: 5.5rem;
          height: 5.5rem;
          margin-right: 0.31rem;
          background-image: url(/public/mobile-images/home/home_menu@2x.png);
        }
      }
    }
  }

  .header-alert-container {
    display: none;
  }
}
</style>
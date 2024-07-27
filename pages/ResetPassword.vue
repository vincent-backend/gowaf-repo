<template>
  <div class="bg">
    <LgOnly>
      <div class="page-container">
        <div class="logo-header">
          <img src="/public/images/home/Gowaf_logo+文字.png" alt="" />
        </div>
        <div class="body">
          <HomeResetleftList />
          <div class="login-body">
            <HomeResetPasswordform />
            <div class="tips">
              <span class="hit" @click="$router.push({ path: '/login' })">
                {{ $t('home.ResetPassword.BacktoLog In') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </LgOnly>
    <XsOnly>
      <div class="xs-login-body">
        <HomeResetPasswordform />
        <div class="tips">
          <span class="hit" @click="$router.push({ path: '/login' })">
            {{ $t('home.ResetPassword.BacktoLog In') }}
          </span>
        </div>
      </div>
    </XsOnly>
  </div>
  <HomeBacktop />
</template>

<script setup lang="ts">
const showType = ref('login');
</script>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background: url('/public/images/home/home_banner_bg@2x.png');
  background-size: 1920px 800px;
  .page-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .logo-header {
      margin-top: 14px;
      img {
        width: 120px;
      }
    }
  }
}
.body {
  display: flex;
  flex: 1;
  align-items: center;
}
.login-body {
  margin-left: auto;
  width: 550px;
  box-sizing: border-box;
  padding: 50px;
  height: 430px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  .ssolist {
    display: flex;
    justify-content: center;
    gap: 40px;
    .item {
      width: 36px;
      cursor: pointer;
      height: 36px;
    }
    .google {
      background: url('/public//images/home/log_logo_google@2x.png');
    }
    .gitlab {
      background: url('/public//images/home/log_logo_gitlab@2x.png');
    }
    .okta {
      background: url('/public//images/home/log_logo_okta@2x.png');
    }
  }
  .tips {
    text-align: center;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #4e4e4e;
    line-height: 20px;
    font-style: normal;
    text-transform: none;
    .hit {
      cursor: pointer;
      color: #0ebf6a;
    }
  }
}

.xs-login-body {
  width: 100vw;
  height: 100vh;
  padding: 10.25rem 5rem 0;
  box-sizing: border-box;
  .ssolist {
    display: flex;
    justify-content: center;
    gap: 5rem;
    .item {
      width: 4.5rem;
      height: 4.5rem;
      cursor: pointer;
    }
    .google {
      background: url('/public//images/home/log_logo_google@2x.png');
    }
    .gitlab {
      background: url('/public//images/home/log_logo_gitlab@2x.png');
    }
    .okta {
      background: url('/public//images/home/log_logo_okta@2x.png');
    }
  }
  .tips {
    margin-top: 3.75rem;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 1.75rem;
    color: #4e4e4e;
    line-height: 2.5rem;
    text-align: center;
    font-style: normal;
    text-transform: none;
    .hit {
      margin-left: 1rem;
      color: #0ebf6a;
      cursor: pointer;
    }
  }
}
</style>

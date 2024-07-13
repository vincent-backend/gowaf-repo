<template>
  <div class="bg">
    <div class="page-container">
      <div class="logo-header">
        <img src="/public/images/home/logo.png" alt="" />
      </div>
      <div class="body">
        <div class="left-list">
          <div
            class="home-item"
            v-for="(item, index) in $tm('home.login.list')"
            :key="index"
          >
            <div class="img"></div>
            <div class="main">
              <div class="icon"></div>
              <div class="text-content">
                <div class="title">{{ item.title }}</div>
                <div class="content">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="login-body">
          <div class="Welcome">
            {{ $t('home.login.title') }}
          </div>
          <div class="sub-text">
            {{ $t('home.login.subtitle') }}
          </div>
          <el-form label-position="top" :model="formLabelAlign" size="large">
            <el-form-item label="Email">
              <el-input
                v-model="formLabelAlign.Email"
                placeholder="Your Email"
              />
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                v-model="formLabelAlign.Password"
                type="password"
                placeholder="Your Password"
                show-password
              />
            </el-form-item>
          </el-form>
          <div class="Forgot">
            <el-button type="text">
              {{ $t('home.login.Forgot') }}
            </el-button>
          </div>
          <div class="login-btn">
            <div class="main_in">
              {{ $t('home.login.loginbtn') }}
            </div>
          </div>
          <el-divider>
            {{ $t('home.login.divider') }}
          </el-divider>
          <div class="ssolist">
            <div class="item google"></div>
            <div class="item gitlab"></div>
            <div class="item okta"></div>
          </div>
          <div class="tips">
            {{ $t('home.login.tips') }}
            <span class="hit"> {{ $t('home.login.signUp') }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-backtop :bottom="40" :right="50" :visibility-height="0">
    <img
      class="backtop"
      src="/public/images/home/suspension_btn_nor@2x.png"
      alt=""
    />
  </el-backtop>
</template>

<script setup lang="ts">
const formLabelAlign = reactive({
  Email: '',
  Password: ''
});
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
    }
  }
}
.backtop {
  width: 144px;
  height: 144px;
}
.body {
  display: flex;
  flex: 1;
  align-items: center;
  .left-list {
    width: 530px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .home-item {
      display: flex;
      flex-direction: column;
      .img {
        width: 100px;
        height: 100px;
        margin-left: 30px;
      }
    }
    .main {
      display: flex;
      gap: 14px;
      .icon {
        margin-top: 12px;
        width: 16px;
        height: 4px;
        background: linear-gradient(270deg, #46cf3a 0%, #36cfbc 100%);
      }
      .text-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .content {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #4e4e4e;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
.login-body {
  margin-left: auto;
  width: 550px;
  box-sizing: border-box;
  padding: 50px;
  height: 696px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
  border: 1px solid #e6e6e6;
  width: 550px;
  height: 696px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  .Welcome {
    font-family: Mont, Mont;
    font-weight: bold;
    font-size: 30px;
    color: #000000;
    line-height: 40px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-bottom: 12px;
  }
  .sub-text {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-bottom: 50px;
  }
  .Forgot {
    text-align: right;
    .el-button {
      background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .login-btn {
    margin-top: 30px;
    margin-bottom: 40px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 2px;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(70, 207, 58, 1),
      rgba(54, 207, 188, 1)
    );
    border-radius: 25px;
    .main_in {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-radius: 25px;
      background: #fff;
    }
  }
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
    margin-top: 20px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #4e4e4e;
    line-height: 20px;
    font-style: normal;
    text-transform: none;
    .hit {
      color: #0ebf6a;
    }
  }
}
</style>

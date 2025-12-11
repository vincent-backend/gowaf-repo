<template>
  <div class="Welcome">
    {{ $t('home.login.title') }}
  </div>
  <div class="sub-text">
    {{ $t('home.login.subtitle') }}
  </div>
  <el-form label-position="top" :model="formLabelAlign" size="large">
    <el-form-item label="Email">
      <el-input v-model="formLabelAlign.Email" placeholder="Your Email" />
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
    <el-button type="text" @click="$emit('toForgot')">
      {{ $t('home.login.Forgot') }}
    </el-button>
  </div>
  <div class="login-btn">
    <div class="main_in">
      {{ $t('home.login.loginbtn') }}
    </div>
  </div>
</template>

<script setup lang="ts">
const formLabelAlign = reactive({
  Email: '',
  Password: ''
});

defineEmits(['toForgot'])
</script>
<style lang="scss" scoped>
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

// For tablet devices
@media (min-width: 767px) and (max-width: 1260px) {
  .Welcome {
    font-size: 27px;
  }
}
</style>

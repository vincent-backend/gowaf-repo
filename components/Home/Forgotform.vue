<template>
  <div class="Welcome">
    {{ $t('home.forgot.title') }}
  </div>
  <div class="sub-text">
    {{ $t('home.forgot.subtitle') }}
  </div>
  <el-form label-position="top" :model="formLabelAlign" size="large">
    <el-form-item label="Email （Required）">
      <el-input v-model="formLabelAlign.Email" placeholder="Your Email" />
    </el-form-item>
    <el-form-item label="Password （Required）">
      <el-input
        v-model="formLabelAlign.Password"
        type="password"
        placeholder="Your Password"
        show-password
      />
    </el-form-item>
    <div class="agreement">
      <el-checkbox v-model="formLabelAlign.checked" size="large">
        <template v-for="(item, index) in i18ntext">
          <font :class="{ green: [1, 3, 5].includes(index) }">{{ item }}</font>
        </template>
      </el-checkbox>
    </div>
  </el-form>
  <div class="login-btn">
    <div class="main_in">
      {{ $t('home.forgot.loginbtn') }}
    </div>
  </div>
</template>

<script setup lang="ts">
const formLabelAlign = reactive({
  Email: '',
  Password: '',
  checked: false
});
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    'I agree to the',
    ' Terms of Service ',
    ',',
    ' Acceptable Use Policy ',
    ' and confirm that I have read and understood the Gowaf.net ',
    ' Privacy Policy',
    '.'
  ];
});
defineEmits(['toForgot']);
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
.agreement {
  font-family: PingFangSC, PingFang SC;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: #4e4e4e;
  line-height: 20px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 30px;
  .green {
    color: #0ebf6a;
  }
  :deep(.el-checkbox) {
    display: inline-flex;
    max-width: 100%;
    align-items: flex-start;
    height: fit-content;
    .el-checkbox__input {
      margin-top: 10px;
    }
    .el-checkbox__label {
      white-space: break-spaces;
      /* display: inline-flex;
      flex-wrap: wrap;
      gap: 2px;
      max-width: 100%;
      span{
        word-break: break-all;
      } */
    }
  }
}
@media (max-width: 767px) {
}
</style>

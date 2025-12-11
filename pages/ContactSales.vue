<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('home.ContactSales.preTitle')"
    :title="$t('home.ContactSales.title')"
    :content="$t('home.ContactSales.content')"
    :show-foot="false"
    href="#"
    :pic="{
      src: '/images/home/Contact_banner_graph@2x.png',
      w: '420px',
      h: '340px',

      msrc: '/images/home/Contact_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '21.25rem'
    }"
  />
  <div class="form-body">
    <div class="main">
      <el-form label-position="top" :model="formLabelAlign" size="large">
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item :label="$t('bookMeeting.form.firstName')">
              <el-input
                v-model="formLabelAlign.name"
                placeholder="you@company.com"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item :label="$t('bookMeeting.form.email')">
              <el-input
                v-model="formLabelAlign.Email"
                placeholder="you@company.com"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item :label="$t('julCA-wYBln_3hd-CXD1x')">
              <el-input
                v-model="formLabelAlign.Company"
                :placeholder="$t('gDMESIucrKAY1dP2SDmtw')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item :label="$t('uvaBuP8EnBwWVql2Ynbl9')">
              <el-input
                v-model="formLabelAlign.Website"
                :placeholder="$t('tRSXC4HoRK4zUekLKR6_D')"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item
              :label="$t('products.stream.multiDRM.email.form.phone')"
            >
              <el-input
                v-model="formLabelAlign.Phone"
                placeholder="XXX-XXX-XXXX"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item :label="$t('V_IPWjfJ-sBGR9n_wPXhW')">
              <el-input
                v-model="formLabelAlign.link"
                :placeholder="
                  $t('pricing.cdn.getInTouch.form.placeholderEstimatedTraffic')
                "
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item
              :label="$t('pricing.cdn.getInTouch.form.labelMessage')"
            >
              <el-input
                type="textarea"
                v-model="formLabelAlign.Message"
                :placeholder="$t('hJ3T-p3qQf7PgrqS___dW')"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item
              :label="$t('pricing.cdn.getInTouch.form.labelMessage')"
            >
              <div class="Message-list">
                <div
                  class="item"
                  v-for="(item, index) in list"
                  :class="{ activation: index == activt }"
                  :key="index"
                  @click="activt = index"
                >
                  <span class="text">{{ item }}</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="agreement">
          <el-checkbox v-model="formLabelAlign.checked" size="large">
            <template v-for="(item, index) in i18ntext">
              <font :class="{ green: [1].includes(index) }">{{ item }}</font>
            </template>
          </el-checkbox>
        </div>
      </el-form>
      <div class="login-btn">
        <div class="main_in">
          {{ $t('home.ContactSales.btn') }}
        </div>
      </div>
    </div>
  </div>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const formLabelAlign = reactive({
  name: '',
  Email: '',
  Password: '',
  Company: '',
  Website: '',
  Phone: '',
  link: '',
  Message: '',
  checked: false
});
const activt = ref(0);
const list = ref([
  t('aBftC0NbhkPUijTrsMnBe'),
  t('rdI5DzifSOJQFhOQKXHLt'),
  t('ox63H4b0g7BmPkvezLtWP'),
  t('uLYOzWAiNHHdOADYCEqMl'),
  t('solutions.storageSoftware.header.preTitle'),
  t('MiD8TA8CBSTQcgl2doZJo')
]);

const i18ntext = computed<any>(() => {
  return [
    t('resources.caseStudies.header.hint'),
    t('pricing.cdn.getInTouch.form.agreeLink')
  ];
});
</script>
<style lang="scss" scoped>
.form-body {
  background: #fafafa;
  height: 818px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  padding: 6rem 0;
  .main {
    height: 818px;
    background: #ffffff;
    box-shadow: 0px 10px 30px 0px rgba(166, 183, 183, 0.1);
    border-radius: 24px;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 50px 200px;
    margin: 3rem;
    z-index: 11;
  }
}
.Message-list {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  .item {
    width: 190px;
    height: 44px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ecfbee;
    cursor: pointer;
    .text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &.activation {
      background: linear-gradient(90deg, #46cf3a 0%, #36cfbc 100%);
      .text {
        color: #fff;
        background: none;
        -webkit-text-fill-color: unset;
      }
    }
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
    /* display: inline-flex; */
    /* height: fit-content; */
    .el-checkbox__label {
      white-space: break-spaces;
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* gap: 2px; */
    }
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
@media (max-width: 767px) {
  .form-body {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    .main {
      width: 43.13rem;
      height: fit-content;
      background: #ffffff;
      box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(166, 183, 183, 0.1);
      border-radius: 3rem;
      border: 0.06rem solid #e6e6e6;
      margin-top: -5.4rem;
      box-sizing: border-box;
      padding: 2.88rem 2.8rem;
      z-index: 11;
    }
  }
  .Message-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .item {
      width: 18.13rem;
      height: 5rem;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ecfbee;
      cursor: pointer;
      .text {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &.activation {
        background: linear-gradient(90deg, #46cf3a 0%, #36cfbc 100%);
        .text {
          color: #fff;
          background: none;
          -webkit-text-fill-color: unset;
        }
      }
    }
  }
}
</style>

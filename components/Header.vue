<script lang="ts" setup>
import { options } from '~/consts/lang';
const route = useRoute();
const { locale, messages, setLocale, setLocaleCookie } = useI18n();
const localePath = useLocalePath();

const isHome = route.path === localePath('/');
const alertVisible = ref(isHome);
const ProductsPopoverRef = ref();
const show = ref(false);
const cookie = useCookie('i18n_redirected');

const handleBack = () => {
  window.history.back();
};
const ProductsRef = ref();

const changeLang = async (item: any) => {
  locale.value = item.href;
  setLocale(item.href);
  setLocaleCookie(item.href);
  ProductsPopoverRef.value.hide();
};

const showText = computed(() => {
  const item = options.find(el => {
    return el.href === cookie.value;
  });
  return item ? item.text : 'EN';
});
</script>

<template>
  <div class="header-placeholder"></div>
  <div class="header-container">
    <div class="header page-container">
      <LgOnly>
        <div class="left">
          <NuxtLinkLocale to="/" class="logo"></NuxtLinkLocale>
        </div>
      </LgOnly>
      <XsOnly>
        <div class="left" v-if="isHome">
          <NuxtLinkLocale to="/" class="logo"></NuxtLinkLocale>
        </div>
        <div class="left" v-else>
          <NuxtLinkLocale
            class="back"
            @click.prevent="handleBack"
          ></NuxtLinkLocale>
        </div>
        <div class="home-title-text">
          {{ $route.meta.title }}
        </div>
        <HeaderCollapseMenu v-model:show="show" />
      </XsOnly>

      <!-- for laptop -->
      <LgOnly>
        <div class="right">
          <HeaderMenu />
          <div class="buttons-container">
            <NuxtLinkLocale to="/login" class="button button-login">
              {{ $t('header.login') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/forgot" class="button button-get-started">
              {{ $t('header.getStarted') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale class="button button-lang" ref="ProductsRef">
              {{ showText }}
            </NuxtLinkLocale>
            <el-popover
              ref="ProductsPopoverRef"
              popper-class="popper-menu"
              :virtual-ref="ProductsRef"
              trigger="hover"
              width="auto"
              :offset="20"
              virtual-triggering
            >
              <div class="dropdown-container">
                <div
                  class="dropdown-option"
                  v-for="(item, index) in options"
                  :key="index"
                  @click="changeLang(item)"
                >
                  {{ item.text }}
                </div>
              </div>
            </el-popover>
          </div>
        </div>
      </LgOnly>

      <!-- for mobile -->
      <XsOnly>
        <div class="right">
          <NuxtLinkLocale
            :class="show ? 'close-icon' : 'menu-icon'"
            @click.stop="show = !show"
          ></NuxtLinkLocale>
        </div>
      </XsOnly>
    </div>
  </div>
  <div class="header-alert-container" v-if="alertVisible">
    <div class="header-alert page-container">
      <div class="left">
        <span class="text">
          {{ $t('header.alert.text') }}
        </span>
        <span class="rocket"></span>
        <NuxtLinkLocale to="/bookmeeting" class="btn">
          {{ $t('header.alert.btn') }}
        </NuxtLinkLocale>
      </div>
      <div class="right">
        <NuxtLinkLocale
          class="close"
          @click.prevent.stop="alertVisible = false"
        ></NuxtLinkLocale>
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
  z-index: 99;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.6);
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
        width: 114px;
        height: 44px;
        background: url(/images/home/Gowaf_logo+文字.png);
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
            color: #46cf3a;
            line-height: 18px;
          }

          &.button-get-started {
            width: 100px;
            height: 30px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            line-height: 18px;
          }

          &.button-lang {
            cursor: pointer;
            padding: 0 5px;
            min-width: 62px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid #e6e6e6;
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
.dropdown-container {
  min-width: 150px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  .dropdown-option {
    cursor: pointer;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    line-height: 16px;
    text-align: left;
    font-style: normal;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 7px 6px 7px 10px;
    margin-bottom: 6px;
    &.is-active,
    &:hover {
      background: rgba(70, 207, 58, 0.06);
      font-weight: 500;
      color: #46cf3a;
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
  background: linear-gradient(316deg, #3475f5 0%, #12e599 100%) center;
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
        color: #ffffff;
        line-height: 18px;
      }

      .rocket {
        margin-left: 4px;

        width: 34px;
        height: 34px;
        background: url(/images/home/top_popup_ic_rocket.png);
      }

      .btn {
        margin-left: 20px;

        width: 128px;
        height: 30px;
        background: #ffffff;
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
        background: url(/images/home/top_popup_ic_close_w_nor.png);
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
      width: 100%;
      display: flex;
      align-items: center;
      .home-title-text {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.13rem;
        color: #000000;
        text-align: center;
        font-style: normal;
      }
      .left {
        .back {
          margin-left: 1.88rem;
          width: 5.5rem;
          height: 5.5rem;
          background-image: url(/public/mobile-images/network/overview/home_menu_2@2x.png);
        }
        .logo {
          margin-left: 1.88rem;
          width: 10.69rem;
          height: 4.13rem;
        }
      }

      .right {
        padding-right: 1.88rem;
        .menu-icon {
          width: 5.5rem;
          height: 5.5rem;
          background-image: url(/public/mobile-images/home/home_menu@2x.png);
        }
        .close-icon {
          width: 5.5rem;
          height: 5.5rem;
          background-image: url(/public/mobile-images/home/home_close_menu.png);
        }
        .buttons-container {
          display: none;
        }
      }
    }
  }

  .header-alert-container {
    display: none;
  }
}
</style>

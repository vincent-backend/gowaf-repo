<template>
  <el-backtop :bottom="40" :right="50" :visibility-height="0">
    <NuxtImg
      class="backtop"
      @click="dialogVisible = true"
      src="/images/home/suspension_btn_nor@2x.png"
      alt=""
    />
  </el-backtop>
  <el-dialog
    v-model="dialogVisible"
    :width="$device.isMobile ? '43.13rem' : '680'"
    class="custom-dialog"
  >
    <template #title>
      <div class="dialog-top">
        <div class="talking">
          <NuxtImg class="dialog-logo" src="/images/home/Gowaf_logo_1.png" />
          <div class="dialog-row">
            <div class="title">
              {{ $t('home.login.backtop.title1') }}
              <span class="sub">{{ $t('home.login.backtop.sub') }}</span>
            </div>
            <div class="PREVIEW" src="" alt="">PREVIEW</div>
          </div>
        </div>
        <div class="btn-row">
          <NuxtImg
            class="img"
            src="/images/home/chat_ic_praise_nor@2x.png"
            alt=""
          />
          <NuxtImg
            class="img"
            src="/images/home/chat_ic_oppose_nor@2x.png"
            alt=""
          />
          <div class="reset">
            <NuxtImg
              class="img"
              src="/images/home/chat_ic_reset_nor@2x.png"
              alt=""
            />
            {{ $t('llPaodyWXzkjGvbc1-gXM') }}
          </div>
        </div>
      </div>
    </template>
    <div class="main">
      <div class="dialogBox">
        <div class="bold">{{ $t('he4pY-_sfjylaV3hu4P5I') }}</div>
        <div class="ordinary">
          {{ $t('52u8oRFmnPwliIw0v4gTu') }}
        </div>
        <div class="ordinary">
          {{ $t('Ph0sp9NBscLxHmF_LVh3y') }}
        </div>
        <div class="ordinary">
          {{ $t('f59kVHTIgFUHE_5kwrs6w') }}
        </div>
      </div>
      <div class="dialogueInput">
        <el-input
          v-model="textarea"
          style="width: 100%"
          :rows="4"
          type="textarea"
          :placeholder="$t('ReewjMMktc4CpBJjJqaMD')"
        ></el-input>
        <div class="send"></div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const textarea = ref('');
</script>
<style lang="scss" scoped>
.backtop {
  width: 144px;
  height: 144px;
}
.dialog-top {
  display: flex;
  width: 100%;
  height: 172px;
  justify-content: center;
  flex-direction: column;
  .talking {
    display: flex;
    align-items: center;
    gap: 10px;
    .dialog-row {
      display: flex;
      gap: 10px;
      flex-direction: row;
    }
  }
  .dialog-logo {
    width: 50px;
    height: 50px;
  }
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    text-align: left;
    font-style: normal;
    text-transform: none;
    .sub {
      color: #0ebf6a;
    }
  }
  .PREVIEW {
    width: 76px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/images/home/home_card_tag_bg@2x.png');
    background-size: 100% 100%;
  }
  .btn-row {
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
    .img {
      width: 32px;
      height: 32px;
    }
    .reset {
      display: flex;
      gap: 5px;
      width: 94px;
      height: 40px;
      background: #ffffff;
      border-radius: 20px;
      border: 1px solid #e6e6e6;
      justify-content: center;
      align-items: center;
    }
  }
}
.main {
  display: flex;
  flex-direction: column;
  background: #fff;
  .dialogBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    .bold {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .ordinary {
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
.dialogueInput {
  position: relative;
  .send {
    position: absolute;
    cursor: pointer;
    right: 8px;
    bottom: 8px;
    width: 40px;
    height: 40px;
    background: url('/images/home/chat_ic_send@2x.png') no-repeat;
    background-size: 100% 100%;
  }
}
@media (max-width: 767px) {
  .backtop {
    width: 9rem;
    height: 9rem;
  }
  .dialog-top {
    display: flex;
    width: 100%;
    height: 19rem;
    justify-content: center;
    flex-direction: column;
    .talking {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      .dialog-row {
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }
    }
    .dialog-logo {
      width: 6.25rem;
      height: 6.25rem;
    }
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2rem;
      color: #000000;
      line-height: 2.81rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      .sub {
        color: #0ebf6a;
      }
    }
    .PREVIEW {
      width: 9.5rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #ffffff;
      background: url('/images/home/home_card_tag_bg@2x.png');
      background-size: 100% 100%;
    }
    .btn-row {
      display: flex;
      align-items: center;
      margin-top: 2.5rem;
      gap: 2.5rem;
      .img {
        width: 3rem;
        height: 3rem;
      }
      .reset {
        display: flex;
        gap: 1rem;
        width: 10rem;
        height: 4rem;
        background: #ffffff;
        border-radius: 2rem;
        border: 0.06rem solid #e6e6e6;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    background: #fff;
    .dialogBox {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
      .bold {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2rem;
        color: #000000;
        line-height: 2.81rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .ordinary {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.5rem;
        color: #4e4e4e;
        line-height: 2.13rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>

<style lang="scss">
.custom-dialog {
  border-radius: 15px;
  padding: 20px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 680px;
    height: 172px;
    background: url('/images/home/chat_top@2x.png') no-repeat !important;
    background-position: top left;
    background-size: 680px 172px !important;
  }
  .el-dialog__header {
    padding: 0;
    z-index: 1;
    position: relative;
  }
  .el-dialog__body {
    z-index: 1;
    position: relative;
  }
}
@media (max-width: 767px) {
  .custom-dialog {
    border-radius: 1.75rem;
    padding: 1.5rem;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      width: 43.13rem;
      height: 19rem;
      background: url('/images/home/chat_top@2x.png') no-repeat !important;
      background-position: top left;
      background-size: 43.13rem 19rem !important;
    }
    .el-dialog__header {
      padding: 0;
      z-index: 1;
      position: relative;
    }
    .el-dialog__body {
      z-index: 1;
      position: relative;
    }
  }
}
</style>

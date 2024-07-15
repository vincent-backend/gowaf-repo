<template>
  <el-backtop :bottom="40" :right="50" :visibility-height="0">
    <img
      class="backtop"
      @click="dialogVisible = true"
      src="/public/images/home/suspension_btn_nor@2x.png"
      alt=""
    />
  </el-backtop>
  <el-dialog v-model="dialogVisible" width="680" class="custom-dialog">
    <template #title>
      <div class="dialog-top">
        <div class="talking">
          <img
            class="dialog-logo"
            src="/public/images/home/chat_avatar@2x.png"
          />
          <div class="title">
            {{ $t('home.login.backtop.title1') }}
            <span class="sub">{{ $t('home.login.backtop.sub') }}</span>
          </div>
          <div class="PREVIEW" src="" alt="">PREVIEW</div>
        </div>
        <div class="btn-row">
          <img
            class="img"
            src="/public/images/home/chat_ic_praise_nor@2x.png"
            alt=""
          />
          <img
            class="img"
            src="/public/images/home/chat_ic_oppose_nor@2x.png"
            alt=""
          />
          <div class="reset">
            <img
              class="img"
              src="/public/images/home/chat_ic_reset_nor@2x.png"
              alt=""
            />
            Reset
          </div>
        </div>
      </div>
    </template>
    <div class="main">
      <div class="dialogBox">
        <div class="bold">Hi there!</div>
        <div class="ordinary">
          My name is Fluffee. I am your new next-generation bunny.net virtual
          assistant.
        </div>
        <div class="ordinary">
          You can ask me anything related to Polyfill, your account, and I can
          even help you troubleshoot issues. To get started, simply send me a
          message!
        </div>
        <div class="ordinary">
          I'm still an experimental AI, so please go easy on me, but I'm
          learning quickly and will keep getting better with time!
        </div>
      </div>
      <div class="dialogueInput">
        <el-input
          v-model="textarea"
          style="width: 100%"
          :rows="4"
          type="textarea"
          placeholder="Ask me anything …"
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
    background: url('/public/images/home/home_card_tag_bg@2x.png');
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
    background: url('/public/images/home/chat_ic_send@2x.png') no-repeat;
    background-size: 100% 100%;
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
    background: url('/public/images/home/chat_top@2x.png') no-repeat !important;
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
</style>

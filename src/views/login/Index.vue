<template>
  <div class="login">
    <div class="logo">
      <img :src="$assetsUrl+'logo.png'" />
    </div>
    <div class="content">
      <div class="btns">
        <button @click="goLogin">手机号登录</button>
        <button @click="goMain">立即体验</button>
      </div>
      <div class="icons">
        <div class="icon"><i class="iconfont">&#xe62c;</i></div>
        <div class="icon"><i class="iconfont">&#xe651;</i></div>
        <div class="icon"><i class="iconfont">&#xe63d;</i></div>
        <div class="icon"><i class="iconfont">&#xe63d;</i></div>
      </div>
      <div class="agreement">登录即已同意<em>《用户协议》</em><em>《隐私政策》</em><em>《儿童隐私政策》</em></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/loginPhone");
    },
    goMain() {
      this.$router.push("/findIndex");
    },
  },
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100vh;
  background-color: @base-color;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .logo {
    text-align: center;
    position: absolute;
    top: 16%;
    left: 0;
    right: 0;
    img {
      width: 20%;
    }
  }
  .content {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    max-width: 540px;
    margin: auto;
    .btns {
      width: 80%;
      margin: auto;
      button {
        width: 100%;
        padding: 10px 0;
        margin: auto;
        border-radius: 99px;
        margin-top: 20px;
      }
      button:nth-child(1) {
        background-color: #fff;
        border: 1px solid #fff;
        color: @base-color;
      }
      button:nth-child(2) {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fc6b64;
      }
    }
    .icons {
      width: 80%;
      margin: 30px auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon {
        border: 1px solid #fc6b64;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: #fff;
          font-size: 18px;
        }
      }
    }
    .agreement {
      color: #fc6b64;
      font-size: 10px;
      text-align: center;
      em {
        color: #fff;
      }
    }
  }
}
</style>
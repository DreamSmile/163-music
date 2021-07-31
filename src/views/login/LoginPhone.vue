<template>
  <div class="loginPhone">
    <div class="title">
      <p>登录体验更多精彩</p>
      <p>未注册的手机号登录后将自动创建账号</p>
    </div>
    <div class="forms">
      <van-field v-model="tel" type="number" maxlength="11" placeholder="请输入手机号" />
      <van-button round block color="#dd2c22" type="info" @click="goVCode">下一步</van-button>
      <div class="seek_pass">找回账号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: "",
    };
  },
  methods: {
    goVCode() {
      if (this.tel.length < 11) {
        this.$utils.showToast("请输入完整的电话信息~", { duration: 2000 });
        return;
      }
      this.$router.push({ path: "/loginPCode", query: { tel: this.tel } });
    },
  },
};
</script>
<style scoped lang="less">
.loginPhone {
  padding: 20px 14px;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .title {
    margin-bottom: 20px;
    p {
      font-size: 18px;
      font-weight: 500;
    }
    p:last-child {
      font-size: 14px;
      color: #919191;
      font-weight: 400;
    }
  }
  .forms {
    /deep/.van-field__control {
      font-size: 16px; //输入框字体
    }
    button {
      margin: 40px 0 30px 0;
    }
    .seek_pass {
      text-align: center;
      color: #646f83;
    }
  }
}
</style>

<template>
  <div class="login_p_code">
    <div class="title_box">
      <p class="title">请输入验证码</p>
      <div class="phone_info">
        <span>已发送至 {{tel}}</span>
        <div class="time">
          <span v-show="isSend">{{time}}s</span>
          <button v-show="!isSend" @click="changeCode">重新发送验证码</button>
        </div>
      </div>
    </div>
    <div class="code">
      <van-field v-model="code" type="number" maxlength="6" />
      <van-button round block color="#dd2c22" type="info" @click="goMain">确定</van-button>
      <!-- 手机号已停用 -->
      <div class="phone_out" @click="goMain">进入主界面<i class="iconfont">&#xe629;</i></div>
    </div>
    <!-- 更改手机号弹窗 -->
    <van-dialog v-model="showDia" title="修改手机号" show-cancel-button @confirm="sureCode" :before-close="onBeforeClose">
      <van-field v-model="newTel" type="number" placeholder="请重新输入手机号" maxlength="11" />
    </van-dialog>
  </div>
</template>
<style scoped lang="less">
.login_p_code {
  padding: 20px 14px;
  background-color: #fff;
  height: 100vh;
  box-sizing: border-box;
  .title_box {
    margin-bottom: 20px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .phone_info {
      font-size: 14px;
      color: @msg-color;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .time {
        button {
          background-color: @base-color;
          color: #fff;
          padding: 4px 10px;
          border-radius: 99px;
          font-size: 12px;
        }
      }
    }
  }
  .code {
    .phone_out {
      margin-top: 30px;
      text-align: center;
      color: @msg-color;
      i {
        font-size: 12px;
        vertical-align: center;
      }
    }
  }
  //   修改手机号弹窗样式
  .van-dialog {
    box-sizing: border-box;
  }
}
</style>
<script>
export default {
  data() {
    return {
      tel: this.$route.query.tel, //手机号
      time: 10, //倒计时
      timer: null, //定时器
      isSend: true, //是否开始倒计时
      code: "", //验证码
      showDia: false, //重新填写手机号弹窗
      newTel: "",
    };
  },
  watch: {
    code: function (val) {
      if (val.length == 6) {
        this.$utils.showToast("验证完毕，模拟进入入主页面", { duration: 2000 });
        setTimeout(() => {
          // this.$router.push('/main')
        }, 3000);
      }
    },
  },
  mounted() {
    this.sendCode(this.tel);
    this.timer = setInterval(() => {
      if (this.time > 1) {
        this.time--;
      } else {
        clearInterval(this.timer);
        this.isSend = false;
      }
    }, 1000);
  },
  methods: {
    // 进入主界面
    goMain() {
      if (!this.code) {
        this.$utils.showToast("请输入完整验证码~", { duration: 200 });
        return;
      }
      this.$router.push("/findIndex");
    },
    //   重新发送验证码，并询问是否更换验证码
    changeCode() {
      this.$utils
        .showDialog(`请确定手机号为:${this.tel}`, "确定手机号", {
          confirmButtonText: "确定",
          showCancelButton: true,
          cancelButtonText: "更改手机号",
        })
        .then(() => {
          this.$utils.showToast("重新发送中。。", "提示", { duration: 2000 });
        })
        .catch(() => {
          this.showDia = true;
        });
    },
    // 修改手机号确定
    sureCode() {
      if (this.newTel.length < 11) {
        this.$utils.showToast("请输入完整的电话号码~", { duration: 1500 });
        return;
      }
      this.tel = this.newTel;
      this.sendCode(this.tel);
      this.showDia = false; // 在这里手动的关闭弹窗
    },
    onBeforeClose(action, done) {
      return action === "confirm" ? done(false) : done();
    },
    // 发送验证码axios
    sendCode(phone) {
      if (!phone || phone.length < 11) {
        this.$utils.showToast("请检查号码是否正确~", { duration: 2000 });
        return;
      }
      this.$uApi
        .sendCode(phone)
        .then((res) => {
          if (res.code != 200) {
            this.$utils.showDialog(res.msg, "失败");
            return;
          }
          this.$utils.showToast("验证码已发送至" + phone, { duration: 2000 });
        })
        .catch((err) => {
          this.$utils.showDialog(err, "失败");
        });
    },
  },
};
</script>
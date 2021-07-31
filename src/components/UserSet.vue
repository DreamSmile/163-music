<template>
  <div class="user_set">
    <!-- 用户头像等信息 -->
    <div class="user_info">
      <div class="user_data">
        <div class="photo" :style="{backgroundImage:'url('+$assetsUrl+'user.jpg)'}"></div>
        <span>用户名称<i class="iconfont">&#xe629;</i></span>
      </div>
      <i class="iconfont code">&#xe61a;</i>
    </div>
    <!-- 基础信息 -->
    <div class="block">
      <p class="block_title">基础</p>
      <van-cell title="我的消息" is-link icon="envelop-o" />
      <van-cell title="我的云贝中心" is-link icon="after-sale" />
      <van-cell title="创作者中心" is-link icon="bulb-o" />
    </div>
    <!-- 音乐服务 -->
    <div class="block">
      <p class="block_title">音乐服务</p>
      <van-cell title="云村有票" is-link icon="credit-pay" />
      <van-cell title="商城" is-link icon="cart-o" />
      <van-cell title="游戏专区" is-link icon="smile-o" />
      <van-cell title="口袋彩铃" is-link icon="service-o" />
    </div>
    <!-- 其他 -->
    <div class="block">
      <p class="block_title">音乐服务</p>
      <van-cell title="设置" is-link icon="setting-o" />
      <van-cell title="夜间模式" is-link icon="closed-eye" />
      <van-cell title="定时关闭" is-link icon="underway-o" />
      <van-cell title="边听边存" is-link icon="down" />
      <van-cell title="在线听歌免流量" is-link icon="send-gift-o" />
      <van-cell title="音乐黑名单" is-link icon="warning-o" />
      <van-cell title="青少年模式" is-link icon="manager-o" />
      <van-cell title="音乐闹钟" is-link icon="bulb-o" />
    </div>
    <!-- 其他主要设置 -->
    <div class="block">
      <van-cell title="我的订单" is-link icon="orders-o" />
      <van-cell title="优惠券" is-link icon="coupon-o" />
      <van-cell title="我的客服" is-link icon="service-o" />
      <van-cell title="分享网易云音乐" is-link icon="share-o" />
      <van-cell title="关于" is-link icon="question-o" />
    </div>
    <button>退出登录/关闭</button>
  </div>
</template>
<style scoped lang="less">
.user_set {
  padding: 0 14px 18px 14px;
  background-color: @bg-color;
  .user_info {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @bg-color;
    padding: 12px 0;
    z-index: 12;
    .user_data {
      .photo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 12px;
      }
      span {
        vertical-align: middle;
        i {
          vertical-align: middle;
          margin-left: 2px;
        }
      }
    }
    .code {
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
  }
  .block {
    border-radius: 8px;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-top: 16px;
    .block_title {
      padding: 0 12px;
      color: @font-msg-color;
      font-size: 12px;
      line-height: 40px;
      border-bottom: 1px solid @line-color;
    }
  }
  button {
    width: 100%;
    background-color: #fff;
    color: @base-color;
    font-size: 16px;
    border-radius: 8px;
    margin: 16px 0;
    padding: 12px 0;
  }
}
</style>
<template>
  <div class="about">
    <header >
      <i class="iconfont" @click="$router.go(-1)">&#xe622;</i>
      <h1>关于</h1>
    </header>
    <div class="version">
      <div class="photo" :style="{backgroundImage:'url('+$assetsUrl+'logo.png)'}"></div>
      <p>{{$store.state.version}}</p>
    </div>
    <div class="list">
      <van-cell title="详细介绍" is-link />
      <van-cell title="清除缓存" value="222.4MB" is-link />
    </div>
  </div>
</template>
<style scoped lang="less">
.about {
  header {
    background-color: #fff;
    padding: 0 14px;
    height: 50px;
    line-height: 50px;
    i {
      font-size: 20px;
    }
    h1 {
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      color: #000;
      margin-left: 16px;
    }
  }
  .version {
    padding: 50px 0;
    .photo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: auto;
    }
    p {
      text-align: center;
      color: @font-msg-color;
      margin-top: 10px;
    }
  }
}
</style>
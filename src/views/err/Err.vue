<template>
  <div class="err">
    <van-empty image="error" :description="null|| '出错啦~'" />
    <router-link to="/loginIndex">登录界面</router-link>
    <router-link to="/findIndex">游客界面</router-link>
  </div>
</template>
<style scoped lang="less">
.err {
  width: 100%;
  height: 100vh;
  background-color: @bg-color;
  text-align: center;
  a {
    margin: 0 12px;
    color: @base-color;
    text-decoration: underline;
  }
}
</style>
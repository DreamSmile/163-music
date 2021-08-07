<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.query.isUseTab" />
    </keep-alive>
    <router-view v-if="$route.query.isUseTab" />
  </div>
</template>
<style lang="less">
#app {
  font-family: PingFang SC, -apple-system, BlinkMacSystemFont, Tahoma, Arial,
    Hiragino Sans GB, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 540px;
  margin: auto;
  min-height: 100%;
  background-color: @bg-color;
}
/deep/.van-tabbar--fixed {
  right: 0;
  max-width: 540px;
}
/deep/.van-hairline--top-bottom {
  right: 0;
  max-width: 540px;
}
</style>

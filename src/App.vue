<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active" active-color="#ee0a24" v-show="showTab">
      <van-tabbar-item name="find" replace to="/findIndex" icon="home-o">发现</van-tabbar-item>
      <van-tabbar-item name="tribe" replace to="/tribeIndex" icon="friends-o">云村</van-tabbar-item>
      <van-tabbar-item name="my" replace to="/myIndex" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTab: this.$route.meta.hasTab,
      active: "find",
    };
  },
  watch: {
    "$route.name": function (val) {
      this.showTab = this.$route.meta.hasTab;
    },
  },
};
</script>
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
</style>

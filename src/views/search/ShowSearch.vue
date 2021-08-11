<template>
  <div class="show_search">
    <!-- 搜索框 -->
    <div class="search">
      <i @click="this.$router.go(-1)" class="iconfont">&#xe622;</i>
      <input type="text" v-model="inpVal" placeholder="请输入搜索关键字~" />
    </div>
    <!-- tab -->
    <div class="tabs">
      <span :class="{isTab:tab_sel==1}">综合</span>
      <span :class="{isTab:tab_sel==2}">单曲</span>
      <span :class="{isTab:tab_sel==3}">歌单</span>
      <span :class="{isTab:tab_sel==4}">视频</span>
      <span :class="{isTab:tab_sel==5}">歌手</span>
      <span :class="{isTab:tab_sel==6}">博客</span>
      <span :class="{isTab:tab_sel==7}">歌词</span>
      <span :class="{isTab:tab_sel==8}">专辑</span>
      <span :class="{isTab:tab_sel==9}">声音</span>
      <span :class="{isTab:tab_sel==10}">云圈</span>
      <span :class="{isTab:tab_sel==11}">用户</span>
    </div>
    <div class="show_list">
      <!-- 综合 -->
      <div class="block">
        <div class="song">
          <h2>单曲</h2>
          <song-list :item="song"></song-list>
        </div>
      </div>
      <!-- 歌单 -->
      <div class="block">
        <div class="song">
          <h2>单曲</h2>
          <sheet-list :item="song"></sheet-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inpVal: this.$route.query.val,
    };
  },
};
</script>
<style scoped lang="less">
.show_search {
  .search {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-bottom: 6px;
    background-color: #fff;
    .iconfont {
      font-size: 20px;
      vertical-align: middle;
      margin-right: 14px;
    }
    input {
      width: calc(100% - 44px);
      padding: 6px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
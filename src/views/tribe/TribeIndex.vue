<template>
  <div class="tribe_index">
    <top></top>
    <!-- tab -->
    <div class="tabs">
      <van-tabs @change="changeTab" animated swipeable background="#f6f6f6" title-active-color="#dd2c22">
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          <!-- 搜索框 -->
          <div class="inp" v-show="index==1">
            <input type="text" placeholder="哪些歌词长大后才能看懂" />
          </div>
          <!-- 父组件内容 {{ index }} -->
          <tri-item :tab="tab"></tri-item>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>
<style scoped lang="less">
.tribe_index {
  padding: 0 14px 60px 0;
  .tabs {
    /deep/.van-tabs__wrap--scrollable {
      position: sticky;
      top: 50px;
      right: 0;
      left: 0;
      z-index: 999;
      background-color: #fff;
    }
    /deep/.van-tab--active > .van-tab__text {
      background: #f9dddd;
      border-radius: 99px;
      padding: 0 12px;
    }
    /deep/.van-tabs__line {
      //去掉底部线，只是隐藏
      background-color: transparent;
    }
  }
  .inp {
    width: 100%;
    box-sizing: border-box;
    input {
      background-color: #efefef;
      width: 100%;
      border-radius: 99px;
      padding: 5px 12px;
      box-sizing: border-box;
    }
  }
}
</style>
<script>
import Top from "../../components/Top.vue";
import TriItem from "../../components/triItem.vue";
export default {
  components: {
    Top,
    TriItem,
  },
  data() {
    return {
      tab: "标签1",
    };
  },
  methods: {
    changeTab(index, title) {
      this.tab = title;
    },
  },
};
</script>
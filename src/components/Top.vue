<template>
  <div class="top">
    <van-badge :content="5" class="right_icon">
      <i @click="showUser=true" class="iconfont ">&#xe664;</i>
    </van-badge>
    <div class="content">
      <div class="search" v-show="page=='FindIndex'" @click="goSearch">
        <i class="iconfont">&#xe623;</i>
        <span>请输入音乐关键词</span>
        <!-- <input  type="text" placeholder="请输入音乐关键词~" /> -->
      </div>
      <div class="tribe_box" v-show="page=='TribeIndex'">
        <van-badge :content="5">
          <span :class="{tab_sel:tribe_sel==1}" @click="tabChange(1)">关注</span>
        </van-badge>
        <van-badge :content="5">
          <span :class="{tab_sel:tribe_sel==2}" @click="tabChange(2)">推荐</span>
        </van-badge>
      </div>
    </div>
    <div class="right">
      <div class="add_icon" v-show="page=='FindIndex' || page=='TribeIndex'"><i class="iconfont">&#xe617;</i></div>
      <div @click="goSearch" class="search_icon" v-show="page=='MyIndex'"><i class="iconfont">&#xe623;</i></div>
    </div>
    <!-- 顶部左侧弹出用户设置信息 -->
    <van-popup v-model="showUser" get-container="body" position="left" :style="{ width: '80%',height:'100%' }">
      <user-set></user-set>
    </van-popup>
  </div>
</template>
<style scoped lang="less">
.top {
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @bg-color;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  .right_icon {
    font-size: 12px;
    margin-right: 12px;
  }
  .content {
    flex: 1;
    box-sizing: border-box;
    .search {
      position: relative;
      background-color: #fff;
      border-radius: 99px;
      color: @font-msg-color;
      i {
        position: absolute;
        left: 10px;
        top: 2px;
      }
      span {
        display: inline-block;
        padding: 4px 0 4px 30px;
      }
    }
    .tribe_box {
      text-align: center;
      font-size: 16px;
      /deep/.van-badge__wrapper:last-child {
        margin-left: 20px;
      }
      .tab_sel {
        font-weight: bold;
        position: relative;
      }
      .tab_sel::after {
        content: "";
        width: 2em;
        height: 4px;
        border-radius: 99px;
        background-color: rgba(221, 44, 34, 0.7);
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
      }
    }
  }
  .right {
    margin-left: 12px;
    .add_icon {
      background-color: @base-color;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: #fff;
        font-size: 26px;
      }
    }
    .search_icon {
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
<script>
import UserSet from "./UserSet.vue";
export default {
  components: { UserSet },
  data() {
    return {
      page: this.$route.name,
      tribe_sel: 1, //云村的tab
      showUser: false,
    };
  },
  methods: {
    // tab更换
    tabChange(num) {
      this.tribe_sel = num;
    },
    // 去搜索界面
    goSearch() {
      this.$router.push("/searchIndex");
    },
  },
};
</script>

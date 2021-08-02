<template>
  <!-- 1：音乐专区超出隐藏透明效果 -->
  <div class="search_index">
    <!-- 搜索框 -->
    <div class="search">
      <i @click="out" class="iconfont">&#xe622;</i>
      <input type="text" placeholder="请输入搜索关键字~" />
    </div>
    <!-- 历史记录 -->
    <div class="history">
      <h2>历史</h2>
      <div class="his_list">
        <span class="his_item" v-for="(his,i) in 10" :key="i">吴亦凡{{i}}</span>
      </div>
      <i class="iconfont">&#xe652;</i>
    </div>
    <!-- 热搜榜 -->
    <div class="hot">
      <div class="hot_tab">
        <span :class="{hot_sel:isHot==1}" @click="changeHot(1)">热搜榜</span>
        <span :class="{hot_sel:isHot==2}" @click="changeHot(2)">视频榜</span>
        <span :class="{hot_sel:isHot==3}" @click="changeHot(3)">博客榜</span>
      </div>
      <div class="page" v-show="isHot==1">
        <div class="strip" v-for="(strips,i) in 10" :key="i">
          <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
          <span :class="['name',{hots_black: i<3}]">这是热搜榜</span>
          <i class="iconfont hots_red">&#xe608;</i>
        </div>
      </div>
      <div class="page" v-show="isHot==2">
        <div class="strip" v-for="(strips,i) in 10" :key="i">
          <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
          <span :class="['name',{hots_black: i<3}]">这是视频榜</span>
          <i class="iconfont hots_red">&#xe608;</i>
        </div>
      </div>
      <div class="page" v-show="isHot==3">
        <div class="strip" v-for="(strips,i) in 10" :key="i">
          <span :class="['No',{hots_red: i<3}]">{{i+1}}</span>
          <span :class="['name',{hots_black: i<3}]">这是博客榜</span>
          <i class="iconfont hots_red">&#xe608;</i>
        </div>
      </div>
    </div>
    <!-- 音乐专区 -->
    <div class="music_class">
      <h2>音乐专区</h2>
      <div class="class_list">
        <div class="items" v-for="item in 4" :key="item">
          <div class="title">
            <h3>曲风分类</h3>
            <i class="iconfont">&#xe66a;</i>
          </div>
          <p>查看你的专属曲风偏好</p>
        </div>
      </div>
      <!-- <div class="class_hidden">查看更多专区<i class="iconfont">&#xe63b;</i></div> -->
    </div>
    <!-- 推荐活动 -->
    <div class="recommend">
      <h2>推荐活动</h2>
      <ul>
        <li v-for="item in 3" :key="item">
          <img :src="$assetsUrl+'icon.jpg'" />
          <span>邀请朋友加入，得丰厚大奖</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHot: 1, //热搜tab
    };
  },
  methods: {
    changeHot(num) {
      this.isHot = num;
    },
    // 返回上一页
    out() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="less">
.search_index {
  background-color: #fff;
  padding: 12px 14px;
  min-height: 100vh;
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
  .history {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    h2 {
      font-weight: 600;
      color: #000;
      margin-right: 20px;
    }
    .his_list {
      flex: 1;
      min-width: 0;
      overflow-y: hidden;
      white-space: nowrap;
      box-sizing: border-box;
      .his_item {
        display: inline-block;
        background-color: @bg-color;
        padding: 2px 10px;
        border-radius: 99px;
        margin-right: 6px;
      }
    }
    .iconfont {
      margin-left: 20px;
      font-size: 22px;
      color: @msg-color;
    }
  }
  .hot {
    margin-top: 16px;
    .hot_tab {
      margin-bottom: 14px;
      span {
        color: @font-msg-color;
        margin-right: 20px;
      }
      .hot_sel {
        color: #000;
      }
    }
    .page {
      //   animation: move 0.8s infinite;
      animation: move 0.3s ease-out;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      width: 100%;
      border-radius: 8px;
      padding: 12px;
      box-sizing: border-box;
      .strip {
        width: 50%;
        display: inline-block;
        line-height: 28px;
        box-sizing: border-box;
        .No {
          width: 18px;
          display: inline-block;
        }
        .hots_red {
          color: @base-color;
        }
        .hots_black {
          color: #000;
          font-weight: 600;
        }
        .name {
          max-width: calc(100% - 54px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          vertical-align: middle;
        }
        .iconfont {
          margin-left: 8px;
        }
      }
    }
    @keyframes move {
      0% {
        transform: translateX(100%);
        opacity: 0.8;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  .music_class {
    margin-top: 16px;
    h2 {
      font-weight: 600;
      color: #000;
      margin-bottom: 14px;
    }
    .class_list {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      //   height: 120px;
      overflow: hidden;
      .items {
        width: 49%;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 10px;
        color: #fff;
        overflow: hidden;
        background: linear-gradient(to right, #dd2c22, #ffc0cb);
        .title {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 7px 12px;
          h3 {
            font-size: 16px;
            font-weight: 600;
          }
          .iconfont {
            font-size: 24px;
          }
        }
        p {
          padding: 4px 12px;
          font-size: 12px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .class_hidden {
      text-align: center;
    }
  }
  .recommend {
    margin-top: 16px;
    h2 {
      color: #000;
      font-weight: 600;
      margin-bottom: 14px;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          margin-right: 12px;
        }
        span {
          border-bottom: 1px solid @line-color;
        }
        span:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
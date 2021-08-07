<template>
  <div class="sheet_deuial">
    <!-- 头部 -->
    <header>
      <div class="out" @click="$router.go(-1)">
        <i class="iconfont out_icon">&#xe622;</i>
        <h1>歌单</h1>
        <!-- <span class="name">歌单名歌单名称歌单名称歌单名称歌单名称歌单名称称</span> -->
        <!-- <span class="btn">
          <van-icon name="plus" />收藏
        </span> -->
      </div>
      <div class="other">
        <i class="iconfont search_icon" @click="$router.push('/searchIndex')">&#xe623;</i>
        <van-popover v-model="showPopover" trigger="click" :actions="actions" placement="bottom-end"> <template #reference>
            <i class="iconfont all_search">&#xe664;</i></template>
        </van-popover>
      </div>
      <!-- 右上角点击 -->
    </header>
    <!-- 歌单主要介绍 -->
    <div class="detail">
      <div class="photo imgs">
        <button><i class="iconfont">&#xe769;</i>358万</button>
      </div>
      <div class="info">
        <div class="box">
          <h2>歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍</h2>
          <div class="row">
            <div class="photo"></div>
            <span class="author">制作者名称制作者名称</span>
          </div>
          <div class="row more">
            <span class="msg">持更！化妆 走秀 逛街 Vlog 哈哈哈哈哈哈哈Vlog 哈哈哈哈哈哈哈Vlog 哈哈哈哈哈哈哈Vlog 哈哈哈哈哈哈哈</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <!-- 歌单的收藏评论分享 -->
      <div class="wrap">
        <span>
          <van-icon name="passed" />收藏
        </span>
        <span>
          <van-icon name="chat-o" />评论
        </span>
        <span>
          <van-icon name="share-o" />分享
        </span>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <song-list :item="list"></song-list>
  </div>
</template>
<style scoped lang="less">
.sheet_deuial {
  min-height: 100vh;
  header {
    padding: 12px 14px;
    box-sizing: border-box;
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #e45f58, #ffc0cb, #e45f58);
    color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    .out {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      .out_icon {
        font-size: 28px;
        margin-right: 16px;
      }
      h1 {
        font-size: 18px;
      }
      .name {
        width: 10em;
      }
      .btn {
        padding: 4px 10px;
        background-color: @base-color;
        display: inline-block;
        border-radius: 99px;
        i {
          font-size: 12px;
        }
      }
    }
    .other {
      .search_icon {
        margin-right: 20px;
        font-size: 20px;
        color: #fff;
      }
      .all_icon {
        font-size: 19px;
        color: #fff;
      }
    }
  }
  .detail {
    padding: 12px 14px 18px 14px;
    box-sizing: content-box;
    height: 146px;
    position: relative;
    background: linear-gradient(to right, #e45f58, #ffc0cb, #e45f58);
    .imgs {
      width: 120px;
      height: 120px;
      margin-right: 14px;
      border-radius: 8px;
      position: relative;
      display: inline-block;
      button {
        position: absolute;
        right: 2px;
        top: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 99px;
        padding: 1px 6px;
        color: #fff;
        font-size: 10px;
        i {
          font-size: 10px;
          color: #fff;
        }
      }
    }
    .info {
      display: inline-block;
      width: calc(100% - 134px);
      vertical-align: top;
      height: 100%;
      height: 120px;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        h2 {
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          color: #fff;
          font-size: 16px;
        }
        .row {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          width: 100%;
          .photo {
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
          }
          .author {
            display: inline-block;
            vertical-align: middle;
          }
          .msg {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
            max-width: calc(100% - 30px);
          }
          i {
            color: rgba(255, 255, 255, 0.7);
            vertical-align: middle;
            margin-left: 10px;
          }
        }
        .more {
          // display: flex;
          // align-items: center;
          // justify-content: space-between;
        }
      }
    }
    .wrap {
      background-color: #fff;
      border-radius: 99px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      margin: auto;
      text-align: center;
      height: 40px;
      width: 80%;
      line-height: 40px;
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      span {
        width: 30%;
        display: inline-block;
        position: relative;
        i {
          font-size: 20px;
          padding-right: 4px;
          vertical-align: -5px;
        }
      }
      span:after {
        content: "";
        height: 20px;
        width: 2px;
        background-color: @bg-color;
        position: absolute;
        right: 0;
        top: 10px;
      }
      span:last-child:after {
        width: 0;
      }
    }
  }
}
</style>
<script>
import SongList from "../../components/SongList";
export default {
  components: { SongList },
  data() {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [
        { text: "选择歌曲排序" },
        { text: "清空下载文件" },
        { text: "举报" },
      ],
      list: [
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "哈哈哈哈",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "作者名称 ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingchenzuoche mingchengg ",
          album: "专辑名称",
        },
        {
          name: "歌曲名ascwevrw称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingchenzuoche mingchengg ",
          album: "专辑名称",
        },
        {
          name: "歌曲名ascwevrw称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingchenzuoche mingchengg ",
          album: "专辑名称",
        },
        {
          name: "歌曲名ascwevrw称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingchenzuoche mingchengg ",
          album: "专辑名称",
        },
        {
          name: "歌曲名ascwevrw称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingchenzuoche mingchengg ",
          album: "专辑名称",
        },
        {
          name: "歌曲名ascwevrw称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
        {
          name: "歌曲名称",
          imgUrl: this.$assetsUrl + "user.jpg",
          author: "zuoche mingcheng ",
          album: "专辑名称",
        },
      ],
    };
  },
};
</script>


<template>
  <div class="play_index photo" :style="{backgroundImage:'url('+$assetsUrl+'bg_play.png)'}">
    <header>
      <div class="info">
        <van-icon name="arrow-down" @click="$router.go(-1)"/>
        <div class="name_info">
          <p class="song_name">{{playMusic.name||'未知歌曲名'}}</p>
          <p class="author_name">{{playMusic.author || '未知歌手名'}}</p>
        </div>
        <van-icon name="share-o" />
      </div>
      <div class="voic">
        <i class="iconfont">&#xe852;</i>
        <van-progress :percentage="50" stroke-width="2px" color="#fff" :show-pivot="false" track-color="rgba(255,255,255,0.5)" />
      </div>
    </header>
    <!-- 歌词 -->
    <div class="content">
      <ul>
        <li v-for="(item ,i) in 40" :key="i">
          这是歌词{{i}}
        </li>
      </ul>
    </div>
    <!-- 播放控制区 -->
    <div class="edit">
      <div class="song_operation">
        <van-icon name="like-o" />
        <van-icon name="down" />
        <van-icon name="good-job-o" />
        <div class="comment">
          <van-icon name="chat-o" /><sup>99+</sup>
        </div>
        <van-icon name="ellipsis" />
      </div>
      <div class="paly_line">
        <span>00:20</span>
        <div class="line_box">
          <div class="line" :style="`width:${line}`"></div>
        </div>
        <span>04:11</span>
      </div>
      <div class="paly_operation">
        <div class="chang_type">
          <!-- 顺序 -->
          <van-icon name="exchange" v-show="type=='sx'" />
          <!-- 随机 -->
          <van-icon name="closed-eye" v-show="type=='sj'" />
          <!-- 循环 -->
          <van-icon name="replay" v-show="type=='xh'" />
        </div>
        <van-icon name="arrow-left" />
        <div class="play" @click="changePlay">
          <van-icon name="play-circle-o" v-show="!play" />
          <van-icon name="pause-circle-o" v-show="play" />
        </div>
        <van-icon name="arrow" />
        <van-icon @click="showHis=true" name="todo-list-o" />
      </div>
    </div>
    <!-- 弹出 -->
    <van-popup class="his_box" v-model="showHis" round position="bottom" :style="{ height: '70%' }">
      <h3>当前播放(111)</h3>
      <ul>
        <li @click="changeMusic(i)" v-for="(item,i) in hisList" :key="i">
          <span class="song_name" :class="{play_ing:item.isPlay}">
            <van-icon v-if="item.isPlay" :class="['icon_play',{play_ing:item.isPlay}]" name="volume-o" />
            {{item.name}}<em class="song_suthor">-{{item.author}}</em>
          </span>
          <van-icon class="del" name="cross" />
        </li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      line: "30%", //音乐播放器的播放进度
      type: "sx", //音乐播放模式,sx:顺序播放，sj:随机播放，xh:循环播放
      play: true, //是否在播放音乐
      showHis: false, //展示历史播放
      playMusic: { name: "正在播放的歌曲", author: "张三" }, //正在播放的音乐信息
      hisList: [
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: true },
        {
          name: "歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称",
          author: "cbaiofboire",
          isPlay: false,
        },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "asbc", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称啊sbcidwvpe", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "嘻嘻", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
        { name: "歌曲名称", author: "张三", isPlay: false },
      ],
    };
  },
  methods: {
    changePlay() {
      this.play = !this.play;
    },
    // 更换音乐播放
    changeMusic(index) {
      this.playMusic = this.hisList[index];
      this.showHis=false;
    },
  },
};
</script>
<style scoped lang="less">
.play_index {
  width: 100%;
  height: 100vh;
  padding: 12px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    .info {
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name_info {
        text-align: center;
        .song_name {
          font-size: 16px;
        }
        .author_name {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
        }
      }
      i {
        font-size: 24px;
      }
    }
    .voic {
      margin-top: 10px;
      display: flex;
      align-items: center;
      i {
        color: #fff;
        margin-right: 14px;
      }
      /deep/.van-progress {
        flex: 1;
      }
    }
  }
  .content {
    flex: 1;
    overflow: auto;
    ul {
      li {
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .edit {
    color: rgba(255, 255, 255, 0.8);
    .song_operation {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      .comment {
        position: relative;
        padding-right: 10px;
        sup {
          font-size: 10px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
        }
      }
    }
    .paly_line {
      margin: 12px 0 16px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 10px;
      }
      .line_box {
        flex: 1;
        margin: 0 12px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.5);
        height: 2px;
        .line {
          color: rgba(255, 255, 255, 0.9);
          height: 100%;
          position: relative;
        }
        .line::after {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          top: -1px;
          right: 0;
        }
      }
    }
    .paly_operation {
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .chang_type {
      }
      .play {
        i {
          font-size: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .his_box {
    padding: 0 14px 12px 14px;
    box-sizing: border-box;
    h3 {
      position: sticky;
      top: 0;
      left: 0;
      background-color: #fff;
      z-index: 2;
      line-height: 46px;
      font-size: 16px;
      font-weight: 600;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 33px;
        .song_name {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .icon_play {
            margin-right: 6px;
          }
          .song_author {
            font-size: 12px;
            color: @font-msg-color;
          }
        }
        .play_ing {
          color: @base-color;
        }
      }
      .del {
        color: @font-msg-color;
      }
    }
  }
}
</style>
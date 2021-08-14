<template>
  <div class="song_list">
    <!-- <van-empty v-if="item.length<1" image="error" description="数据啦~" /> -->
    <div class="no" v-if="item.length<1">该关键词没有单曲啦~</div>
    <div class="row" v-for="(el,i) in item" :key="i">
      <div class="info">
        <!-- <span class="No">{{i+1}}</span> -->
        <div class="info_name">
          <p class="name">{{el.name || '未知'}}</p>
          <p class="other">
            <!-- <van-icon class="like" name="like" /> -->
            {{el.al ? el.al.name : el.album.name}}-
            <span v-if="!el.ar"><em v-for="(user,j) in el.artists" :key="j">{{user.name || '佚名'}}</em></span>
            <span v-else><em v-for="(user,j) in el.ar" :key="j">{{user.name || '佚名'}}</em></span>
          </p>
        </div>
      </div>
      <div class="edit">
        <i class="iconfont play">&#xe665;</i>
        <i class="iconfont all">&#xe689;</i>
      </div>
    </div>
    <!-- <div class="over">到底啦~</div> -->
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.song_list {
  padding: 30px 14px 14px 14px;
  background-color: #fff;
  /deep/.van-empty {
    min-height: calc(100vh - 286px);
  }
  .no {
    text-align: center;
    line-height: 30px;
    color: @msg-color;
  }
  .row {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: @msg-color;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      overflow: hidden;
      .No {
        color: @msg-color;
        margin-right: 20px;
        font-size: 16px;
      }
      .info_name {
        align-items: center;
        flex: 1;
        overflow: hidden;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          color: #333;
          width: 100%;
        }
        .other {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .like {
            color: @base-color;
            vertical-align: -1px;
            margin-right: 4px;
          }
        }
      }
    }
    .edit {
      .play {
        margin-right: 20px;
        font-size: 22px;
        color: @msg-color;
      }
      .all {
        color: @msg-color;
        font-size: 22px;
      }
    }
  }
  .over {
    text-align: center;
    color: @font-msg-color;
  }
}
</style>


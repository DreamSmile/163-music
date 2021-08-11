<template>
  <div class="sheet_block_list">
    <div class="block_list" v-if="type=='block'">
      <div class="item" v-for="(item,i) in list" :key="i">
        <div class="photo">
          <span><i class="iconfont">&#xe769;</i>{{item.msg}}</span>
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="auto_list" v-if="type=='auto'">
      <div class="item" v-for="(item,i) in list" :key="i">
        <div class="photo">
          <span><i class="iconfont">&#xe769;</i>{{item.msg}}</span>
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.sheet_block_list {
  .block_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .auto_list {
    overflow: auto;
    width: 100%;
    white-space: nowrap;
    .item {
      display: inline-block;
      margin-right: 12px;
      width: 110px;
      .photo {
        height: 110px;
      }
    }
    .item:last-child {
      margin-right: 0;
    }
  }
  .item {
    width: calc((100% - 30px) / 3);
    margin-bottom: 12px;
    .photo {
      width: 100%;
      height: 120px;
      border-radius: 8px;
      position: relative;
      span {
        position: absolute;
        right: 4px;
        top: 4px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 99px;
        color: #fff;
        font-size: 12px;
        padding: 1px 6px;
        i {
          vertical-align: middle;
          font-size: 12px;
        }
      }
    }
    p {
      margin-top: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: pre-wrap;
      min-height: 3em;
    }
  }
}
</style>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "block",
    },
  },
};
</script>
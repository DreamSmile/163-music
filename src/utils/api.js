import { $get, $post } from './https';
let api = 'http://192.168.37.39:3000/';

/*
  搜索
*/
// 热搜榜单
export function getHotSearch() {
    return $get(api + 'search/hot/detail');
}

// 搜索结果 keywords limit：返回数量，
// type：1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export function getSearch(data) {
    return $post(api + 'search ', data);
}

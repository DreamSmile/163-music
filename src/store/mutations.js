
const mutations = {
    // 搜索一次就增加一次历史记录
    addSearchHis(state, msg) {
        state.searchHis.push(msg);
    },
    // 删除所有历史记录
    delSearchHis(state) {
        state.searchHis = []
    }
}

export default mutations;
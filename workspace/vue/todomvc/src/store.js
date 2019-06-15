import Vue from 'vue';
import Vuex from 'vuex';
// 启用应用状态管理
Vue.use(Vuex);
// 全局共享状态
const state = {
    count: 0
}
// 中央
// state要改，actions(上报)是交给你调用的，increment 
// 不能直接修改state.count,state.count++  mutations才可以修改
// 只有actions才可以触发mutations改变，只有mutations才可以修改state
// mutations可以直接修改状态
const mutations = {
    increment (state) {
        state.count++;
    }
}
const actions = {
    increment: ({ commit }) => commit('increment')
}
export default new Vuex.Store({
    state, 
    mutations,
    actions
})
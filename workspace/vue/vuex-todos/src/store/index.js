import Vuex from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//单一状态树 一棵树
export default new Vuex.store({
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    actions,
    
})
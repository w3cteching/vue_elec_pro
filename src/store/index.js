import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

//引入需要的模块
import Users from './modules/users'
import Goods from './modules/goods'

//引入state
import state from './state'

//引入actions
import actions from './actions'

//引入mutations
import mutations from './mutations'

//引入getters
import getters from './getters'


const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        Users,
        Goods,
    },
    plugins: [createPersistedState()]
});

export default store;
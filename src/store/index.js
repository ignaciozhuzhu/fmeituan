import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    a:'test-a'
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins:[
        createPersistedState({
            storage:{
                getItem:key => wx.getStorageSync(key),
                setItem:(key,value) => wx.setStorageSync(key,value),
                removeItem:key => wx.clearStorage()
            }
        })
        
    ]
})

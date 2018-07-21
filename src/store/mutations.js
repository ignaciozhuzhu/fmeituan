import * as types from './mutations-type.js'

export default{
    [types.SET_A](state,payload){
        state.a = payload
    }
}
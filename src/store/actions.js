import * as types from './mutations-type'


export default{
    setA({
        commit,
        state
    },payload){
        commit(types.SET_A,payload)
    }
}
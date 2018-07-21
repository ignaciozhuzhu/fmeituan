import fly from './fly'

const LOGIN = '/api/Account/Login/'
const GETLIST = '/api/services/app/TheWorldCup/GetTheWorldCupAllList'

export default {
    login(params){
        return fly.get(LOGIN+params)
    },
    getList(params){
        return fly.get(GETLIST,{
            ...params
        })
    }
    
}
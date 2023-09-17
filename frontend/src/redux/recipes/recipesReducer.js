
import React from 'react'
import { GET_RECIPES, GET_RECIPES_ERR, GET_RECIPES_QUERY, GET_RECIPES_SUCC } from './actionTypes'

const init={
    data:[],
    isLoad:false,
    isErr:false,
    query:{offset:1}
}

const recipesReducer = (state=init,{type,payload}) => {
  
    
    switch(type){
        case GET_RECIPES:
            return {...state,isLoad:true}
        case GET_RECIPES_SUCC:
            return {...state,isLoad:false,isErr:false,data:payload}
        case GET_RECIPES_ERR:
            return {...state,isErr:false}
        case GET_RECIPES_QUERY:
            return {...state,query:{...state.query,...payload}}
        default:
            return state
    }
}

export default recipesReducer
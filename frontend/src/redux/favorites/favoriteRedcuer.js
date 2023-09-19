import React from 'react'
import { FAV_ADD, FAV_LOAD } from './actionTypes'

const init={
    favorites:[],
    isLoad:false,
    isErr:false
}
const favoriteRedcuer = (state=init,{type,payload}) => {
    switch(type){
    case FAV_LOAD:
        return {...state,isLoad:true}
    case FAV_ADD:
        return {...state,favorites:payload,isLoad:false,isErr:false}
        default:
            return state
    }
}

export default favoriteRedcuer
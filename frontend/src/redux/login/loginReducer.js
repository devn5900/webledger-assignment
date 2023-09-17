

import React from 'react'
import { LOGIN_SUCC } from './actionTypes';

const init={
    data:JSON.parse(localStorage.getItem("data")),
    token:localStorage.getItem("token")
}
const loginReducer = (state=init,{type,payload}) => {
  
    switch(type){
        case LOGIN_SUCC:
            return {...state,data:payload.data,token:payload.token}
        default:
            return state;
    }

}

export default loginReducer
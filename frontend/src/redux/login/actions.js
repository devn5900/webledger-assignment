import { LOGIN_SUCC } from "./actionTypes"


export const loginSuccess=(data)=>async(dispatch)=>{
    dispatch({type:LOGIN_SUCC,payload:data})
}
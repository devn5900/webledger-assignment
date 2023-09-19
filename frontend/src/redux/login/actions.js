import { LOGIN_SUCC } from "./actionTypes"


export const loginSuccess=(data)=>async(dispatch)=>{
    dispatch({type:LOGIN_SUCC,payload:data})
    localStorage.setItem("token",data.token)
    localStorage.setItem("data",JSON.stringify(data.data))
}
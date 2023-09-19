import axios from "axios"
import { FAV_ADD, FAV_LOAD } from "./actionTypes";


export const addToFAvAPI=async(id)=>{
    const token= localStorage.getItem("token");
    try {
        return await axios.post(`http://localhost:8080/api/favorites/${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
        return false
    }
}

export const fetchFavApi=()=>async(dispatch)=>{
    const token= localStorage.getItem("token");
    dispatch({type:FAV_LOAD})
    try {
        const res= await axios.get(`http://localhost:8080/api/favorites`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        dispatch({type:FAV_ADD,payload:res.data.data});
    } catch (error) {
        console.log(error)
        return false
    }
}

export const removeFromFAvAPI=async(id)=>{
    const token= localStorage.getItem("token");
    try {
        return await axios.delete(`http://localhost:8080/api/favorites/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

    } catch (error) {
        console.log(error)
        return false
    }
}
import axios from 'axios'
import { GET_RECIPES, GET_RECIPES_ERR, GET_RECIPES_QUERY, GET_RECIPES_SUCC } from './actionTypes';
import { useSelector } from 'react-redux';

export const getRecipes=(query)=>async(dispatch)=>{
    dispatch({type:GET_RECIPES});
        try {
            const res = await axios.get(`http://localhost:8080/api/recipes?${query}`);
            dispatch({type:GET_RECIPES_SUCC,payload:res.data.results});
        } catch (error) {
            console.log(error)
            dispatch({type:GET_RECIPES_ERR})
        }
}

export const setQuery=(query)=>async(dispatch)=>{
    
    dispatch({type:GET_RECIPES_QUERY,payload:query});
}
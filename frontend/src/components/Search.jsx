import React, { useEffect, useState } from 'react'
import useThrottle from '../hooks/useThrottle';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, setQuery } from '../redux/recipes/actions';

const Search = () => {
  const {query}= useSelector(store=>store.recipesReducer);
    const [search,setSearch]=useState("");
    const s= useThrottle(search,600);
    const dispatch= useDispatch();
    useEffect(()=>{
      if(s){
        dispatch(setQuery({query:s}));
      }
    },[s]) 
  return (
    <div >
        <div >
            <input type='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Recipes ...' className=' bg-gray-100 py-2 rounded-md  px-8 w-[20rem]' />
        </div>
    </div>
  )
}

export default Search
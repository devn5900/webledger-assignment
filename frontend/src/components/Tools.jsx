import React, { useEffect } from 'react'
import Search from './Search'
import Sort from './Sort'
import { useSelector } from 'react-redux'

const Tools = () => {
  const {query}= useSelector(store=>store.recipesReducer);
  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
    Object.keys(query).forEach((key)=>{
      if(query[key]!==""){
        searchParams.set(key, query[key]);
      }else{
        searchParams.delete(key, query[key]);
      }
    })
    window.history.replaceState({}, '', `?${searchParams.toString()}`);
  },[query])
  return (
    <div className='flex items-center p-4 justify-around'>
        <Search/>
        <Sort/>
    </div>
  )
}

export default Tools
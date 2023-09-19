import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import Recipes from '../components/Recipes'
import Tools from '../components/Tools'
import { useDispatch } from 'react-redux'
import { fetchFavApi } from '../redux/favorites/actions'
const Home = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchFavApi())
  },[])
  return (
    <div>
        <Navbar/>
        <Tools/>
        <Recipes/>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './navbar/Navbar'
import Recipes from '../components/Recipes'
import Tools from '../components/Tools'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Tools/>
        <Recipes/>
    </div>
  )
}

export default Home
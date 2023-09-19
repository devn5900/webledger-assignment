import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginSuccess from '../pages/navbar/LoginSuccess'
import Home from '../pages/Home'
import RecipesDetails from '../pages/recipes/RecipesDetails'
import Favorites from '../pages/favorite/Favorites'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login/success' element={<LoginSuccess/>} />
        <Route path='/recipe/:recipeId/details' element={<RecipesDetails/>} />
        <Route path='/favorites' element={<Favorites/>} />
    </Routes>
  )
}

export default MainRoutes
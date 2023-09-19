import React from 'react'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'
import Card from '../../components/Card';

const Favorites = () => {
    const {favorites} = useSelector(store=>store.favoriteRedcuer);
    
  return (
    <div>
        <Navbar/>
        <div  className='py-12'>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 w-[95%] m-auto">
        {favorites &&
        favorites.length > 0 &&
        favorites.map((el) => {
          return <Card {...el} inFav={true}  />;
        })}
        </div>
        </div>
    </div>
  )
}

export default Favorites
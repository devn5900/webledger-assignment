import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GrFavorite} from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {token,data}= useSelector(store=>store.loginReducer);

  return (
    <div className=' bg-blue-700 px-5 py-2 '>
        <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-extrabold text-white'>
            Search Your Recipes
        </h1>
           {!token? <div className='  '>
                <Link to={'http://localhost:8080/api/user/login'}>
                <div className='flex items-center rounded-md gap-2 bg-white p-2'>
                <FcGoogle/>
                <span className='text-sm' >Login with Google</span>
                </div>
                </Link>
            </div>:
            <div className='flex items-center gap-3'>
                <div>
                    <img src={data?.image} className='w-12 rounded-full' />
                </div>
                <div className='relative'>
                <Link to={'http://localhost:8080/api/user/login'}>
                <div className='flex items-center rounded-md gap-2 bg-white p-2'>
                <GrFavorite/>
                </div>
                <span className='absolute -top-3 font-bold -right-2 bg-pink-400 text-white rounded-full w-5 flex items-center justify-center h-5'>0</span>
                </Link>
            </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar
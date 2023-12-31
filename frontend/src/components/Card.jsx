import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { addToFAvAPI, fetchFavApi, removeFromFAvAPI } from '../redux/favorites/actions'
import Alert from './Alert'
import { useDispatch, useSelector } from 'react-redux'


const Card = ({title,id,image,inFav}) => {
  const dispatch= useDispatch();
  const [toast,setToast]= useState(null);
  const {favorites}= useSelector(store=>store.favoriteRedcuer);
  const isInFav= favorites.find((el)=>el.id==id);
    const addToFAv=async(id)=>{
       const status=await addToFAvAPI(id);
       console.log(status)
       if(status){
         dispatch(fetchFavApi())
         setToast({msg:status.data.msg,color:"bg-green-500"});
         setTimeout(()=>{
          setToast(null)
         },1500)
      }
    }

    const removeFromFav=async(id)=>{
      const status=await removeFromFAvAPI(id);
      if(status){
        dispatch(fetchFavApi())
        setToast({msg:status.data.msg,color:"bg-green-500"});
        setTimeout(()=>{
          setToast(null)
         },1500)
     }
   }

  return (
    <div className=' rounded-md overflow-hidden flex flex-col gap-3 justify-between bg-white'>
            <Link to={`/recipe/${id}/details`}>
            <img src={image} alt={title} />
      </Link>
        <div className='px-2 text-xl font-semibold text-gray-800'>
            <h2>{title}</h2>
        </div>
        <div className=' flex items-center justify-center pb-4'>
        {!inFav&&!isInFav&&<button onClick={()=>addToFAv(id)} className=' text-white rounded-md py-1 px-2 cursor-pointer bg-orange-400 flex items-center gap-1 text-sm '>
            <span>Add</span> <AiOutlineHeart className='text-white'/>
        </button>}
        {isInFav&&<button onClick={()=>removeFromFav(id)} className=' text-white rounded-md py-1 px-2 cursor-pointer bg-orange-400 flex items-center gap-1 text-sm '>
            <span>Remove</span> <AiOutlineHeart className='text-white'/>
        </button>}
            </div>
            {
              toast&& <Alert msg={toast.msg} color={toast.color} />
            }
    </div>
  )
}

export default Card
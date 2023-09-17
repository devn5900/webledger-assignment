import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'


const Card = ({title,id,image}) => {
  return (
    <div className=' rounded-md overflow-hidden flex flex-col gap-3 justify-between bg-white'>
            <img src={image} alt={title} />
        <div className='px-2 text-xl font-semibold text-gray-800'>
            <h2>{title}</h2>
        </div>
        <div className=' flex items-center justify-center pb-4'>
        <button className=' text-white rounded-md py-1 px-2 cursor-pointer bg-orange-400 flex items-center gap-1 text-sm '>
            <span>Add</span> <AiOutlineHeart className='text-white'/>
        </button>
            </div>
    </div>
  )
}

export default Card
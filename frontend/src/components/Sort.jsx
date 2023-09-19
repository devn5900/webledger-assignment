import React, { useEffect, useState } from 'react'
import { sortBy } from '../utills/helpers'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../redux/recipes/actions';

const Sort = () => {
    const {query}= useSelector(store=>store.recipesReducer);
    const [sortB,setSortB]= useState(query.sort||"");
    const [sortO,setSortO]= useState(query.sortDirection||"");
    const dispatch= useDispatch();

    useEffect(()=>{
            dispatch(setQuery({sort:sortB}))
           dispatch(setQuery({sortDirection:sortO}))
    },[sortB,sortO]);
  return (
    <div className='flex items-center gap-3'>
        <div>
            <select onChange={(e)=>setSortB(e.target.value)} className='bg-gray-100 py-2 rounded-md  px-5'>
                <option value="">Sort By</option>
                {
                    sortBy.map((el)=>{
                        return <option value={el}>{el}</option>
                    })
                }
            </select>
        </div>
        <div>
            <select onChange={(e)=>setSortO(e.target.value)} className='bg-gray-100 py-2 rounded-md  px-5'>
                <option value="">Sort Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    </div>
  )
}

export default Sort
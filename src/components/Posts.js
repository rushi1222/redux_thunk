import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../reducer/Action'



const Posts = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())

    },[])
  return (
    <div>Posts</div>
  )
}

export default Posts
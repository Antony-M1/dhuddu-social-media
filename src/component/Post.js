import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()
    const obj = useParams() //returns object of properties
    console.log(useParams())
  return (
    <div>Post {obj.id}</div>
  )
}

export default Post
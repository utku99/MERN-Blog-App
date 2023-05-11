import React, { useState } from 'react'
import "./create.css"
import useUserID from '../../hooks/userID'

import axios from "axios"

const Create = ({ toggle }) => {

  const userID = useUserID()

  const [postData, setPostData] = useState({
    title: "",
    imageUrl: "",
    description: "",
    ownerID: userID
  })

  const onchanceHandler = (e) => {
    e.preventDefault()
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const onsubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/createpost", postData)
      window.location = "/"
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {toggle &&
        <div className='createpost-container'>
          <div className='createpost'>
            <form onSubmit={onsubmit} className='createform'>
              <label>title:</label>
              <input onChange={onchanceHandler} type='text' value={postData.title} name='title' required />
              <label>image url:</label>
              <input onChange={onchanceHandler} type='text' value={postData.imageUrl} name='imageUrl' />
              <label>description:</label>
              <textarea onChange={onchanceHandler} type='text' value={postData.description} name='description' required></textarea>
              <button>Create Post</button>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Create

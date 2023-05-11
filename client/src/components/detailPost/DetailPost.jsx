import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./detail.css"
import useUserID from '../../hooks/userID';

const DetailPost = () => {

  const { id } = useParams()
  const [posts, setPost] = useState([])
  const userID = useUserID()

  const [data, setData] = useState({
    title: "",
    description: ""
  })


  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getpost/${id}`)
        setPost(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchposts()
  }, [id])


  const update = async () => {
    try {
      await axios.put(`http://localhost:5000/updatepost/${id}`, data)
      window.location = `/details/${id}`
    } catch (error) {
      console.log(error);
    }
    
  }

 

  const delet = async () => {
    try {
      await axios.delete(`http://localhost:5000/deletepost/${id}`)
      window.location = "/"
    } catch (error) {
      console.log(error);
    }
  }

  const onchance = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  return (
    <> 
      <div className='detailedcards'>
        <div className='img'>
          <img src={posts.imageUrl} alt="img" />
        </div>

        <div className='detailedcardsHeader'>
          <div className='asd'>
            <div className='detailTitle'>
              <textarea className='a' onChange={onchance} value={data.title} name='title' placeholder={posts.title}></textarea>
            </div>
            <div className='updateDelete'>
              {posts.ownerID === userID &&
                <>
                  <button onClick={update}>update</button>
                  <button onClick={delet}>delete</button>
                </>
              }
            </div>
          </div>
              
          <textarea className='b' onChange={onchance} value={data?.description} name='description' placeholder={posts.description}></textarea>

        </div>

      </div>
    </>
  )
}

export default DetailPost

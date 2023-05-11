import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./card.css"
import { Link } from "react-router-dom"

const Card = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        const fetchposts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getposts")
                setPost(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchposts()
    }, [])


    return (
        <>
            <div className='cards'>
                {
                    posts.map((item, i) => (
                        <div key={i} className='card' >
                            <Link style={{ textDecoration: "none" }} to={`/details/${item._id}`}>
                                <h3>{item.title}</h3>
                                <div className='cardimg'>
                                    <img src={item.imageUrl} alt="img" />
                                </div>
                                <p>{item.description}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card

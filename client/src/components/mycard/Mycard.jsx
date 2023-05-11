import React from 'react'
import useUserID from '../../hooks/userID.js'
import usePosts from '../../hooks/posts.js'
import { Link } from 'react-router-dom'

const Mycard = () => {
    const userID = useUserID()
    const posts = usePosts()

    const myposts = posts.filter(item => item.ownerID === userID)

    
    return (
        <div>
            <>
                <div className='cards'>
                    {
                        myposts.map((item, i) => (
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
        </div>
    )
}

export default Mycard

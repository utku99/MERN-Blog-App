import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import useName from "../../hooks/name.js"
import useuserID from '../../hooks/userID.js'
import Create from '../postModel/Create'


const Navbar = ({createpost, toggleFucn}) => {

  const name = useName()
  const userID = useuserID()



  const logoutFunc = () => {
    localStorage.removeItem("userID")
    localStorage.removeItem("name")
    window.location = "/auth"
  }

 
  return (
    <>
      <div className='navbar'>
         <Create toggle={createpost}/>
        <div className='linkstyle'>
          <Link className='link' to="/">Home</Link>
          { !userID && <Link className='link' to="/auth">Login</Link>}
          {userID && <Link onClick={toggleFucn} className='link' >Create Post</Link>}
          {userID && <Link to="/myposts">My Posts</Link> }
          {userID && <Link onClick={logoutFunc} to="/auth">Log Out</Link>}
        </div>
        {name && <p>Hello  {name}</p>}
      </div>
    </>

  )
}

export default Navbar

import React, { useState } from 'react'
import "./auth.css"
import axios from "axios"
import { useCookies } from 'react-cookie';

const AuthModel = () => {
  const [register, setRegister] = useState(true)
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [,setCookies] = useCookies("token")

  const onchangeHandler = (e) => {
    e.preventDefault()
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    })
  }

  const onRegisterHandler = async () => {
    try {
      await axios.post("http://localhost:5000/register", authData)
      console.log("registered succesfully");
      window.location = "/auth"
    } catch (error) {
      console.log("failed to register", error.message);
    }
  }
  
  const onLoginHandler = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", authData)
      localStorage.setItem("userID", response.data.user._id)
      localStorage.setItem("name", response.data.user.name)
      setCookies("token", response.data.token)
      console.log("loged in  succesfully");
      window.location = "/"
    } catch (error) {
      console.log("failed to login", error.message);
    }
  }



  return (
    <div className='authmodel'>
      <from className="authform">
        {register && <input onChange={onchangeHandler} value={authData.name} name='name' type='text' placeholder='name' required />}
        <input onChange={onchangeHandler} value={authData.email} name='email' type='text' placeholder='email' required />
        <input onChange={onchangeHandler} value={authData.password} name='password' type='password' placeholder='password' required />
        {
          register ? <p onClick={() => setRegister(!register)}>Already Have Account ?</p>
            : <p onClick={() => setRegister(!register)} > Dont Have Account ?</p>
        }
        {register ? <button onClick={onRegisterHandler}>Register</button>
          : <button onClick={onLoginHandler}>Login</button>
        }
      </from>
    </div >
  )
}

export default AuthModel

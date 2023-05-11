import React, { useState } from 'react'
import Card from '../components/card/Card'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  const [visible, setVisible] = useState(false)

    const toggleFucn = () => {
      setVisible(!visible)
    }

  
  return (
    <>
      <Navbar createpost={visible} toggleFucn={toggleFucn} />
      <Card />
    </>
  )
}

export default Home

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const clicked = ()=>{
        navigate('/')
    }

  return (
    <>
      <header>
        <h1>Contact</h1>
        <button onClick={()=>clicked()} >go to home</button>
        <br />
        <button onClick={()=>navigate(-1)} >go back</button>
      </header>
    </>
  )
}

export default Contact

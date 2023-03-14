import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useNavigate } from 'react-router-dom'

function About(props) {

    const navigate = useNavigate();
    const clicked =()=>{
        navigate('/contact')
    }

  return (
    <>
      <header>
        <h1>About</h1>
        <button onClick={()=>clicked()} >go to contact</button>
      </header>
    </>
  )
}


export default About


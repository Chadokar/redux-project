import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Home(props) {
  return (
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
            <ul>
                <NavLink to='/' >Home</NavLink> 
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/contact' >Contact</NavLink>
            </ul>
            <h1>just check</h1>
        <h1>Home</h1>
        </nav>
        <br />
            <Outlet/>
            <br /><br />
            <h1>Bottombar</h1>
      </header>
    </>
  )
}

Home.propTypes = {

}

export default Home


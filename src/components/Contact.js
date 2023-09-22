import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div> <ul>
    <NavLink to='/' className="nav_link">Home</NavLink>
    <NavLink to='/about' className="nav_link">About</NavLink>
    <NavLink to='/Contact' className="nav_link">Contact</NavLink>
    <h1> Hello I am React Contact Page</h1>
</ul></div>
  )
}

export default Contact
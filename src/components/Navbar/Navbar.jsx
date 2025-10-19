import React from 'react'
import Home from '../Home/Home'
import { Link, NavLink } from 'react-router-dom'
import Contact from './../Contact/Contact';

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg  p-4">
  <div className="container">
    <h1><NavLink className="navbar-brand fw-bold" href="#">START FRAMEWORK</NavLink></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to={'home'}>HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'contact'}>CONTACT</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

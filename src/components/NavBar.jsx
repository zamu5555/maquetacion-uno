import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
    
      <nav className="navbar">
        <Link className='logo' to="/">Zenith Bonsai</Link>

        <div className="nav-links">
          <Link to="/philosophy">Filosofía</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="/booking">Reservas</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
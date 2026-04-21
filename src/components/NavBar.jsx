import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
    
      <nav className="navbar">
        <Link className='logo' to="/">Zenith Bonsai</Link>

        <div className="nav-links">
          <Link to="/filosofia">Filosofía</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/reservas">Reservas</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
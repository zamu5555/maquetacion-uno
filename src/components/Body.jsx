import React from 'react'
import { Link } from 'react-router-dom'

function Body({ titulo, texto, botonTexto, ruta }) {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>{titulo}</h1>

        <p>{texto}</p>

        {botonTexto && ruta && (
          <Link className="btn" to={ruta}>
            {botonTexto}
          </Link>
        )}
      </div>

      <div className="hero-image"></div>
    </main>
  )
}

export default Body
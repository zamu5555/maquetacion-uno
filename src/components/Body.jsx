import React from 'react'
import { Link } from 'react-router-dom'

function Body({ titulo, texto, textos, botonTexto, ruta, children }) {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>{titulo}</h1>

        {/* Si mandas contenido personalizado */}
        {children ? (
          children
        ) : textos ? (
          textos.map((t, i) => <p key={i}>{t}</p>)
        ) : (
          <p>{texto}</p>
        )}

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
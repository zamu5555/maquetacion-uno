import React from 'react'
import { Link } from 'react-router-dom'

function Body({ titulo, texto, textos, botonTexto, ruta, style }) {
  return (
    <main className="hero-section" style={style}>
      
      <div className="hero-content">
        <h1>{titulo}</h1>

        {textos
          ? textos.map((t, index) => <p key={index}>{t}</p>)
          : <p>{texto}</p>
        }

        
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
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Galeria() {

  const items = [
    "Arce Japonés",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
    "Enebro",
    "Azalea"
  ]

  return (
    <div>
      <NavBar />

      <main className="content-section">
        <div style={{ width: "100%" }}>
          
          <h1 style={{ textAlign: "center" }}>
            Nuestra Colección
          </h1>

          <p style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 2rem"
          }}>
            Un vistazo a algunos de los ejemplares en los que hemos trabajado.Cada árbol cuenta una historia de tiempo y paciencia.
          </p>

          <div className="gallery-grid">
            {items.map((item, index) => (
              <Card key={index} titulo={item} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Galeria
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Reservas() {
  return (
    <div>
      <NavBar />

      <main className="content-section">

        <div className="text-container">

          <h1 style={{ textAlign: "center" }}>
            Reserva un Taller
          </h1>

          <p style={{ textAlign: "center" }}>
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>

          <Form />

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Reservas
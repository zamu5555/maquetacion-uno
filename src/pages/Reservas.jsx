import React from 'react'
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Reservas() {
  return (
    <div>
      <NavBar />

      <Body titulo="Reserva un Taller">
        
        <p>
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>

        <form className="booking-form">
          
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" name="name" required placeholder="Ej. Ana Silva" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required placeholder="tu@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="level">Nivel de experiencia</label>
            <select id="level" name="level">
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Avanzado</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <button type="submit" className="btn btn-block">
            Enviar Solicitud
          </button>

        </form>

      </Body>

      <Footer />
    </div>
  )
}

export default Reservas
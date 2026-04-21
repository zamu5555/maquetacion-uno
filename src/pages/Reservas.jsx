import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Reservas() {

  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    nivel: 'principiante',
    mensaje: ''
  })

  const ingresoDatos = (e) => {
    const { name, value } = e.target

    setDatos({
      ...datos,
      [name]: value
    })
  }

  const enviarDatos = (e) => {
    e.preventDefault()

    console.log('Datos del formulario:', datos)


    localStorage.setItem("reserva", JSON.stringify(datos))


    setDatos({
      nombre: '',
      correo: '',
      nivel: 'principiante',
      mensaje: ''
    })
  }

  return (
    <div>
      <NavBar />

      <Body titulo="Reserva un Taller">

        <p>
          Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
        </p>

        <form className="booking-form" onSubmit={enviarDatos}>

          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={ingresoDatos}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={datos.correo}
              onChange={ingresoDatos}
              required
            />
          </div>

          <div className="form-group">
            <label>Nivel de experiencia</label>
            <select
              name="nivel"
              value={datos.nivel}
              onChange={ingresoDatos}
            >
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              value={datos.mensaje}
              onChange={ingresoDatos}
            />
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
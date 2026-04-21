import React from 'react'
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Inicio() {
    return (
        <div>
            <NavBar />
            <Body
                titulo="El arte de la paciencia"
                texto="Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza."
                botonTexto="Reserva un taller"
                ruta="/reservas"
            />
            <Footer />
        </div>
    )
}

export default Inicio

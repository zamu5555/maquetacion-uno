import React from 'react'
import Body from '../components/Body'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Filosofia() {
    return (
        <div>
            <NavBar />
            <div className='centrar'>
            <Body
                titulo="Menos es más"
                textos={[
                    "Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.",
                    "En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza."
                ]}
               
            />
            </div>
            <Footer />

        </div>
    )
}

export default Filosofia

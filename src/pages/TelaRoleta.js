import React from 'react'

import Roleta from '../components/Roleta/Roleta'
import '../styles/TelaRoleta.css'
import logoGloria from '../components/assets/gloria-heart-text.png'

const TelaRoleta = () => {
  return (
    <div className="TelaRoleta">
      <div className="background-roleta">
        <div className="roletaTitleBox">
          <h1 className="roletaTitle">Clique no coração da roleta <img className='coracaoGloria' src={logoGloria} alt='coracao'/> e descubra qual será o seu tema sobre o mundo do protagonismo feminino!</h1>
        </div>
        <div className="roletaDivInferior">
          <div className="Roleta">
            <Roleta />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaRoleta

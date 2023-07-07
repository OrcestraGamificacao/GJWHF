import React from 'react'

import Roleta from '../components/Roleta/Roleta'
import '../styles/TelaRoleta.css'

const TelaRoleta = () => {
  return (
    <div className="TelaRoleta">
      <div className="background-roleta">
        <div className="roletaTitleBox">
          <h1 className="roletaTitle">Toque na roleta e descubra qual será o seu tema <br></br> sobre o mundo do protagonismo feminino!</h1>
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

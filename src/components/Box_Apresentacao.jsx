import React from 'react'
import "./Box_Apresentacao.css"
import Glorinha from "./Glorinha"

function Box_Apresentacao() {
  return (
    <div>
      <div className="box-apresentation"></div>
        <div className="box-apresentation-elements">
          <h3>
          Olá, eu sou a Gloria, uma inteligência artificial, uma robozinha,
          focada em acabar com a violência contra mulheres e meninas!
          </h3>
          <h4>Oferecimento</h4>
          <h5>Orc'estra Gamificação | Instituto Glória | Na Praia</h5>
          <Glorinha />
        </div>
      
    </div>
  )
}

export default Box_Apresentacao
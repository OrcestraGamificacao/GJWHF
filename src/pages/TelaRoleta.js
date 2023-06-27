import React from "react";
import Roleta from "../components/Roleta/Roleta";
import "../styles/TelaRoleta.css"

const TelaRoleta = () => {

  return (
    <div className='TelaRoleta'>
      <div className="background-roleta">
        <h1 style={{padding: "5%"}} className="titulo">Gire a roleta e encontre qual será o tema em que você irá descobrir mais sobre o mundo do protagonismo feminino no Marrocos</h1>
        <div className="Roleta">
          <Roleta/>
        </div>
      </div>
    </div>
  )
}

export default TelaRoleta;

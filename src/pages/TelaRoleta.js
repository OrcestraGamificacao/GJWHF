import React from "react";
import Roleta from "../components/Roleta/Roleta";
import "../styles/TelaRoleta.css"
import BalaoMensagem from "../components/Balao de Mensagem/BalaoMensagem";

const TelaRoleta = () => {

  return (
    <div className='TelaRoleta'>
      <div className="background-roleta">
        <h1 className="titulo">Gire a roleta para descubrir seu tema!</h1>
        <Roleta/>
      </div>
    </div>
  )
}

export default TelaRoleta;


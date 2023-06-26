import React from "react";
<<<<<<< HEAD
=======
import "../styles/BotaoIniciar.css";
>>>>>>> parent of 847e686 (Arrumando o botao iniciar)
import { useNavigate } from "react-router-dom";
import '../styles/BotaoIniciar.css'

function BotaoIniciar() {
  const navigate = useNavigate();

  const changeUrl = () => {
    navigate("/BoxApresentacao2");
  };

  return (
      <div className="wrapper">
        <button style={{ marginTop: "72%"}} onClick={changeUrl} className="grow_ellipse">SÓ SE FOR AGORA</button>
      </div>
  );
}

export default BotaoIniciar;

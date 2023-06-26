import React from "react";
import "../styles/BotaoIniciar.css";
import { useNavigate } from "react-router-dom";

function BotaoIniciar() {
  const navigate = useNavigate();

  const changeUrl = () => {
    navigate("/PerguntaFullText");
  };

  return (
      <div className="wrapper">
        <button onClick={changeUrl} className="grow_ellipse">INICIAR AGORA</button>
      </div>
  );
}

export default BotaoIniciar;


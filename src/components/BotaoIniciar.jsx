import React from "react";
import "../styles/BotaoIniciar.css";
import { useNavigate } from "react-router-dom";

function BotaoIniciar() {
  const navigate = useNavigate();

  const changeUrl = () => {
    navigate("/BoxApresentacao2");
  };

  return (
      <div className="wrapper">
        <button onClick={changeUrl} className="grow_ellipse">SÓ SE FOR AGORA</button>
      </div>
  );
}

export default BotaoIniciar;

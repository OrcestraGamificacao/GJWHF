import React from "react";
import "../styles/BotaoAvancar.css";
import { useNavigate } from "react-router-dom";

function BotaoIniciar() {
  const navigate = useNavigate();

  const changeUrl = () => {
    navigate("/BoxApresentacao2");
  };

  return (
      <div className="wrapper-btniniciar">
        <button onClick={changeUrl} className="grow_ellipse">VAMOS COMEÇAR!</button>
      </div>
  );
}

export default BotaoIniciar;


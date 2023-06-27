import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Gloria from "./Gloria";

import "../styles/BotaoIniciar.css";
import '../styles/BoxInvite.css';

import gloriaFalando from '../gloria/gloria_falando.mp4';

function BoxInvite() {
  const [scale, setScale] = useState(1)

  const [nome, setNome] = useState("");

  const navigate = useNavigate();

  const changeUrl = () => {
    sessionStorage.setItem("nome", nome);

    navigate("/BoxApresentacao2");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNome(e.currentTarget.value);
  }

  useEffect(() => {
    if (window.innerWidth > 720) {
      setScale(0.3)
    }
  }, [])

  return (
    <div className='container-invite'>
      <div className="box-invite">
        <div className="box-invite-elements">
          <h3 className="box-invite-title">
          Você sabia que mais de 40% das mulheres marroquinas entre os 18 e 64 anos já foram vítimas de pelo menos um ato de violência? É por esse e vários outros casos, que estou aqui. <br>
          </br>
          <br></br>
          E para não ficar sozinha nessa missão gostaria de convidar você, que está aproveitando o Na Praia Festival, para me ajudar a conquistar este objetivo.<br>
          </br><br></br>
          O que me diz? Vamos juntos contribuir para um mundo melhor para todas elas?
          </h3>
          <input value={nome} type="text" className="inputNome" placeholder= "Digite seu nome" id='inputNome' onChange={(e) => handleInputChange(e)}/>
          <button onClick={changeUrl} className="grow_ellipse">SÓ SE FOR AGORA</button>
        </div>
      </div>
      <div className='container-gloria-invite'>
        <Gloria animacao={gloriaFalando} max-width={800} scale={scale}/>
      </div>
    </div>
  );
}

export default BoxInvite;

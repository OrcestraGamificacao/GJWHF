import React, { Suspense, lazy } from 'react';
import "../styles/BoxApresentacao.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/BotaoIniciar.css";
import '../styles/BoxInvite.css';

import logoOrc from "./assets/LogoOrc.png";
import logoGloria from "../components/assets/LogoGloria.svg"
import logoNaPraia from "./assets/LogoNaPraiaFestival.png";
import gloriaFalando from '../gloria/gloria_meio_da_fala.gif';

const Gloria = lazy(() => import("./Gloria"));

function BoxApresentacao() {
  const navigate = useNavigate();

  function getNamePopUp() {
    Swal.fire({
      inputLabel: 'Primeiro, preciso que me diga seu nome completo:',
      input: 'text',
      inputPlaceholder: 'Nome completo',
      showCancelButton: false,
      confirmButtonText: 'Vamos lá!',
      confirmButtonColor: '#612368',
      allowOutsideClick: false,
      showCloseButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Você precisa escrever seu nome completo!'
        }
      }
    }).then((result) => {
      if (!result.isDismissed) {
        sessionStorage.setItem('nome', result.value);
        navigate("/BoxApresentacao2");
      }
    })
  }

  return (
    <div className='container-box-apresentation'>
      <div className="logos-container">
        <img src={logoOrc} alt="Logo Orc" className='logo-inicial' />
        <img src={logoGloria} alt="Logo Gloria" className='logo-inicial' />
        <img src={logoNaPraia} alt="Logo Na Praia" id='logo-napraia' className='logo-inicial' />
      </div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Sou uma 'robozinha' desenvolvida com a missão de contribuir para um mundo mais seguro e igualitário para todas as mulheres. Meu objetivo principal é criar conscientização, educar e fornecer recursos para prevenir a violência e apoiar as vítimas.
          </h3>
          <h3 className="box-apresentation-title">E para não ficar sozinha nessa missão gostaria de convidar você para me ajudar a conquistar este objetivo. O que me diz? Vamos juntos contribuir para um mundo melhor para todas elas?</h3>
          <button onClick={getNamePopUp} className="grow_ellipse" /*disabled={nome ? false : true}*/ >VAMOS COMEÇAR!</button>
        </div>
      </div>
      <div className='container-gloria-initial'>
        <Suspense fallback={<span>Loading...</span>}>
          <Gloria animacao={gloriaFalando} />
        </Suspense>
      </div>
    </div>
  );
}

export default BoxApresentacao

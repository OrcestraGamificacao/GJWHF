import React, { Suspense, lazy } from 'react';
import "../styles/BoxApresentacao.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/BotaoIniciar.css";

import logoOrc from "./assets/LogoOrc.png";
import logoGloria from "../components/assets/LogoGloria.svg"
import logoNaPraia from "./assets/LogoNaPraiaFestival.png";
import gloriaFalando from '../gloria/gloria_meio_da_fala.gif';

const Gloria = lazy(() => import("./Gloria"));

function BoxApresentacao() {
  const navigate = useNavigate();

  function getNamePopUp() {
    Swal.fire({
      customClass: {
        inputLabel: 'popup-input-label'
      },
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
          <div className="box-apresentation-text-container">
            <h3 className="box-apresentation-text">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas.
            </h3>
            <h3 className="box-apresentation-text">
              Você sabia que mais de 27% das mulheres de 15 a 49 anos já foram vítimas de pelo menos um ato de violência?
            </h3>
            <h3 className="box-apresentation-text">
              E por esse e vários outros casos que estou aqui. Vamos juntos contribuir para um mundo melhor para todas elas?  
            </h3>
          </div>
          <div className="apresentation-button-container">
            <button 
              onClick={getNamePopUp} 
              className="grow_ellipse">
              VAMOS COMEÇAR!
            </button>
          </div>
          
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

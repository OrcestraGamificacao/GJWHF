import React, { lazy, Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/BotaoIniciar.css";
import '../styles/BoxInvite.css';

import videoNormal from '../gloria/gloria_comeco_da_fala.gif'

const Gloria = lazy(() => import("./Gloria"));

function BoxInvite() {
  const navigate = useNavigate();

  function getNamePopUp() {
    Swal.fire({
      inputLabel: 'Primeiro, preciso que me diga seu nome',
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
    <div className='container-invite'>
      <div className="box-invite">
        <div className="box-invite-elements">
          <h3 className="box-invite-title">
            Você sabia que mais de 27% das mulheres de 15 a 49 anos já foram vítimas de pelo menos um ato de violência? E por esse e vários outros casos que estou aqui. <br>
            </br>
            <br></br>
            E para não ficar sozinha nessa missão gostaria de convidar você para me ajudar a conquistar este objetivo.<br>
            </br><br></br>
            O que me diz? Vamos juntos contribuir para um mundo melhor para todas elas?
            <br></br>
          </h3>
          <br></br>
          <button onClick={getNamePopUp} className="grow_ellipse" /*disabled={nome ? false : true}*/ >VAMOS COMEÇAR!</button>
        </div>
      </div>
      <div className='container-gloria-invite'>
        <Suspense fallback={<span>Loading...</span>}>
          <Gloria animacao={videoNormal} />
        </Suspense>
      </div>
    </div>
  );
}

export default BoxInvite;

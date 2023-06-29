import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Gloria from "./Gloria";
import Swal from 'sweetalert2';

import "../styles/BotaoIniciar.css";
import '../styles/BoxInvite.css';

import gloriaFalando from '../gloria/Gloria_Meio_Da_Fala.mp4';

function BoxInvite() {
  const [scale, setScale] = useState(1)

  const [nome, setNome] = useState("");

	function getNamePopUp(){
		Swal.fire({
		  inputLabel: 'Primeiro, preciso que me diga seu nome',
      input: 'text',
			showCancelButton: false,
			confirmButtonText: 'Vamos lá!',
			confirmButtonColor: '#612368',
			customClass: {
				containerContexto: 'my-swal-container', // Classe personalizada para o container do SweetAlert
				titleContexto: 'my-swal-title', // Classe personalizada para o título do SweetAlert
				textContexto: 'my-swal-text', // Classe personalizada para o texto do SweetAlert
				confirmButtonContexto: 'my-swal-confirm-button', // Classe personalizada para o botão de confirmação do SweetAlert
			},
      inputValidator: (value) => {
        if (!value) {
          return 'Você precisa escrever seu nome completo!'
        }
      }
		}).then((result) => {
      sessionStorage.setItem('nome', result.value);
      navigate("/BoxApresentacao2");
    })
	}

  const navigate = useNavigate();

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
          Você sabia que mais de 27% das mulheres de 15 a 49 anos já foram vítimas de pelo menos um ato de violência? E por esse e vários outros casos que estou aqui. <br>
          </br>
          <br></br>
          E para não ficar sozinha nessa missão gostaria de convidar você para me ajudar a conquistar este objetivo.<br>
          </br><br></br>
          O que me diz? Vamos juntos contribuir para um mundo melhor para todas elas?
          <br></br>
          </h3>
          <br></br>
          {/* <input value={nome} type="text" className="inputNome" placeholder= "Digite seu nome e sobrenome" id='inputNome' onChange={(e) => handleInputChange(e)}/> */}
          <button onClick={getNamePopUp} className="grow_ellipse" /*disabled={nome ? false : true}*/ >VAMOS COMEÇAR!</button>
        </div>
      </div>
      <div className='container-gloria-invite'>
      <Gloria animacao={gloriaFalando} maxWidth={60000} scale={scale}/>
      </div>
    </div>
  );
}

export default BoxInvite;

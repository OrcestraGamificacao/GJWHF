import React from 'react';
import "../styles/BoxApresentacao.css";

/*
  Jeito para aparecer as logos, mas sem responsiviadde ainda

import OrcNew from './assets/OrcNew.png';
import GloriaNew from  './assets/GloriaNew.png';
import NaPraiaNew from './assets/NaPraiaNew.png';

*/ 

function BoxApresentacao() {
  return (
    <div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
                     Olá! Eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Assim, com a missão de contribuir para um mundo mais seguro e igualitário para todas elas, meu objetivo principal agora é conscientizar, educar e fornecer recursos que previnam a violência de gênero e deem suporte às vítimas. E para me ajudar nesse desafio, tenho a contribuição de alguns parceiros:
            <div className="logos-container">
              <img /*src={OrcNew}*/ src="src\components\assets\OrcNew.png" alt="Logo Orc" />
              <img /*src={GloriaNew}*/ src="src\components\assets\GloriaNew.png" alt="Logo Gloria" />
              <img /*src={NaPraiaNew}*/ src="src\components\assets\NaPraiaNew.png" alt="Logo Na Praia" />
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BoxApresentacao;

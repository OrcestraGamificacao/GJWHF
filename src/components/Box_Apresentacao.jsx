import React from 'react';
import "./Box_Apresentacao.css";

function Box_Apresentacao() {
  return (
    <div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Sou uma 'robozinha' desenvolvida com a missão de contribuir para um mundo mais seguro e igualitário para todas as mulheres. Meu objetivo principal é criar conscientização, educar e fornecer recursos para prevenir a violência e apoiar as vítimas. Para me ajudar nessa missão, tenho o oferecimento de:
            <div className="logos-container">
              <img src="src\components\assets\LogoOrc.png" alt="Logo Orc" />
              <img src="src\components\assets\LogoGloria.png" alt="Logo Gloria" />
              <img src="src\components\assets\LogoNaParia.png" alt="Logo Orc" />
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Box_Apresentacao;

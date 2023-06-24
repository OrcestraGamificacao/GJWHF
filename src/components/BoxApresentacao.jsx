import React from 'react';
import "./BoxApresentacao.css";

function BoxApresentacao() {
  return (
    <div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Sou uma 'robozinha' desenvolvida com a missão de contribuir para um mundo mais seguro e igualitário para todas as mulheres. Meu objetivo principal é criar conscientização, educar e fornecer recursos para prevenir a violência e apoiar as vítimas. Para me ajudar nessa missão, tenho o oferecimento de:
            <div className="logos-container">
              <img src="src\components\assets\OrcNew.png" alt="Logo Orc" />
              <img src="src\components\assets\GloriaNew.png" alt="Logo Gloria" />
              <img src="src\components\assets\NaPraiaNew.png" alt="Logo Na Praia" />
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BoxApresentacao;

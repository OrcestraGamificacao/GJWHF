import React from 'react';
import "../styles/BoxApresentacao2.css";
import BotaoAvancarGami from './BotaoAvancarGami';

function BoxApresentacao2() {
  return (
    <div className="container-apresentation2">
      <div className="box-apresentation2">
        <div className="box-apresentation2-text-container">
          <h3 className="box-apresentation2-text">
            Muito feliz que você, {sessionStorage.getItem("nome")}, aceitou esse desafio!
          </h3>
          <h3 className="box-apresentation2-text justify-text">
            Você irá responder um questionário sobre mulheres incríveis e suas conquistas.
          </h3>
          <h3 className="box-apresentation2-text">
            Para ganhar um prêmio, você deve acertar todas as perguntas para ganhar um <span style={{ color: '#800080'}}>SELO ROXO</span>.
          </h3>
          <h3 className="box-apresentation2-text">
            Você precisa acumular 5 <span style={{ color: '#800080'}}>SELOS ROXOS</span>. Boa sorte!
          </h3>
        </div>
        <BotaoAvancarGami />
      </div>
    </div>
);
}

export default BoxApresentacao2;

import React from 'react';
import "../styles/BoxApresentacao2.css";
import BotaoAvancarGami from './BotaoAvancarGami';
import { useSelector } from 'react-redux';

function BoxApresentacao2() {

  const nome = useSelector((state) => state.session.nome);

  return (
    <div className="container-apresentation2">
      <div className="box-apresentation2">
        <div className="box-apresentation2-text-container">
          <h3 className="box-apresentation2-text">
            Muito feliz que você, {nome}, aceitou esse desafio!
          </h3>
          <h3 className="box-apresentation2-text justify-text">
            Você irá responder um questionário sobre mulheres incríveis e suas conquistas.
          </h3>
          <h3 className="box-apresentation2-text">
            Para ganhar um prêmio, você deve acertar todas as perguntas para ganhar um <span style={{ color: '#800080'}}>SELO ROXO</span>.
          </h3>
          <h3 className="box-apresentation2-text box-apresentation2-premiation-text">
            As premiações são:
            <br />
            5 <span style={{ color: '#800080'}}>SELOS ROXOS</span>: uma cortesia a sua escolha.
            <br />
            3 ou 4 <span style={{ color: '#800080'}}>SELOS ROXOS</span>: cartão Zig.
            <br />
            1 ou 2 <span style={{ color: '#800080'}}>SELOS ROXOS</span>: ecocopo do Na Praia.
          </h3>
        </div>
        <div className="apresentacao2-button-div">
          <BotaoAvancarGami />
        </div>
      </div>
    </div>
);
}

export default BoxApresentacao2;

import React from 'react';
import "../styles/BoxApresentacao2.css";
import BotaoAvancar2 from './BotaoAvancar2';

function BoxApresentacao2() {
  return (
    <div className="container-apresentation2">
      <div className="box-apresentation2">
        <div className="box-apresentation2-elements">
          <h3 className="box-apresentation2-title">
            Muito feliz que você, {sessionStorage.getItem("nome")}, aceitou esse desafio!
            <br></br>
            <br></br>
            Eu vou fornecer informações importantes sobre Ativismo, Inovação, Saúde e Educação, te apresentando histórias muito interessantes!
            <br></br>
            <br></br>
            Tudo isso através do uso da tecnologia e da gamificação!
            <br></br>
            <br></br>
            A gamificação é o uso de elementos de jogos em contextos não relacionados a jogos, com o objetivo de engajar, motivar e envolver as pessoas em determinadas atividades, e assim, espero ajudar a ampliar a voz das mulheres e empoderá-las! Junte-se a mim nessa jornada de conhecimento da história de nossas mulheres incríveis!
          </h3>
        </div>
        <div className="botaoAvançar-apresentation2">
        <BotaoAvancar2 />
        </div>

      </div>
    </div>
);
}

export default BoxApresentacao2;

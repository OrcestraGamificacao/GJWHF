import React from 'react';
import "../styles/BoxApresentacao2.css";
import BotaoAvancarGami from './BotaoAvancarGami';

function BoxApresentacao2() {
  return (
    <div className="container-apresentation2">
      <div className="box-apresentation2">
        <div className="box-apresentation2-elements">
          <h3 className="box-apresentation2-title">
            Muito feliz que você, {sessionStorage.getItem("nome")}, aceitou esse desafio!
            <br></br>
            <br></br>
            Toque na roleta para saber qual tema você irá aprender. Terá um questionário com 5 perguntas sobre mulheres com histórias incríveis. Cada pergunta tem seu contexto, caso queira entender melhor. Sua premiação é definida com um selo oficial que está escrito "Todos com Glória".
            <br></br>
            <br></br>
            Se você acertar as 5 perguntas, ganhará o <span style={{ color: '#800080'}}>SELO ROXO</span>. Caso tenha acertado 3 ou 4 ganhará o <span style={{ color: '#ff0084'}}>SELO ROSA</span> e se acertar 2 ou menos, ganhará o selo <span style={{ color: '#474A51'}}>SELO CINZA</span>.
            <br></br>
            <br></br>
            TEREMOS PRÊMIO! Para ganhá-lo você precisa colecionar 5 <span style={{ color: '#800080'}}>SELOS ROXOS</span> e apresentar para alguém do Instituto Gloria! Você precisa tirar um print de pelo menos um dos selo ganho e postar no seu Instagram marcando <a href="https://www.instagram.com/eusouagloria/" rel="noreferrer" target="_blank" style={{ color: '#800080' }}>@eusouagloria</a>, <a href="https://www.instagram.com/napraiafestival/" rel="noreferrer" target="_blank" style={{ color: '#800080' }}>@napraiafestival</a> e a <a href="https://www.instagram.com/orcgamificacao/" rel="noreferrer" target="_blank" style={{ color: '#800080' }}>@orcgamificacao</a>
          </h3>
        </div>
        <BotaoAvancarGami />
      </div>
    </div>
);
}

export default BoxApresentacao2;

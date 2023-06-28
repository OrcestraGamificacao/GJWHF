import React, { useEffect, useState } from 'react';
import BotaoAvancar from "./BotaoAvancar";
import Gloria from "./Gloria";
import "../styles/BoxApresentacao.css";
import logoOrc from "./assets/LogoOrc.png";
import logoGloria from "./assets/LogoGloria.png";
import logoNaPraia from "./assets/LogoNaParia.png";
import gloriaFalando from '../gloria/Gloria_Meio_Da_Fala.mp4';

function BoxApresentacao() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth > 720) {
      setScale(0.3)
    }
  }, [])

  return (
    <div className='container-box-apresentation'>
      <div className="logos-container">
              <img src={logoOrc} alt="Logo Orc" className='logo-inicial'/>
              <img src={logoGloria} alt="Logo Gloria" className='logo-inicial'/>
              <img src={logoNaPraia} alt="Logo Na Praia" id='logo-napraia' className='logo-inicial'/>
            </div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Sou uma 'robozinha' desenvolvida com a missão de contribuir para um mundo mais seguro e igualitário para todas as mulheres. Meu objetivo principal é criar conscientização, educar e fornecer recursos para prevenir a violência e apoiar as vítimas.
          </h3>
        </div>
        <BotaoAvancar />
      </div>
      <div className='container-gloria-init'>
        <Gloria animacao={gloriaFalando} maxWidth={60000} scale={scale}/>
      </div>
    </div>
  );
}

export default BoxApresentacao

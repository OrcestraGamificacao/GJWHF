import React, { Suspense, lazy } from 'react';
import BotaoAvancar from "./BotaoAvancar";

import "../styles/BoxApresentacao.css";

import logoOrc from "./assets/LogoOrc.png";
import logoGloria from "../components/assets/LogoGloria.svg"
import logoNaPraia from "./assets/LogoNaPraiaFestival.png";
import gloriaFalando from '../gloria/gloria_meio_da_fala.gif';

const Gloria = lazy(() => import("./Gloria"));

function BoxApresentacao() {
  return (
    <div className='container-box-apresentation'>
      <div className="logos-container">
        <img src={logoOrc} alt="Logo Orc" className='logo-inicial' />
        <img src={logoGloria} alt="Logo Gloria" className='logo-inicial' />
        <img src={logoNaPraia} alt="Logo Na Praia" id='logo-napraia' className='logo-inicial' />
      </div>
      <div className="box-apresentation">
        <div className="box-apresentation-elements">
          <h3 className="box-apresentation-title">
            Olá, eu sou a Glória, uma inteligência artificial com o propósito de combater a violência contra mulheres e meninas. Sou uma 'robozinha' desenvolvida com a missão de contribuir para um mundo mais seguro e igualitário para todas as mulheres. Meu objetivo principal é criar conscientização, educar e fornecer recursos para prevenir a violência e apoiar as vítimas.
          </h3>
          <BotaoAvancar />
        </div>
      </div>
      <div className='container-gloria-initial'>
        <Suspense fallback={<span>Loading...</span>}>
          <Gloria animacao={gloriaFalando} />
        </Suspense>
      </div>
    </div>
  );
}

export default BoxApresentacao

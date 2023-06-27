import React from "react";
import { useEffect, useState } from "react";

import Roleta from "../components/Roleta/Roleta";
import "../styles/TelaRoleta.css"
import Gloria from "../components/Gloria";
import gloriaFalando from '../gloria/gloria_falando.mp4';



const TelaRoleta = () => {

  const [scale, setScale] = useState(1)

	useEffect(() => {
	  if (window.innerWidth > 720) {
		  setScale(0.3)
	  }
	}, [])

  return (
    <div className='TelaRoleta'>
      <div className="background-roleta">
        <di className="roletaTitleBox">
          <h1 className="roletaTitle">Gire a roleta e descubra qual será seu tema sobre o mundo do protagonismo feminino</h1>
        </di>
        <div className="roletaDivInferior">
          <Gloria animacao={gloriaFalando} maxWidth={60000} scale={scale}/>
        
          <div className="Roleta">
            <Roleta/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TelaRoleta;

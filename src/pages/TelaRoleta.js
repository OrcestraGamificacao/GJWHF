import React from 'react'
import { useEffect, useState } from 'react'

import Roleta from '../components/Roleta/Roleta'
import '../styles/TelaRoleta.css'

const TelaRoleta = () => {
  // eslint-disable-next-line
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth > 720) {
      setScale(0.3)
    }
  }, [])

  return (
    <div className="TelaRoleta">
      <div className="background-roleta">
        <di className="roletaTitleBox">
          <h1 className="roletaTitle">
            Gire a roleta e descubra qual será seu tema sobre o mundo do
            protagonismo feminino!
          </h1>
        </di>
        <div className="roletaDivInferior">
          <div className="Roleta">
            <Roleta />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaRoleta

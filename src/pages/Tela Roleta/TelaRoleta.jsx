import React from "react";
import Roleta from "../../components/Roleta/Roleta";
import styles from "./TelaRoleta.module.css"

const TelaRoleta = () => {

  return (
    <div className='TelaRoleta'>
      <div className={styles.boxInvite}>
        <h1 className={styles.titulo}>Gire a roleta para descubrir seu tema!</h1>
      </div>
      <Roleta/>
    </div>
  )
}

export default TelaRoleta;

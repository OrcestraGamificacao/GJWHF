import React from "react";
import styles from './BotaoResposta.module.css'

const BotaoResposta = (props) => {
    return(
        <div className={styles.frame}>
            <button className={`${styles.botao} ${styles.customBtn} ${styles.btn1}`}><span>{props.texto}</span></button>
        </div>
    )
}

export default BotaoResposta
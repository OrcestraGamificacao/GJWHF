import React from "react";
import styles from './BotaoResposta.module.css'

const BotaoResposta = (props) => {
    return(
        <div className={styles.frame}>
            <button onClick={props.acao} className={`${styles.botao} ${styles.customBtn} ${styles.btn1}`} disabled={props.disabled}><span>{props.texto}</span></button>
        </div>
    )
}

export default BotaoResposta
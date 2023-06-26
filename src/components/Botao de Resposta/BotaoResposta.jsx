import React from "react";
import styles from './BotaoResposta.module.css'

const BotaoResposta = (props) => {
    return(
        <div className={styles.frame}>
            <button value={props.value} id={props.id} className={`${styles.botao} ${styles.customBtn} ${styles.btn1}`} onClick={props.acao}><span>{props.texto}</span></button>
        </div>
    )
}

export default BotaoResposta
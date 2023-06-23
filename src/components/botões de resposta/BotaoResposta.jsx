import React from "react";
import styles from './BotaoResposta.module.css'

const BotaoResposta = () => {
    return(
        <div className={styles.frame}>
            <button class={`${styles.botao} ${styles.customBtn} ${styles.btn1}`}><span>Exemplo</span></button>
        </div>
    )
}

export default BotaoResposta
import React from "react";
import "./BalaoMensagem.css"

const BalaoMensagem = (props) => {
    return (
        <div className="frame">
            <button className="custom-btn-btn-1">
            <span>{props.texto}
                {/* Olá, eu sou a Glória! <br />
                Vou começar explicando a gamificação! */}
            </span>
            </button>
        </div>
    )
}

export default BalaoMensagem

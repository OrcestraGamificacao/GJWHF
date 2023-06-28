import React, { useState, useEffect } from "react";
import "../styles/Premio.css"

import baixoMobile from "../images/gloriaMobileBaixo.png"
import medioMobile from "../images/gloriaMobileMedio.png"
import altoMobile from "../images/gloriaMobileAlto.png"
import baixoDesktop from "../images/gloriaDesktopBaixo.png"
import medioDesktop from "../images/gloriaDesktopMedio.png"
import altoDesktop from "../images/gloriaDesktopAlto.png"

export default function Premio(props) {
    let back = medioMobile

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDigits = (value) => {
        return value.toString().padStart(2, "0");
    };

    const date = new Date()
    const data = {
        month: date.getMonth()+1,
        day: date.getDate(),
        hour: formatDigits(currentTime.getHours()),
        minute: formatDigits(currentTime.getMinutes()),
    }

    switch (props.nota) {
        case "baixo":
            back = window.innerWidth < 450 ? baixoMobile : baixoDesktop
            break;
        case "medio":
            back = window.innerWidth < 450 ? medioMobile : medioDesktop
            break;
        case "alto":
            back = window.innerWidth < 450 ? altoMobile : altoDesktop
            break;
        default:
            break;
    }

    return (
        <div className="premio-container" style={{backgroundImage: `url('${back}')`}}>
            <div className="premio-box">
                <span className="premio-nome">{sessionStorage.getItem("nome")}</span>
                <div className="premio-box-data">{}
                    <span className="premio-hora">{data.hour}:{data.minute} | </span>
                    <span className="premio-data">{data.day}.{data.month}</span>
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import "../styles/Premio.css"

import baixoMobile from "../images/gloria-selo-mobile-cinza.png"
import medioMobile from "../images/gloria-selo-mobile-rosa.png"
import altoMobile from "../images/gloria-selo-mobile-roxo.png"
import baixoDesktop from "../images/gloria-selo-cinza.png"
import medioDesktop from "../images/gloria-selo-rosa.png"
import altoDesktop from "../images/gloria-selo-roxo.png"

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
            back = window.innerWidth < 1024 ? baixoMobile : baixoDesktop
            break;
        case "medio":
            back = window.innerWidth < 1024 ? medioMobile : medioDesktop
            break;
        case "alto":
            back = window.innerWidth < 1024 ? altoMobile : altoDesktop
            break;
        default:
            break;
    }

    return (
        <div className="premio-container">
            <div className="premio-container-img" style={{backgroundImage: `url('${back}')`}}>
                <div className="premio-box-space-ajust"></div>
                <div className="premio-box">
                    <span className="premio-nome">{sessionStorage.getItem("nome")||"NULL" }</span>
                    <div className="premio-box-data">{}
                        <span className="premio-hora">{data.hour}:{data.minute} | </span>
                        <span className="premio-data">{data.day}.{data.month}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
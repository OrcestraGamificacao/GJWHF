import { useSelector } from "react-redux";
import "../styles/Premio.css"
import {TextToImage, TextToImageWithShadow} from "../utils/textToImageKonva";

import baixoMobile from "../images/gloria-selo-mobile-cinza.png"
import medioMobile from "../images/gloria-selo-mobile-rosa.png"
import altoMobile from "../images/gloria-selo-mobile-roxo.png"
import baixoDesktop from "../images/gloria-selo-cinza.png"
import medioDesktop from "../images/gloria-selo-rosa.png"
import altoDesktop from "../images/gloria-selo-roxo.png"



export default function Premio(props) {

    const nome = useSelector((state) => state.session.nome);
    const date = new Date(useSelector((state) => state.session.data));

    // Largura do nome da pessoa no selo, que muda de acordo com o tamanho da tela
    let nomeWidth = window.innerWidth < 1024 ? window.innerWidth*0.9 : 450;

    let nomeSize = window.innerWidth < 1024 ? 20 : 28;
    let dataSize = window.innerWidth < 1024 ? 14 : 18;

    const formatDigits = (value) => {
        return value.toString().padStart(2, "0");
    };

    const data = {
        month: date.getMonth()+1,
        day: date.getDate(),
        hour: formatDigits(date.getHours()),
        minute: formatDigits(date.getMinutes()),
    }
    const dataString = `${data.hour}:${data.minute} | ${data.day}.${data.month}`

    let back = medioMobile 

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
                    <TextToImageWithShadow width={nomeWidth} textSize={nomeSize} text={nome||"NULL"}/>
                    <TextToImage width={450} textSize={dataSize} text={dataString}/>
                </div>
            </div>
        </div>
    )
}
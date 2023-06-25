import React, { useState} from "react"
import Swal from 'sweetalert2'

import styles from "./Roleta.module.css"
import pngCoracaoGloria from '../assets/gloria-heart.png'

const Roleta = () => {    
    let roletaObj;
    const [animacao, setAnimacao] = useState(false)

    // Iniciar o giro da roleta
    function playOnClick() {
        roletaObj = {
            btnPlay: document.getElementById('btnPlay'),
            roleta: document.getElementById('roleta'),
            btnStop: document.getElementById('btnStop'),
        }
        
        roletaObj.timeInitial = new Date()
        roletaObj.btnPlay.style.visibility = 'hidden'
        roletaObj.btnStop.style.visibility = 'visible'
        // roletaObj.roleta.style.animation = 'roleta 2s linear infinite'

        const tempos = [3000, 3250 , 3500, 3750, 4000]
        let tempoSorteado = tempos[Math.floor(Math.random()*tempos.length)]
        console.log(tempoSorteado)
    
        // Esperar 3 segundos antes de chamar a função stopOnClick
        setTimeout(stopOnClick, tempoSorteado)
    }

    // Calcular qual será o tema sorteado
    function calculate() {
        var timeFinal = new Date()
        var tempo = Math.abs(timeFinal - roletaObj.timeInitial)
        var box = parseInt(tempo / 250)

        if (box > 7) {
            box = parseInt(box % 8)
        }

        console.log(roletaObj.timeInitial, timeFinal, tempo, box, tempo / 250)
        return box
    }

    // Parar o giro da roleta e exibir o tema sorteado
    function stopOnClick() {
        setAnimacao(false)
        var box = calculate()

        if(box !== null){
            const boxGanhador = document.getElementById("opt".concat(box)).innerHTML
            console.log("Tema sorteado:", boxGanhador);        
            
            //Pop up de revelação do tema
            setTimeout(function(){
                
                let timerInterval
                Swal.fire({
                    title: 'O tema sorteado foi:',
                    html: boxGanhador,
                    timer: 2000,
                    //timerProgressBar: true,
                    width: '40%',
                    padding: '15px',
                    background: '#F5F5F7',
                    color: '#612368',
                    confirmButtonColor: '#BC88BC',
                    didOpen: () => {
                        timerInterval = setInterval(Swal.getTimerLeft())
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                        localStorage.setItem('temaSorteado', boxGanhador)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }, 300)
        }
    }

    return(
        <div className={styles.folha}>
            <div className={styles.seta}></div>
            <div id="roleta" className={`${styles.roleta} ${animacao ? "" : styles.roletaPausada}`}>

                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
                <div className={styles.box4}></div>
                <div className={styles.box5}></div>
                <div className={styles.box6}></div>
                <div className={styles.box7}></div>
                <div className={styles.box8}></div>

                <div className={`${styles.tema} ${styles.tema1}`} id="opt1">Tecnologia</div>
                <div className={`${styles.tema} ${styles.tema2}`} id="opt0">Inovação</div>
                <div className={`${styles.tema} ${styles.tema3}`} id="opt7">Saúde</div>
                <div className={`${styles.tema} ${styles.tema4}`} id="opt6">Educação</div>
                <div className={`${styles.tema} ${styles.tema5}`} id="opt5">Tecnologia</div>
                <div className={`${styles.tema} ${styles.tema6}`} id="opt4">Inovação</div>
                <div className={`${styles.tema} ${styles.tema7}`} id="opt3">Saúde</div>
                <div className={`${styles.tema} ${styles.tema8}`} id="opt2">Educação</div>

                <div id="btnPlay" className={`${styles.btnRoleta} ${styles.play}`} onClick={() => {playOnClick(); setAnimacao(true)}}>
                    <img
                        src={pngCoracaoGloria}
                        alt="Logo de Coração do Intituto Glória"
                        className={`${styles.btnRoleta} ${styles.imagem}`}
                    />
                </div>
                <div id="btnStop" className={`${styles.btnRoleta}`} style={{ visibility: "hidden" }}>
                    <img
                        src={pngCoracaoGloria}
                        alt="Logo de Coração do Intituto Glória"
                        className={`${styles.btnRoleta} ${styles.imagem}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Roleta
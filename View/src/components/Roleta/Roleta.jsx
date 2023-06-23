import React from "react"

const Roleta = () => {
    return(
        <div class="folha">
            <div class="seta"></div>
            <div class="roleta" id="roleta">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
                <div class="box4"></div>
                <div class="box5"></div>
                <div class="box6"></div>
                <div class="box7"></div>
                <div class="box8"></div>

                <div class="tema tema1" id="opt1">Tecnologia</div>
                <div class="tema tema2" id="opt0">Inovação</div>
                <div class="tema tema3" id="opt7">Saúde</div>
                <div class="tema tema4" id="opt6">Educação</div>
                <div class="tema tema5" id="opt5">Tecnologia</div>
                <div class="tema tema6" id="opt4">Inovação</div>
                <div class="tema tema7" id="opt3">Saúde</div>
                <div class="tema tema8" id="opt2">Educação</div>

                <div id="btnPlay" class="btnRoleta play" onclick="playOnClick()">
                <img
                    src="./assets/gloria-heart.png"
                    alt="Logo de Coração do Intituto Glória"
                    class="btnRoleta imagem"
                />
                </div>
                <div id="btnStop" class="btnRoleta" style="visibility: hidden">
                <img
                    src="./assets/gloria-heart.png"
                    alt="Logo de Coração do Intituto Glória"
                    class="btnRoleta imagem"
                />
                </div>
            </div>
        </div>
    )
}

export default Roleta
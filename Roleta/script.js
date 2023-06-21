//4 temas sorteados na roleta
//banco com 10 perguntas pra cada tema
//cada usuário responde apenas 5 perguntas do banco


//Iniciar o giro da roleta
function playOnClick() {   
    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("roleta"),
        btnStop: document.getElementById("btnStop")
    }
    
    globalObjects.timeInitial = new Date();
    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.btnStop.style.visibility = "visible";
    globalObjects.roleta.style.animation = "roleta 1s linear infinite";
}

//Calcular qual será o tema sorteado
function calculate() {
    var timeFinal = new Date();
    var tempo = Math.abs(timeFinal - globalObjects.timeInitial);
    var box = parseInt(tempo / 125);
    if (box > 7){
        box = parseInt(box % 8);
    }
    console.log(globalObjects.timeInitial, timeFinal, tempo, box, (tempo / 250));
    return box;
}

//Parar o giro da roleta e exibir o tema sorteado
function stopOnClick() {
    globalObjects.roleta.style["animation-play-state"] = "paused";
    // globalObjects.btnStop.style.visibility = "hidden";
    var box = calculate();
    var boxGanhador = document.getElementById("opt".concat(box))
    document.getElementById("msgGanhador").innerHTML = "O tema sorteado foi:  ".concat(boxGanhador.innerHTML);
}
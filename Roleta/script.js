//4 temas sorteados na roleta
//banco com 10 perguntas pra cada tema
//cada usuário responde apenas 5 perguntas do banco

// Iniciar o giro da roleta
function playOnClick() {
  globalObjects = {
    btnPlay: document.getElementById('btnPlay'),
    roleta: document.getElementById('roleta'),
    btnStop: document.getElementById('btnStop'),
    msgWinner: document.getElementById('msgWinner')
    // Um novo elemento msgWinner ao objeto globalObjects para acessar o elemento HTML onde exibiremos o tema sorteado
  }

  globalObjects.timeInitial = new Date()
  globalObjects.btnPlay.style.visibility = 'hidden'
  globalObjects.btnStop.style.visibility = 'visible'
  globalObjects.roleta.style.animation = 'roleta 2s linear infinite' // Alterado para 3 segundos
  globalObjects.msgWinner.innerHTML = '' // Limpar a mensagem do tema sorteado
}

// Calcular qual será o tema sorteado
function calculate() {
  var timeFinal = new Date()
  var tempo = Math.abs(timeFinal - globalObjects.timeInitial)
  var box = parseInt(tempo / 250)
  if (box > 7) {
    box = parseInt(box % 8)
  }
  console.log(globalObjects.timeInitial, timeFinal, tempo, box, tempo / 250)
  return box
}

// Parar o giro da roleta e exibir o tema sorteado
function stopOnClick() {
  globalObjects.roleta.style['animation-play-state'] = 'paused'
  globalObjects.btnStop.style.visibility = 'visible'
  var box = calculate()
  var boxWinner = document.getElementById('opt'.concat(box))
  globalObjects.msgWinner.innerHTML =
    'O tema sorteado foi: ' + boxWinner.innerText // Alterado de innerHTML para innerText
}

const tempos = [3000, 3250 , 3500, 3750, 4000]
let tempoSorteado = tempos[Math.floor(Math.random()*tempos.length)]

// Esperar 3 segundos antes de chamar a função stopOnClick
setTimeout(stopOnClick, tempoSorteado)

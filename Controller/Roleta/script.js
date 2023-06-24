
// Iniciar o giro da roleta
function playOnClick() {
    globalObjects = {
      btnPlay: document.getElementById('btnPlay'),
      roleta: document.getElementById('roleta'),
      btnStop: document.getElementById('btnStop'),
    }
  
    globalObjects.timeInitial = new Date()
    globalObjects.btnPlay.style.visibility = 'hidden'
    globalObjects.btnStop.style.visibility = 'visible'
    globalObjects.roleta.style.animation = 'roleta 2s linear infinite' // Alterado para 3 segundos
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
    const boxGanhador = document.getElementById("opt".concat(box)).innerHTML
  
    setTimeout(function(){
        //Pop up de revelação do tema
      let timerInterval
      Swal.fire({
          title: 'O tema sorteado foi:',
          html: boxGanhador,
          timer: 2000,
          timerProgressBar: true,
          width: '40%',
          padding: '15px',
          background: '#F5F5F7',
          color: '#612368',
          didOpen: () => {
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
              }, 100)
          },
          willClose: () => {
              clearInterval(timerInterval)
              localStorage.setItem('temaSorteado', boxGanhador)
              window.location.href = '../Questionario/index.html'
          }
      }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
          }
      })
    }, 300)
  }
  
  const tempos = [3000, 3250 , 3500, 3750, 4000]
  let tempoSorteado = tempos[Math.floor(Math.random()*tempos.length)]
  console.log(tempoSorteado)
  
  // Esperar 3 segundos antes de chamar a função stopOnClick
  setTimeout(stopOnClick, tempoSorteado)
class Questao {
    constructor(numQuestao, pergunta, alternativaA, alternativaB, alternativaC, resposta){
        this.numQuestao = numQuestao
        this.pergunta = pergunta
        this.alternativaA = alternativaA
        this.alternativaB = alternativaB
        this.alternativaC = alternativaC
        this.resposta = resposta
    }
}


let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0
let placar = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = new Questao(0, 'Pergunta', 'Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa B')

const q1 = new Questao(1, 'Gamificação é:', 'Jogo', 'Juntar pontos', 'Aplicar elementos de jogos em contextos reais', 'Aplicar elementos de jogos em contextos reais')

const q2 = new Questao(2, 'A Diretoria de Operações da Orc é conhecida como:', 'Diproj', 'TOps', 'DirOp', 'TOps')

const q3 = new Questao(3, 'Onde comer no Gama?', 'Salgado de 1,50', 'O belisco', 'RU', 'Salgado de 1,50')

const q4 = new Questao(4, 'Quantas Anas tem na Orc?', '3', '4', '5', '4')

const q5 = new Questao(5, 'Quantos membros tem na Orc?', '42', '41', '43', '42')

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

let totalDeQuestoes = (questoes.length) - 1
total.textContent = totalDeQuestoes

proximaQuestao(1)

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta

    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC

    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}


function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {
    
    let numeroDaQuestao = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].resposta

    if (respostaEscolhida == certa) {
        pontos += 10
    } else {

    }

    placar = pontos
    instrucoes.textContent = 'Pontos ' + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes){
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = 'Fim do jogo'
    numQuestao.textContent = ''

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = 'Você conseguiu ' + pontos + ' ' + pont

    aviso.textContent = 'Você conseguiu ' + pontos + ' ' + pont

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0
        location.reload()
    }, 2000)
}
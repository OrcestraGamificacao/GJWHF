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

const q0 = {
    numQuestao: 0,
    pergunta: 'Pergunta',
    alternativaA: 'Alternativa A',
    alternativaB: 'Alternativa B',
    alternativaC: 'Alternativa C',
    correta: 'Alternativa B'
}

const q1 = {
    numQuestao: 1,
    pergunta: 'Gamificação é:',
    alternativaA: 'Jogo',
    alternativaB: 'Juntar pontos',
    alternativaC: 'Aplicar elementos de jogos em contextos reais',
    correta: 'Aplicar elementos de jogos em contextos reais'
}

const q2 = {
    numQuestao: 2,
    pergunta: 'A Diretoria de Operações da Orc é conhecida como:',
    alternativaA: 'Diproj',
    alternativaB: 'TOps',
    alternativaC: 'Dirop',
    correta: 'TOps'
}

const q3 = {
    numQuestao: 3,
    pergunta: 'Onde comer no Gama?',
    alternativaA: 'Salgado de 1,50',
    alternativaB: 'O belisco',
    alternativaC: 'RU',
    correta: 'Salgado de 1,50'
}

const q4 = {
    numQuestao: 4,
    pergunta: 'Quantas Anas tem na Orc?',
    alternativaA: '3',
    alternativaB: '4',
    alternativaC: '5',
    correta: '4'
}

const q5 = {
    numQuestao: 5,
    pergunta: 'Quantos membros tem na Orc?',
    alternativaA: '42',
    alternativaB: '41',
    alternativaC: '43',
    correta: '42'
}

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

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
    let certa = questoes[numeroDaQuestao].correta

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
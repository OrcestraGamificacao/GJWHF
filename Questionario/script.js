const temaSorteado = localStorage.getItem('temaSorteado')
console.log(temaSorteado)

const q0 = new Questao(0, 'Pergunta', 'Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa B')

const q1 = new Questao(1, 'Gamificação é:', 'Jogo', 'Juntar pontos', 'Aplicar elementos de jogos em contextos reais', 'sim', 'Aplicar elementos de jogos em contextos reais')

const q2 = new Questao(2, 'A Diretoria de Operações da Orc é conhecida como:', 'Diproj', 'TOps', 'DirOp', 'sim', 'TOps')

const q3 = new Questao(3, 'Onde comer no Gama?', 'Salgado de 1,50', 'O belisco', 'RU', 'sim', 'Salgado de 1,50')

const q4 = new Questao(4, 'Quantas Anas tem na Orc?', '3', '4', '5', 'sim', '4')

const q5 = new Questao(5, 'Quantos membros tem na Orc?', '42', '41', '43', 'sim', '42')

let enunciado = document.getElementById('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

const questoes = [q0, q1, q2, q3, q4, q5]
const totalDeQuestoes = 5

let pontos = 0

proximaQuestao(1)

function proximaQuestao(nQuestao) {
    enunciado.textContent = questoes[nQuestao].pergunta

    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD

    a.setAttribute('value', nQuestao)
    b.setAttribute('value', nQuestao)
    c.setAttribute('value', nQuestao)
    d.setAttribute('value', nQuestao)
}


function verificarSeAcertou(selecao) {

    let num = selecao.getAttribute('value')
    let numInt = parseInt(num)
    console.log(numInt)
    console.log(typeof numInt)
    let respostaSelecionada = selecao.textContent
    let respostaCerta = questoes[numInt].resposta
    
    if (respostaCerta == respostaSelecionada) {
        pontos += 1
        console.log('certo')
    } else {
        console.log('errado')
    }

    setTimeout(function() {
        proxima = numInt + 1
        if (proxima <= totalDeQuestoes) {
            proximaQuestao(proxima)
        }
        else {
            console.log('fim')
            console.log('pontos: '+pontos)
        }
    }, 250)

}
const temaSorteado = localStorage.getItem('temaSorteado')
console.log(temaSorteado)

let enunciado = document.getElementById('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let questoesTema = [] // todas as questoes do tema
let questoes = [] // questoes sorteadas
let questaoExtra
questoes[0] = q0 // usei a q0 só para o index ir acompanhando o numero da questao
const totalDeQuestoes = 5

if (temaSorteado == 'Tecnologia'){
    questoesTema = tecQuestoes
    questaoExtra = tecExtra
} else if (temaSorteado == 'Inovação'){
    questoesTema = inovQuestoes
    questaoExtra = inovExtra
} else if (temaSorteado == 'Educação'){
    questoesTema = eduQuestoes
    questaoExtra = eduExtra
} else if (temaSorteado == 'Saúde'){
    questoesTema = saudeQuestoes
    questaoExtra = saudeExtra
}

while (questoes.length < 7){ // sorteio das questoes 
    let questaoSorteada = questoesTema[Math.floor(Math.random() * questoesTema.length)]

    if (questoes.indexOf(questaoSorteada) == -1){  // confere se a questao ja foi sorteada
        questoes.push(questaoSorteada)
    }
}

questoes[6] = questaoExtra // a questao extra nao entra no sorteio

console.log(questoes)

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

const btnProximaQuestao = document.getElementById('btnProximaQuestao');


function verificarSeAcertou(selecao) {

    let num = selecao.getAttribute('value')
    let numInt = parseInt(num)
    console.log(numInt)
    console.log(typeof numInt)
    let respostaSelecionada = selecao.textContent
    let respostaCerta = questoes[numInt].resposta
    
    if (respostaCerta == respostaSelecionada) {
        Usuario.pontuacao += 1
        console.log('certo')
        //mudar a cor do botão se a pessoa acertou
        selecao.style.backgroundColor = '#6aea6a'
        


    } else {
        console.log('errado')
        //mudar a cor do botão se a pessoa errou
        selecao.style.backgroundColor = '#ff6961'

    }

    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    d.disabled = true;

    

    btnProximaQuestao.addEventListener('click', function() {

        a.disabled = false;
        b.disabled = false;
        c.disabled = false;
        d.disabled = false;
        proxima = numInt + 1
        if (proxima <= totalDeQuestoes) {
            //voltar a cor original do botão após passar a pergunta
            selecao.style.backgroundColor = '';
            proximaQuestao(proxima)
        } else {
            console.log('fim')
            console.log('pontos: '+ Usuario.pontuacao)
        }
    }, 250)

}
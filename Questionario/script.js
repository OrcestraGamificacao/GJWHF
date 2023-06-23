const temaSorteado = localStorage.getItem('temaSorteado')
console.log(temaSorteado)

let enunciado = document.getElementById('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let questoesTema = [] // todas as questoes do tema
let questoes = [] // questoes sorteadas
questoes[0] = q0 // usei a q0 só para o index ir acompanhando o numero da questao
const totalDeQuestoes = 5

if (temaSorteado == 'Tecnologia'){
    questoesTema = tecQuestoes
} else if (temaSorteado == 'Inovação'){
    questoesTema = inovQuestoes
} else if (temaSorteado == 'Educação'){
    questoesTema = eduQuestoes
} else if (temaSorteado == 'Saúde'){
    questoesTema = saudeQuestoes
}

while (questoes.length < 6){ // sorteio das questoes 
    let questaoSorteada = questoesTema[Math.floor(Math.random() * questoesTema.length)]

    if (questoes.indexOf(questaoSorteada) == -1){  // confere se a questao ja foi sorteada
        questoes.push(questaoSorteada)
    }
}

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





import BotaoResposta from "../../components/Botao de Resposta/BotaoResposta";
import { useRef, useLayoutEffect } from "react";

import { Usuario } from "../../Model/modelUsuario";
import { q0 } from "../../Model/modelQuestao"
import { tecQuestoes } from "../../Model/Banco de Questoes/tecnologia"
import { inovQuestoes } from "../../Model/Banco de Questoes/inovacao"
import { eduQuestoes } from "../../Model/Banco de Questoes/educacao"
import { saudeQuestoes } from "../../Model/Banco de Questoes/saude"

import styles from "./TelaQuestionario.module.css"


const TelaQuestionario = () => {

  let questaoAtual = 0

  const temaSorteado = localStorage.getItem('temaSorteado')
  console.log(temaSorteado)

  let a = document.querySelector('#a')
  let b = document.querySelector('#b')
  let c = document.querySelector('#c')
  let d = document.querySelector('#d')

  let enunciado
  let textoA, textoB, textoC, textoD

  let questoesTema = [] // todas as questoes do tema
  let questoes = [] // questoes sorteadas
  questoes[0] = q0 // usei a q0 só para o index ir acompanhando o numero da questao
  const totalDeQuestoes = 5

  if (temaSorteado === 'Tecnologia'){
      questoesTema = tecQuestoes
  } else if (temaSorteado === 'Inovação'){
      questoesTema = inovQuestoes
  } else if (temaSorteado === 'Educação'){
      questoesTema = eduQuestoes
  } else if (temaSorteado === 'Saúde'){
      questoesTema = saudeQuestoes
  }

  while (questoes.length < 6){ // sorteio das questoes 
    let questaoSorteada = questoesTema[Math.floor(Math.random() * questoesTema.length)]

    if (questoes.indexOf(questaoSorteada) === -1){  // confere se a questao ja foi sorteada
      questoes.push(questaoSorteada)
    }
  }

  console.log(questoes)

  let numQuestao = 0
  let proxima = 1
  proximaQuestao(1)

  function proximaQuestao(nQuestao) {
      enunciado = questoes[nQuestao].pergunta
      questaoAtual = nQuestao

      textoA = questoes[nQuestao].alternativaA
      textoB = questoes[nQuestao].alternativaB
      textoC = questoes[nQuestao].alternativaC
      textoD = questoes[nQuestao].alternativaD

      console.log(nQuestao)

      console.log(a)
      console.log(b)
      console.log(c)
      console.log(d)

      numQuestao ++
      // a.setAttribute('value', nQuestao)
      // b.setAttribute('value', nQuestao)
      // c.setAttribute('value', nQuestao)
      // d.setAttribute('value', nQuestao)
  }

  // function verificarSeAcertou(selecao) {

  //     let num = selecao.getAttribute('value')
  //     let numInt = parseInt(num)
  //     console.log(numInt)
  //     console.log(typeof numInt)
  //     let respostaSelecionada = selecao.textContent
  //     let respostaCerta = questoes[numInt].resposta
      
  //     if (respostaCerta === respostaSelecionada) {
  //         Usuario.pontuacao += 1
  //         console.log('certo')
  //         //mudar a cor do botão se a pessoa acertou
  //         selecao.style.backgroundColor = '#6aea6a'
  //     } else {
  //         console.log('errado')
  //         //mudar a cor do botão se a pessoa errou
  //         selecao.style.backgroundColor = '#ff6961'

  //     } 

  //     a.disabled = true;
  //     b.disabled = true;
  //     c.disabled = true;
  //     d.disabled = true;

  //     setTimeout(() => {
  //       a.disabled = false;
  //       b.disabled = false;
  //       c.disabled = false;
  //       d.disabled = false;
  //       proxima = numInt + 1

  //       if (proxima <= totalDeQuestoes) {
  //           //voltar a cor original do botão após passar a pergunta
  //           selecao.style.backgroundColor = '';
  //           proximaQuestao(proxima)
  //       } else {
  //           console.log('fim')
  //           console.log('pontos: '+ Usuario.pontuacao)
  //       }

  //     }, 250)

  // }


  return (
    <div className={styles.containerQuestionario}>
      <div className={styles.enunciado} id="#pergunta">{enunciado}</div>
      <p>Pergunta {questaoAtual} de 5</p>
      <BotaoResposta value={numQuestao} id={'a'} texto={textoA}/>
      <BotaoResposta value={numQuestao} id={'b'} texto={textoB}/>
      <BotaoResposta value={numQuestao} id={'c'} texto={textoC}/>
      <BotaoResposta value={numQuestao} id={'d'} texto={textoD}/>
      <div><button id="btnProximaQuestao">Próxima Questão</button></div>
    </div>
  )
}

export default TelaQuestionario;


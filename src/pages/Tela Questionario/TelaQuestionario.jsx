import React, { useEffect, useState } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";

import gloriaFalando from '../../gloria/Gloria_Meio_Da_Fala.mp4';
import gloriaSorrindo from '../../gloria/Gloria_Sorrindo.mp4';
import gloriaBrava from '../../gloria/Gloria_Sem_Entender.mp4';


import questoesInovacao from "../../Model/Banco de Questoes/inovacao";
import questoesAtivismo from "../../Model/Banco de Questoes/ativismo";
import questoesEducacao from "../../Model/Banco de Questoes/educacao";
import questoesSaude from "../../Model/Banco de Questoes/saude";

import BotaoResposta from "../../components/Botao de Resposta/BotaoResposta";
import "./TelaQuestionario.css";
import Gloria from "../../components/Gloria";

const useLocalStorage = (key) => {
	const [data] = useState(localStorage.getItem(key));

	return data;
};

function shuffleArray(arr) {
	// Loop em todos os elementos
	for (let i = arr.length - 1; i > 0; i--) {
		// Escolhendo elemento aleatório
		const j = Math.floor(Math.random() * (i + 1));
		// Reposicionando elemento
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
}

function TelaQuestionario() {


	const [scale, setScale] = useState(1)

	useEffect(() => {
	  if (window.innerWidth > 720) {
		setScale(0.3)
	  }
	}, [])
	const [numQuestao, setNumQuestão] = useState(0);
	const temaSorteado = useLocalStorage("temaSorteado");


	const [gloriaAnimacao, setGloriaAnimacao ] = useState(gloriaFalando)
	const [questoesTema, setQuestoesTema] = useState(false);
	const [indexArray, setIndexArray] = useState(0);
	const [pontuacao, setPontuacao] = useState(0)
	const [desabilitado, setDesabilitado] = useState(false)

	const getQuestoes = () => {
		switch (temaSorteado) {
			case "Inovação":
				setQuestoesTema(() => shuffleArray([...questoesInovacao()]));
				break;
			case "Ativismo":
				setQuestoesTema(() => shuffleArray([...questoesAtivismo()]));
				break;
			case "Educação":
				setQuestoesTema(() => shuffleArray([...questoesEducacao()]));
				break;
			case "Saúde":
				setQuestoesTema(() => shuffleArray([...questoesSaude()]));
				break;
			default:
				console.log("Sem tema");
				break;
		}
	};

	const proximaQuestao = () => {
		setDesabilitado(false)
		setGloriaAnimacao(gloriaFalando)

		if (indexArray < 4) {
			setIndexArray((valorAtual) => valorAtual + 1);
		}
	};

	function verificaQuestao(e){
		const elemId = e.currentTarget.id;
		switch (elemId) {
			case "QuesA":
				if (questoesTema[indexArray].alternativaA === questoesTema[indexArray].resposta){
					setPontuacao((ponto) => ponto+1)
					console.log('certo')
					setGloriaAnimacao(gloriaSorrindo)
				}
				else{
					setGloriaAnimacao(gloriaBrava)
				}
				break;
			case "QuesB":
				if (questoesTema[indexArray].alternativaB === questoesTema[indexArray].resposta){
					setPontuacao((ponto) => ponto+1)
					console.log('certo')
					setGloriaAnimacao(gloriaSorrindo)
				}
				else{
					setGloriaAnimacao(gloriaBrava)
				}
				break;
			case "QuesC":
				if (questoesTema[indexArray].alternativaC === questoesTema[indexArray].resposta){
					setPontuacao((ponto) => ponto+1)
					console.log('certo')
					setGloriaAnimacao(gloriaSorrindo)
				}
				else{
					setGloriaAnimacao(gloriaBrava)
				}
				break;
			case "QuesD":
				if (questoesTema[indexArray].alternativaD === questoesTema[indexArray].resposta){
					setPontuacao((ponto) => ponto+1)
					console.log('certo')
					setGloriaAnimacao(gloriaSorrindo)
				}
				else{
					setGloriaAnimacao(gloriaBrava)
				}
				break;
			default:
				break;
		}
		setDesabilitado(true)
	}

	useEffect(() => {
		console.log(pontuacao)
	}, [pontuacao])

	useEffect(() => {
		console.log({ questoesTema });
		return () => {};
	}, [questoesTema]);

	useEffect(() => {
		if (!questoesTema) getQuestoes();

		return () => {};
	}, [questoesTema, setQuestoesTema]);

	if (!questoesTema) return <></>;

	return (
		<div className="containerQuestionario">

			<p className="questionarioNumPergunta">Pergunta {indexArray + 1} de 5</p>
			<button className="iconContexto"><BiSolidHelpCircle/></button>

			<div className="enunciado">
				<h1 className="questionarioEnunciado" id="#pergunta">
					{questoesTema[indexArray].pergunta}
				</h1>
			</div>

			<div className="boxQuestoes">
				<div className="questoesEsquerda">
					<BotaoResposta texto={questoesTema[indexArray].alternativaA} questao={'QuesA'} acao={verificaQuestao} disabled={desabilitado}/>
					<BotaoResposta texto={questoesTema[indexArray].alternativaB} questao={'QuesB'} acao={verificaQuestao} disabled={desabilitado}/>
				</div>
				<div className="questoesDireita">
					<BotaoResposta texto={questoesTema[indexArray].alternativaC} questao={'QuesC'} acao={verificaQuestao} disabled={desabilitado}/>
					<BotaoResposta texto={questoesTema[indexArray].alternativaD} questao={'QuesD'} acao={verificaQuestao} disabled={desabilitado}/>
				</div>

			</div>
			
			<div className='container-gloria-init'>
        	<Gloria animacao={gloriaAnimacao} maxWidth={60000} scale={scale}/>
      		</div>

			<button id="btnProximaQuestao" onClick={proximaQuestao}>
				Próxima Questão
			</button> 
			
		</div>
	);
}

export default TelaQuestionario;

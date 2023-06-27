import React, { useEffect, useState } from "react";

import questoesTecnologia from "../../Model/Banco de Questoes/tecnologia";
import questoesInovacao from "../../Model/Banco de Questoes/inovacao";
import questoesEducacao from "../../Model/Banco de Questoes/educacao";
import questoesSaude from "../../Model/Banco de Questoes/saude";

import BotaoResposta from "../../components/Botao de Resposta/BotaoResposta";
import "./TelaQuestionario.css";

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
	const [numQuestao, setNumQuestão] = useState(0);
	const temaSorteado = useLocalStorage("temaSorteado");

	const [questoesTema, setQuestoesTema] = useState(false);
	const [indexArray, setIndexArray] = useState(0);
	const [pontuacao, setPontuacao] = useState(0)
	const [desabilitado, setDesabilitado] = useState(false)

	const getQuestoes = () => {
		switch (temaSorteado) {
			case "Tecnologia":
				setQuestoesTema(() => shuffleArray([...questoesTecnologia()]));
				break;
			case "Inovação":
				setQuestoesTema(() => shuffleArray([...questoesInovacao()]));
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

		if (indexArray < 4) {
			setIndexArray((valorAtual) => valorAtual + 1);
		}
	};

	function verificaQuestaoA(){

		if (questoesTema[indexArray].alternativaA === questoesTema[indexArray].resposta){
			setPontuacao((ponto) => ponto+1)
			console.log('certo')

		} else{
			console.log('errado')
		}
		setDesabilitado(true)
	}

	function verificaQuestaoB(){

		if (questoesTema[indexArray].alternativaB === questoesTema[indexArray].resposta){
			setPontuacao((ponto) => ponto+1)
			console.log('certo')
		} else{
			console.log('errado')
		}
		setDesabilitado(true)

	}

	function verificaQuestaoC(){
		
		if (questoesTema[indexArray].alternativaC === questoesTema[indexArray].resposta){
			setPontuacao((ponto) => ponto+1)
			console.log('certo')

		} else{
			console.log('errado')
		}
		setDesabilitado(true)
	}

	function verificaQuestaoD(){
		if (questoesTema[indexArray].alternativaD === questoesTema[indexArray].resposta){
			setPontuacao((ponto) => ponto+1)
			console.log('certo')
		} else{
			console.log('errado')
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
			<h1 className="quastionarioEnunciado" id="#pergunta">
				{questoesTema[indexArray].pergunta}
			</h1>
			<p className="questionarioNumPergunta">Pergunta {indexArray + 1} de 5</p>
			<ol>
				<BotaoResposta texto={questoesTema[indexArray].alternativaA} acao={verificaQuestaoA} disabled={desabilitado}/>
				<BotaoResposta texto={questoesTema[indexArray].alternativaB} acao={verificaQuestaoB} disabled={desabilitado}/>
				<BotaoResposta texto={questoesTema[indexArray].alternativaC} acao={verificaQuestaoC} disabled={desabilitado}/>
				<BotaoResposta texto={questoesTema[indexArray].alternativaD} acao={verificaQuestaoD} disabled={desabilitado}/>
			</ol>
			<button id="btnProximaQuestao" onClick={proximaQuestao}>
				Próxima Questão
			</button>
		</div>
	);
}

export default TelaQuestionario;

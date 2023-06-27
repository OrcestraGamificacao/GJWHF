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

	// function sorteiaArray() {
	// 	return Math.random() < Math.random();
	// }

	const [questoesTema, setQuestoesTema] = useState(false);

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

	const [indexArray, setIndexArray] = useState(0);

	const proximaQuestao = () => {
		if (indexArray < 4) {
			setIndexArray((valorAtual) => valorAtual + 1);
		}
	};

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
			<h1 className="enunciado" id="#pergunta">
				{questoesTema[indexArray].pergunta}
			</h1>
			<p>Pergunta {indexArray + 1} de 5</p>
			<ol>
				<BotaoResposta texto={questoesTema[indexArray].alternativaA} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaB} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaC} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaD} />
			</ol>
			<button id="btnProximaQuestao" onClick={proximaQuestao}>
				Próxima Questão
			</button>
		</div>
	);
}

export default TelaQuestionario;

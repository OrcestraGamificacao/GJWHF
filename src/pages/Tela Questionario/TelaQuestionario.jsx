import React, { useEffect, useState, lazy, Suspense } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementPontuacao, setPontuacao } from "../../states/sessionSlice";

import gloriaSorrindo from '../../gloria/gloria_sorrindo.gif';
import gloriaBrava from "../../gloria/gloria_sem_entender.gif";

import questoesInovacao from "../../Model/Banco de Questoes/inovacao";
import questoesAtivismo from "../../Model/Banco de Questoes/ativismo";
import questoesEducacao from "../../Model/Banco de Questoes/educacao";
import questoesSaude from "../../Model/Banco de Questoes/saude";

import BotaoResposta from "../../components/Botao de Resposta/BotaoResposta";
import "./TelaQuestionario.css";



const Gloria = lazy(() => import("../../components/Gloria"));


const useSessionStorage = (key) => {
	const [data] = useState(sessionStorage.getItem(key));
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
	const temaSorteado = useSessionStorage("temaSorteado");
	const navigate = useNavigate();
	// dispatch para salvar a pontuação no redux
	const dispatch = useDispatch();

	//const [gloriaAnimacao, setGloriaAnimacao] = useState(gloriaFalando)
	const [questoesTema, setQuestoesTema] = useState(false);
	const [indexArray, setIndexArray] = useState(0);
	const [desabilitado, setDesabilitado] = useState(false);
	const [animation, setAnimation] = useState("certo");

	const Swal = require('sweetalert2')
	function contextoPopUp() {
		Swal.fire({
			title: 'Dica',
			html: questoesTema[indexArray].textoIntrodutorio,
			showCancelButton: false,
			confirmButtonText: 'Voltar ao questionário',
			confirmButtonColor: '#612368',
			customClass: {
				htmlContainer: 'popup-text'
			}
		})
	}

	function respostaPopUp() {
		Swal.fire({
			title: 'Explicação',
			html: questoesTema[indexArray].textoExplicativo,
			confirmButtonText: indexArray < 4 ? 'Próxima questão' : 'Terminar',
			confirmButtonColor: '#bc88bc',
			position: 'middle',
			customClass: {
				htmlContainer: 'popup-text'
			}
		}).then(() => proximaQuestao())
	}

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
				break;
		}
	};

	const proximaQuestao = () => {
		setDesabilitado(false)
		setAnimation("certo")

		if (indexArray < 4) {
			setIndexArray((valorAtual) => valorAtual + 1);
		} else {
			navigate('/TelaTchau')
		}
	};

	function verificaQuestao(e) {
		const elemId = e.currentTarget.id;
		const elem = e.currentTarget;
		switch (elemId) {
			case "QuesA":
				if (questoesTema[indexArray].alternativaA === questoesTema[indexArray].resposta) {
					dispatch(incrementPontuacao());
					setAnimation("certo")
					elem.style.backgroundColor = 'green'
				}
				else {
					elem.style.backgroundColor = 'red'
					setAnimation("errado")
				}
				break;

			case "QuesB":
				if (questoesTema[indexArray].alternativaB === questoesTema[indexArray].resposta) {
					dispatch(incrementPontuacao());
					setAnimation("certo")
					elem.style.backgroundColor = 'green'
				}
				else {
					setAnimation("errado")
					elem.style.backgroundColor = 'red'
				}
				break;

			case "QuesC":
				if (questoesTema[indexArray].alternativaC === questoesTema[indexArray].resposta) {
					dispatch(incrementPontuacao());
					setAnimation("certo")
					elem.style.backgroundColor = 'green'
				}
				else {
					setAnimation("errado")
					elem.style.backgroundColor = 'red'
				}
				break;

			case "QuesD":
				if (questoesTema[indexArray].alternativaD === questoesTema[indexArray].resposta) {
					dispatch(incrementPontuacao());
					setAnimation("certo")
					elem.style.backgroundColor = 'green'
				}
				else {
					setAnimation("errado")
					elem.style.backgroundColor = 'red'
				}
				break;

			default:
				break;
		}
		setTimeout(() => {
			respostaPopUp()
			elem.style.backgroundColor = 'transparent'


		}, 2500)
		setDesabilitado(true)
	}

	useEffect(() => {
		return () => { };
	}, [questoesTema]);

	useEffect(() => {
		if (!questoesTema) getQuestoes();
		// quando iniciar o componente, a pontuação é setada para 0
		dispatch(setPontuacao(0));
		return () => { };
		
		// eslint-disable-next-line
	}, [questoesTema, setQuestoesTema]);

	if (!questoesTema) return <></>;

	return (
		<div className="containerQuestionario">
			<div className="cabecalho">
				<p className="questionarioNumPergunta">Pergunta {indexArray + 1} de 5</p>
			</div>

			<div className="enunciado">
				<h1 className="questionarioEnunciado" id="#pergunta">
					{questoesTema[indexArray].pergunta}
				</h1>
			</div>

			<button className="iconContextoBox" onClick={contextoPopUp}>
				<BiSearch className="iconContexto" onClick={contextoPopUp} />
				<p className="contextoBoxText">DICA</p>
			</button>

			<div className="boxQuestoes">
				<BotaoResposta texto={questoesTema[indexArray].alternativaA} questao={'QuesA'} acao={verificaQuestao} disabled={desabilitado} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaB} questao={'QuesB'} acao={verificaQuestao} disabled={desabilitado} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaC} questao={'QuesC'} acao={verificaQuestao} disabled={desabilitado} />
				<BotaoResposta texto={questoesTema[indexArray].alternativaD} questao={'QuesD'} acao={verificaQuestao} disabled={desabilitado} />
			</div>

			<div className='container-gloria-quest'>
				{
					<Suspense fallback={<span>Loading...</span>}>
						<Gloria animacao={gloriaSorrindo} display={animation.localeCompare("certo") === 0 ? "block" : "none"} />
						<Gloria animacao={gloriaBrava} display={animation.localeCompare("certo") === 0 ? "none" : "block"} />
					</Suspense>
				}
			</div>
		</div>
	);
}


export default TelaQuestionario;

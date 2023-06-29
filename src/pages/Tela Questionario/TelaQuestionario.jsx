import React, { useEffect, useState } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


import gloriaFalando from '../../gloria/gloria-talk-animation.webm';
import gloriaSorrindo from '../../gloria/gloria-talk-animation.webm';
import gloriaBrava from '../../gloria/gloria-talk-animation.webm';


import questoesInovacao from "../../Model/Banco de Questoes/inovacao";
import questoesAtivismo from "../../Model/Banco de Questoes/ativismo";
import questoesEducacao from "../../Model/Banco de Questoes/educacao";
import questoesSaude from "../../Model/Banco de Questoes/saude";


import BotaoResposta from "../../components/Botao de Resposta/BotaoResposta";
import "./TelaQuestionario.css";
import Gloria from "../../components/Gloria";


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


const Swal = require('sweetalert2')
function contextoPopUp(){
Swal.fire({
title: 'Contexto',
html: questoesTema[indexArray].textoIntrodutorio,
showCancelButton: false,
confirmButtonText: 'Voltar ao questionário',
confirmButtonColor: '#612368',
customClass: {
containerContexto: 'my-swal-container', // Classe personalizada para o container do SweetAlert
titleContexto: 'my-swal-title', // Classe personalizada para o título do SweetAlert
textContexto: 'my-swal-text', // Classe personalizada para o texto do SweetAlert
confirmButtonContexto: 'my-swal-confirm-button', // Classe personalizada para o botão de confirmação do SweetAlert
}
})
}


function respostaPopUp(){
Swal.fire({
title: 'Explicação',
html: questoesTema[indexArray].textoExplicativo,
confirmButtonText: indexArray < 4 ? 'Próxima questão' : 'Terminar',
confirmButtonColor: '#bc88bc',
position: 'middle'
}).then(() => proximaQuestao())
}


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


const navigate = useNavigate()
const proximaQuestao = () => {
setDesabilitado(false)
setGloriaAnimacao(gloriaFalando)


if (indexArray < 4) {
setIndexArray((valorAtual) => valorAtual + 1);
} else{
navigate('/TelaTchau')
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
setTimeout(() => {
respostaPopUp()


}, 1000)
setDesabilitado(true)
}


useEffect(() => {
console.log(pontuacao)
sessionStorage.setItem('pontuacao', pontuacao.toString())
}, [pontuacao])


useEffect(() => {
console.log({ questoesTema });
return () => {};
}, [questoesTema]);


useEffect(() => {
if (!questoesTema) getQuestoes();


return () => {};
// eslint-disable-next-line
}, [questoesTema, setQuestoesTema]);


if (!questoesTema) return <></>;


return (
<div className="containerQuestionario">
<div className="cabecalho">
<p className="questionarioNumPergunta">Pergunta {indexArray + 1} de 5</p>
<BiSolidHelpCircle className="iconContexto" onClick={contextoPopUp}/>
</div>


<div className="enunciado">
<h1 className="questionarioEnunciado" id="#pergunta">
{questoesTema[indexArray].pergunta}
</h1>
</div>


<div className="boxQuestoes">
<BotaoResposta texto={questoesTema[indexArray].alternativaA} questao={'QuesA'} acao={verificaQuestao} disabled={desabilitado}/>
<BotaoResposta texto={questoesTema[indexArray].alternativaB} questao={'QuesB'} acao={verificaQuestao} disabled={desabilitado}/>
<BotaoResposta texto={questoesTema[indexArray].alternativaC} questao={'QuesC'} acao={verificaQuestao} disabled={desabilitado}/>
<BotaoResposta texto={questoesTema[indexArray].alternativaD} questao={'QuesD'} acao={verificaQuestao} disabled={desabilitado}/>
</div>


<div className='container-gloria-quest'>
<Gloria animacao={gloriaAnimacao} />
</div>
</div>
);
}


export default TelaQuestionario;

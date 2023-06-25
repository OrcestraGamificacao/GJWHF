import BotaoResposta from "../components/Botao de Resposta/BotaoResposta";
import Roleta from "../components/Roleta/Roleta";

const PerguntaOpcoes = () => {

  return (
    <div className='Pergunta_Opcoes'>
      <BotaoResposta texto={"Pergunta1"}/>
      <BotaoResposta texto={"Pergunta2"}/>
      <BotaoResposta texto={"Pergunta3"}/>
      <BotaoResposta texto={"Pergunta4"}/>
    </div>
  )
}

export default PerguntaOpcoes;

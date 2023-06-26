import BoxExplicacaoGami from '../components/BoxExplicacaoGami'
import BotaoAvancarGami from '../components/BotaoAvancarGami'

const ApresentacaoGami = () => {
  return (
    <div className="ApresentacaoGami">
      <div className="background-ApresentacaoGami">
        <BoxExplicacaoGami />
      </div>
      <div className="botaoAvançar">
        <BotaoAvancarGami />
      </div>
    </div>
  )
}

export default ApresentacaoGami

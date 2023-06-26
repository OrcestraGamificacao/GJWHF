import BoxExplicacaoGami from '../components/BoxExplicacaoGami'
import BotaoAvancarGami from '../components/BotaoAvancarGami'

const ExplicacaoGamificacao = () => {
  return (
    <div className="ExplicacaoGamificacao">
      <div className="background-ExplicacaoGamificacao">
        <BoxExplicacaoGami />
      </div>
      <div className="botaoAvançar">
        <BotaoAvancarGami />
      </div>
    </div>
  )
}

export default ExplicacaoGamificacao

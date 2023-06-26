import BoxExplicacaoGami from '../components/BoxExplicacaoGami'
import BotaoAvancarGami from '../components/BotaoAvancarGami'
import Gloria from '../components/Gloria'

const ExplicacaoGamificacao = () => {
  return (
    <div className="ExplicacaoGamificacao">
      <div className="background-ExplicacaoGamificacao">
        <BoxExplicacaoGami />
        <Gloria/>
      </div>
      <div className="botaoAvançar">
        <BotaoAvancarGami />
      </div>
    </div>
  )
}

export default ExplicacaoGamificacao

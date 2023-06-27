import '../styles/BoxApresentacao2.css';
import BoxApresentacao2 from '../components/BoxApresentacao2';
import BotaoAvancar2 from '../components/BotaoAvancar2';

const Apresentacao2 = () => {
  return (
    <div className='Apresentacao2'>
      <div className="background-Apresentacao2">
          <BoxApresentacao2 />
      </div>
      <div className='botaoAvançar'>
        <BotaoAvancar2 />
      </div>
    </div>
  )
}

export default Apresentacao2
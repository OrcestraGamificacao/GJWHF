import './styles/App.css'
import Gloria from './components/Gloria'
import BoxApresentacao from './components/BoxApresentacao'
import BotaoAvancar from './components/BotaoAvancar'
import gloriaFalando from './gloria/gloria_falando.mp4';

//import TelaRoleta from '../src/pages/TelaRoleta'

function App() {
  return (
    <div className="App">
      <div className="background">
        <BoxApresentacao />
        <Gloria animacao={gloriaFalando}/>
        <BotaoAvancar />
      </div>
    </div>
  )
}

export default App

import "./styles/App.css";
import Gloria from "./components/Gloria";
import BoxApresentacao from "./components/BoxApresentacao";
import BotaoAvancar from "./components/BotaoAvancar";
import Roleta from "./components/Roleta/Roleta"
import PerguntaOpcoes from "./pages/PerguntaOpcoes";
import TelaRoleta from "./pages/Tela Roleta/TelaRoleta"

function App() {
  return (
    <div className="App">
      <div className="background">
        {/* <BoxApresentacao/> */}
        {/* <Gloria/> */}
        {/* <BotaoAvancar /> */}
        {/* <PerguntaOpcoes/> */}
        <TelaRoleta/>
      </div>

    </div>
  );
}

export default App;

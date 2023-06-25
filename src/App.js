import "./styles/App.css";
import Gloria from "./components/Gloria";
import BoxApresentacao from "./components/BoxApresentacao";
import BotaoAvancar from "./components/BotaoAvancar";
import Roleta from "./components/Roleta/Roleta"

function App() {
  return (
    <div className="App">
      <div className="background">
        {/* <BoxApresentacao/> */}
        {/* <Gloria/> */}
        {/* <BotaoAvancar /> */}
        {/* <PerguntaOpcoes/> */}
        <Roleta/>
      </div>

    </div>
  );
}

export default App;

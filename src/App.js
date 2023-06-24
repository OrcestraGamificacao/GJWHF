import "./styles/App.css";
import Gloria from "./components/Gloria";
import BoxApresentacao from "./components/BoxApresentacao";
import BotaoAvancar from "./components/BotaoAvancar";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Gloria />
        <BoxApresentacao/>
        <BotaoAvancar />
        {/* <PerguntaOpcoes/> */}
      </div>

    </div>
  );
}

export default App;

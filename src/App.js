import "./styles/App.css";
import BoxApresentacao from "./components/BoxApresentacao";
import BotaoAvancar from "./components/BotaoAvancar";

function App() {
  return (
    <div className="App">
      <div className="background">
        <BoxApresentacao/>
        <BotaoAvancar />
        {/* <PerguntaOpcoes/> */}
      </div>
      
    </div>
  );
}

export default App;

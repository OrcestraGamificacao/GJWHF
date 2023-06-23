import "./styles/App.css";
import Box_Apresentacao from "./components/Box_Apresentacao";
import PerguntaOpcoes from "./pages/PerguntaOpcoes"

function App() {
  return (
    <div className="App">
      <div className="background">
        <Box_Apresentacao/>
        {/* <PerguntaOpcoes/> */}
      </div>
      
    </div>
  );
}

export default App;


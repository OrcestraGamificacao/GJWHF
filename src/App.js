import "./styles/App.css";
import Box_Apresentacao from "./components/Box_Apresentacao";
import Gloria from "./components/Gloria";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Box_Apresentacao />
        <Gloria />
      </div>

    </div>
  );
}

export default App;


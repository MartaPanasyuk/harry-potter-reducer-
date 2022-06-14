import "./App.css";
import CharacterList from "./pages/Characters/CharacterList";
import HouseList from "./pages/Houses/HouseList";

function App() {
  return (
    <div className="App">
      <HouseList />
      <CharacterList />
    </div>
  );
}

export default App;

import "./App.css";
import CharacterList from "./pages/Characters/CharacterList";
import HouseList from "./pages/Houses/HouseList";
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Characters</Link>
      <br />
      <Link to="/house">Houses</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/house" element={<HouseList />} />
      </Routes>
    </div>
  );
}

export default App;

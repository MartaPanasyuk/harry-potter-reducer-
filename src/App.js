import "./App.css";
import CharacterList from "./pages/Characters/CharacterList";
import HouseList from "./pages/Houses/HouseList";
import FetchData from "./pages/FetchingData/FetchData";
import PostPage from "./pages/FetchingData/PostPage";
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Characters</Link>
      <br />
      <Link to="/house">Houses</Link>
      <br />
      <Link to="/game">Game</Link>
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
        <Route path="/game" element={<FetchData />} />
        <Route path="/got/characters/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { selectAllCharacters } from "../../store/characters/selectors";
import "./style.css";

function CharacterList() {
  const characters = useSelector(selectAllCharacters);
  return (
    <div>
      <h2> Our Character List</h2>
      {characters.map((char) => {
        return (
          <div key={char.id}>
            <h3>{char.name}</h3>
            <img src={char.image} className="img" />
            <p>{char.quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllHouses } from "../../store/houses/selectors";
import {
  selectAllHouseswithCharacters,
  selectAllCharactersFromOneHouse,
} from "../../store/selectors";
import "./style.css";

//const houses = useSelector(selectAllHouses);

function HouseList() {
  const result = useSelector(selectAllHouseswithCharacters);
  const [nameHouse, setnameHouse] = useState(result[0].name);
  const filteredChars = useSelector(selectAllCharactersFromOneHouse(nameHouse));

  console.log("filteredChars", filteredChars);
  return (
    <div>
      <h1>List og Houses:</h1>

      <label>Who lives in the house: </label>
      <select value={nameHouse} onChange={(e) => setnameHouse(e.target.value)}>
        {result.map((r) => (
          <option value={r.name}>{r.name}</option>
        ))}
      </select>

      {console.log("my result new", filteredChars)}
      {filteredChars.characters.map((filteredchar, index) => {
        return (
          // where to put the key?
          <div key={filteredchar.id}>
            <h3>{filteredchar.name}</h3>
            <img src={filteredchar.image} className="img" />
            <p>{filteredchar.quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HouseList;

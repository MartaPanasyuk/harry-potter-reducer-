import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllHouses } from "../../store/houses/selectors";
import { selectAllHouseswithCharacters } from "../../store/selectors";
import "./style.css";

//const houses = useSelector(selectAllHouses);

function HouseList() {
  const result = useSelector(selectAllHouseswithCharacters);
  const [nameHouse, setnameHouse] = useState("");
  return (
    <div>
      <h1>List og Houses:</h1>

      <label>Who lives in the house: </label>
      <select value={nameHouse} onChange={(e) => setnameHouse(e.target.value)}>
        {result.map((r) => (
          <option value={r.name}>{r.name}</option>
        ))}
      </select>

      {console.log("my result new", result)}
      {result.map((res) => {
        return (
          <div>
            <h3>{res.name}</h3>
            {res.characters.map((char) => {
              return (
                <div>
                  <h2>{char.name}</h2>
                  <img src={char.image} className="img" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default HouseList;

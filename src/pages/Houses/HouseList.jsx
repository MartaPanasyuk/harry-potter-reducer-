import React from "react";
import { useSelector } from "react-redux";
import { selectAllHouses } from "../../store/houses/selectors";
import { selectAllHouseswithCharacters } from "../../store/selectors";

function HouseList() {
  const houses = useSelector(selectAllHouses);
  const result = useSelector(selectAllHouseswithCharacters);
  return (
    <div>
      <h1>List og Houses:</h1>
      {console.log("my result", result)}
      {result.map((res) => {
        return (
          <div>
            <h3>{res.name}</h3>
            <p>{res.characters}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HouseList;

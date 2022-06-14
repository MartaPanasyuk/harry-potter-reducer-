import React from "react";
import { useSelector } from "react-redux";
import { selectAllHouses } from "../../store/houses/selectors";

function HouseList() {
  const houses = useSelector(selectAllHouses);
  return (
    <div>
      <h1>List og Houses:</h1>
      {houses.map((house) => {
        return (
          <div>
            <h3>{house.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default HouseList;

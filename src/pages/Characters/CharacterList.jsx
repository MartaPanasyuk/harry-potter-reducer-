import React from "react";
import { useSelector } from "react-redux";
import { selectAllCharacters } from "../../store/characters/selectors";
import { userFavotites } from "../../store/user/selectors";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../store/user/slice";
import { nameOfFavChar } from "../../store/selectors";
import "./style.css";

function CharacterList() {
  const dispatch = useDispatch();
  const useFavor = useSelector(userFavotites);
  const characters = useSelector(selectAllCharacters);
  const charNameFav = useSelector(nameOfFavChar);
  // console.log("charnameFav", charNameFav);

  return (
    <div>
      {" "}
      <h2> Our Character List</h2>
      <h3>List of favorites: {charNameFav.join("** ")}</h3>
      {characters.map((char) => {
        return (
          <div key={char.id}>
            <h3>{char.name}</h3>
            <img src={char.image} className="img" />
            <p>{char.quote}</p>
            <button onClick={() => dispatch(toggleFav(char.id))}>
              {" "}
              {useFavor.includes(char.id) ? "Favorite" : "Add to Favorite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;

/*

*/

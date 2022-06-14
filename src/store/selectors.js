export const selectAllHouseswithCharacters = (reduxState) => {
  const houses = [...reduxState.house.allHouses];
  const allCharacters = [...reduxState.character.allCharacters];

  const houseWithChar = houses.map((house) => {
    const charactersName = house.characters.map((charId) => {
      const thisChar = allCharacters.find(
        (character) => character.id === charId
      ).name;
      return thisChar;
    });

    return {
      id: house.id,
      name: house.name,
      characters: charactersName,
    };
  });
  return houseWithChar;
};

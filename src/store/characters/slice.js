import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCharacters: [
    {
      id: 1,
      name: "Luna Lovegood",
      quote:
        "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
      image:
        "https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png",
    },
    {
      id: 2,
      name: "Hermione Granger",
      quote:
        "Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed or worse… Expelled!",
      image: "https://i.imgur.com/EzbfOmN.jpeg",
    },
    {
      id: 3,
      name: "Bellatrix Lestrange (née Black)",
      quote: "I killed Sirius Black... I killed Sirius Black... 🎶",
      image:
        "https://static.wikia.nocookie.net/dieseldorky16/images/5/5c/6A089BD5-07DA-470E-B3B8-34C2190ABC5C.jpeg",
    },
    {
      id: 4,
      name: "Tom Riddle (Lord Voldemort)",
      quote:
        "You think I was going to use my filthy Muggle father’s name forever? I, in whose veins runs the blood of Salazar Slytherin himself, through my mother’s side?",
      image:
        "https://img.static-rmg.be/a/view/q100/w900/h600/3182793/film-voldemort-jpg.jpg",
    },
  ],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
});

export const {} = characterSlice.actions;

export default characterSlice.reducer;

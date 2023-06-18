import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

const initialState = { search: "" };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSimpsons: (state, action) => {
      state.simpsons = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setLikedDropdownOption: (state, action) => {
      state.likedDropdownOption = action.payload;
    },
    setCharacterInput: (state, action) => {
      state.characterInput = action.payload;
    },

    deleteItem: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      state.simpsons.splice(indexOf, 1);
    },

    likeToggle: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      ///toggle liked property
      state.simpsons[indexOf].liked = !state.simpsons[indexOf].liked;
    },

    itemDirection: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });

      // console.log(indexOf, id);
      state.simpsons[indexOf].characterDirection =
        state.simpsons[indexOf].characterDirection === "Left"
          ? "Right"
          : "Left";
    },
  },
});

export const {
  deleteItem,
  itemDirection,
  likeToggle,
  setCharacterInput,
  setLikedDropdownOption,
  setSearch,
  setSimpsons,
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectSimpsons = (state) => state.counter.simpsons;
export const selectSearch = (state) => state.counter.search;
export const selectLikedDropdownOption = (state) =>
  state.counter.likedDropdownOption;
export const selectCharacterInput = (state) => state.counter.characterInput;
export const selectDeleteItem = (state) => state.counter.deleteItem;

export default counterSlice.reducer;

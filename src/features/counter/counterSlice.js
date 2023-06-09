import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setSimpsons: (state, action) => {
      state.simpsons = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setLiked: (state, action) => {
      state.liked = action.payload;
    },
    setCharacterInput: (state, action) => {
      state.characterInput = action.payload;
    },
    deleteItem: (state, action) => {
      const indexOf = state.simpsons._simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      state.simpsons._simpsons.splice(indexOf, 1);
    },
  },
  likeToggle: (state, action) => {
    const indexOf = state.simpsions._simpsons.findIndex((char) => {
      return char.id === action.payload;
    });
    ///toggle liked property
    state.simpsions._simpsons[indexOf].liked =
      !state.simpsions._simpsons[indexOf].liked;
  },
});

export const {
  likeToggle,
  deleteItem,
  setCharacterInput,
  setLiked,
  setSearch,
  setSimpsons,
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectSimpsons = (state) => state.counter.simpsons;
export const selectSearch = (state) => state.counter.search;
export const selectLiked = (state) => state.counter.liked;
export const selectCharacterInput = (state) => state.counter.characterInput;

export default counterSlice.reducer;

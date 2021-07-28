import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatType } from "../../types/cat";
import { RootState } from "../store";

// Define a type for the slice state
interface AppState {
  cats: CatType[];
  isCartVisible: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
  cats: [],
  isCartVisible: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addCat: (state, action: PayloadAction<CatType>) => {
      state.cats.push(action.payload);
    },
    removeCat: (state, action: PayloadAction<CatType>) => {
      const catToRemove = action.payload;
      state.cats = state.cats.filter((c) => c.id !== catToRemove.id);
    },
    clearCart: (state) => {
      state.cats = [];
    },
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { addCat, removeCat, clearCart, toggleCart } = appSlice.actions;

export default appSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../redux/characters.slice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

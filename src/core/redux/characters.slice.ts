import { Character } from "../../models/character";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiRepository } from "../services/api.repository";

export type CharactersState = {
  characters: Character[];
};

const initialState: CharactersState = {
  characters: [],
};

export const loadCharactersAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharactersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
  },
});

export default characterSlice.reducer;

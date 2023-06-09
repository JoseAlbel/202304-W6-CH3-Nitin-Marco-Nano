import { Character } from "../../models/character";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiRepository } from "../services/api.repository";

export type CharactersState = {
  characters: Character[];
  warcry: string;
  currentCharacter: Character;
};

const initialState: CharactersState = {
  characters: [],
  warcry: "",
  currentCharacter: {} as Character,
};

export const loadCharactersAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);

export const killCharacterAsync = createAsyncThunk<
  Character,
  { repo: ApiRepository<Character>; character: Character }
>("characters/update", async ({ repo, character }) => {
  return await repo.update(character.id, { ...character, alive: false });
});

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    toggleWarCry: (state, { payload }) => ({
      ...state,
      warcry: payload.warcry,
      currentCharacter: { ...payload },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(loadCharactersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
    builder.addCase(killCharacterAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: state.characters.map((item) =>
        item.id === payload.id ? payload : item
      ),
    }));
  },
});

export default characterSlice.reducer;
export const { toggleWarCry } = characterSlice.actions;

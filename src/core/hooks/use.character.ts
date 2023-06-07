import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  killCharacterAsync,
  loadCharactersAsync,
  toggleWarCry,
} from "../redux/characters.slice";
import { ApiRepository } from "../services/api.repository";
import { useCallback, useMemo } from "react";
import { Character } from "../../models/character";

export function useCharacters() {
  const { characters, warcry, currentCharacter } = useSelector(
    (state: RootState) => state.characters
  );
  const dispatch: AppDispatch = useDispatch();

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>("http://localhost:3000/characters/"),
    []
  );

  const handleLoadCharacters = useCallback(async () => {
    dispatch(loadCharactersAsync(repo));
  }, [repo, dispatch]);

  const handleKill = async (character: Character) => {
    dispatch(killCharacterAsync({ repo, character }));
  };

  const handleWarcry = (character: Character) => {
    dispatch(toggleWarCry(character));
    setTimeout(() => {
      dispatch(toggleWarCry({ warcry: "" }));
    }, 2000);
  };

  return {
    handleLoadCharacters,
    characters,
    handleKill,
    handleWarcry,
    warcry,
    currentCharacter,
  };
}

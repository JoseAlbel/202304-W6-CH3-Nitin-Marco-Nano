import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  killCharacterAsync,
  loadCharactersAsync,
} from "../redux/characters.slice";
import { ApiRepository } from "../services/api.repository";
import { useCallback, useMemo } from "react";
import { Character } from "../../models/character";

export function useCharacters() {
  const { characters } = useSelector((state: RootState) => state.characters);
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

  return {
    handleLoadCharacters,
    characters,
    handleKill,
  };
}

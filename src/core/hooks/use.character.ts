import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { loadCharactersAsync } from "../redux/characters.slice";
import { ApiRepository } from "../services/api.repository";
import { useMemo } from "react";
import { Character } from "../../models/character";

export function useCharacters() {
  const { characters } = useSelector((state: RootState) => state.characters);
  const dispatch: AppDispatch = useDispatch();

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>("http://localhost:3000/characters/"),
    []
  );

  const handleLoadCharacters = () => {
    dispatch(loadCharactersAsync(repo));
  };

  return {
    handleLoadCharacters,
    characters,
  };
}

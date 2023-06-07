import { useEffect } from "react";
import { useCharacters } from "../hooks/use.character";
import { Card } from "./card";

export function List() {
  const { characters, handleLoadCharacters } = useCharacters();

  useEffect(() => {
    handleLoadCharacters();
  }, [handleLoadCharacters]);

  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </ul>
  );
}

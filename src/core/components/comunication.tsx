import { useCharacters } from "../hooks/use.character";

export function Comunication() {
  const { warcry, currentCharacter } = useCharacters();
  return (
    <>
      <div className={`comunications ${warcry === "" ? "" : "on"}`}>
        <p className="comunications__text display-1">{!warcry ? "" : warcry}</p>
        <img
          className="comunications__picture"
          src={`img/${
            currentCharacter?.name
              ? currentCharacter.name.toLowerCase()
              : "no-one"
          }.jpg`}
          alt={`${currentCharacter?.name} ${currentCharacter?.family} `}
        />
      </div>
    </>
  );
}

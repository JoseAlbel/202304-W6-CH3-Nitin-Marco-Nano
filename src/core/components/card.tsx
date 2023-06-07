/* eslint-disable no-prototype-builtins */
import { Character } from "../../models/character";
import { useCharacters } from "../hooks/use.character";

type PropsType = {
  item: Character;
};

export function Card({ item }: PropsType) {
  const { handleKill, handleWarcry } = useCharacters();

  function handleClick() {
    handleKill(item);
  }

  function handleCommunication() {
    if (item.alive) {
      handleWarcry(item);
    }
  }

  return (
    <li className="character col" key={item.id}>
      <div className="card character__card">
        <img
          src={`img/${item.name.toLowerCase()}.jpg`}
          alt={`${item.name} ${item.family}`}
          className={`character__picture card-img-top ${
            !item.alive ? "dead" : ""
          }`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age}</li>
              <li>
                Estado:
                {item.alive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {item.hasOwnProperty("reignyears") ? (
                <li>Años de reinado: {item.reignyears}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("weapon") ? (
                <li>Arma: {item.weapon}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("dexterity") ? (
                <li>Destreza: {item.dexterity}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("supports") ? (
                <li>Asesora a: {item.supports}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("pelotismo") ? (
                <li>Peloteo: {item.pelotismo} </li>
              ) : (
                ""
              )}
            </ul>
            <div className="character__actions">
              <button
                className="character__action btn"
                onClick={handleCommunication}
              >
                habla
              </button>
              <button className="character__action btn" onClick={handleClick}>
                muere
              </button>
            </div>
          </div>
        </div>
        {item.hasOwnProperty("reignyears") ? <i className="emoji">👑</i> : ""}
        {item.hasOwnProperty("weapon") ? <i className="emoji">🗡️</i> : ""}
        {item.hasOwnProperty("supports") &&
        !item.hasOwnProperty("pelotismo") ? (
          <i className="emoji">🗿</i>
        ) : (
          ""
        )}
        {item.hasOwnProperty("pelotismo") && item.hasOwnProperty("supports") ? (
          <i className="emoji">🛡️</i>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}

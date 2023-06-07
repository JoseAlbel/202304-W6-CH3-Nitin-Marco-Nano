import { Comunication } from "./comunication";
import { List } from "./list";

export function App() {
  return (
    <>
      <div className="app container">
        <List></List>
      </div>
      <div className="comunications">
        <Comunication></Comunication>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import Card from "./components/Card";
import pokedex from "./services/pokedex";
import "./styles.css";

const App = () => {
  const [pokes, setPokes] = useState([]);
  function mostrarPokemon() {
    pokedex.get().then((resp) => setPokes(resp.data));
  }
  useEffect(() => {
    mostrarPokemon();
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {pokes.map((pokemon) => {
        return <Card {...pokemon} />;
      })}
    </div>
  );
};

export default App;

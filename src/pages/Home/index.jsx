import { Link } from "react-router-dom";
import pokedex from "../../assets/images/pokedex.png";
import agua from "../../assets/images/agua.svg";
import fogo from "../../assets/images/fogo.svg";
import planta from "../../assets/images/planta.svg";

import "./style.css";

const Home = () => {
  return (
    <main className="container-home">
      <h1 className="titulo">
        Vamos escolher nossos Pokemons favoritos e guardá-los na Pokedéx?
      </h1>{" "}
      <img src={pokedex} className="pokedex" alt="imagem de uma pokedex" />
      <h2 className="subtitulo">Escolha o tipo</h2>{" "}
      <div className="tipos">
        <Link to={"/fogo"} className="tipoPokemon">
          <img
            src={fogo}
            className="imgTipoPokemon"
            alt="imagem do elemento tipo fogo"
          />
          <p className="nomeTipoPokemon">Fogo</p>
        </Link>
        <Link to={"/agua"} className="tipoPokemon">
          <img
            src={agua}
            className="imgTipoPokemon"
            alt="imagem do elemento tipo água"
          />
          <p className="nomeTipoPokemon">Água</p>
        </Link>
        <Link to={"/planta"} className="tipoPokemon">
          <img
            src={planta}
            className="imgTipoPokemon"
            alt="imagem do elemento tipo planta"
          />
          <p className="nomeTipoPokemon">Planta</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import "./style.css";

const Favoritos = () => {
  const { favoritosFogo, favoritosAgua, favoritosPlanta } = useGlobal();
  const srtingInicial =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  return (
    <main className="container-favoritos">
      <h2 className="titulo-container-favoritos">
        Meus Pokémons favoritos são:
      </h2>
      <div className="cardFavoritos">
        <h3 className="titulo-favoritos">Fogo</h3>
        <ul className="lista-favoritos">
          {favoritosFogo?.map((item, index) => (
            <li className="favoritos" key={index}>
              <img
                src={`${srtingInicial}${item.url.slice(34)}`}
                alt="Imagem do Pokémon"
                className="imgPokemonFavoritos"
              />
              {item.pokemon}
            </li>
          ))}
        </ul>
        <Link to="/fogo" className="botao-proximo">
          Trocar Pokémon
        </Link>
      </div>
      <div className="cardFavoritos">
        <h3 className="titulo-favoritos">Água</h3>
        <ul className="lista-favoritos">
          {favoritosAgua?.map((item, index) => (
            <li className="favoritos" key={index}>
              <img
                src={`${srtingInicial}${item.url.slice(34)}`}
                alt="Imagem do Pokémon"
                className="imgPokemonFavoritos"
              />
              {item.pokemon}
            </li>
          ))}
        </ul>
        <Link to="/agua" className="botao-proximo">
          Trocar Pokémon
        </Link>
      </div>
      <div id="ultimo-card" className="cardFavoritos">
        <h3 className="titulo-favoritos">Planta</h3>
        <ul className="lista-favoritos">
          {favoritosPlanta?.map((item, index) => (
            <li className="favoritos" key={index}>
              <img
                src={`${srtingInicial}${item.url.slice(34)}`}
                alt="Imagem do Pokémon"
                className="imgPokemonFavoritos"
              />
              {item.pokemon}
            </li>
          ))}
        </ul>
        <Link to="/planta" className="botao-proximo">
          Trocar Pokémon
        </Link>
      </div>
    </main>
  );
};

export default Favoritos;

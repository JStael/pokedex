import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fogo.svg";

import { useGlobal } from "../../context/GlobalContext";

import "./style.css";

const Fogo = () => {
  const { pokemonsFogo, favoritosFogo, setFavoritosFogo } = useGlobal();
  const [pokemonPesquisado, setPokemonPesquisado] = useState("");
  const filtroPokemon = pokemonsFogo.filter((item) =>
    item.pokemon.includes(pokemonPesquisado?.toLowerCase())
  );
  const srtingInicial =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  function removerPokemon(index) {
    let favoritosTemp = favoritosFogo;
    favoritosTemp.splice(index, 1);
    setFavoritosFogo(favoritosFogo.map((item) => item));
  }

  function verificarLista(item) {
    if (favoritosFogo.some((pokemon) => pokemon.pokemon === item.pokemon)) {
      alert("Este Pokémon já foi escolhido, por favor escolha outro.");
      return;
    }
    if (favoritosFogo.length === 3) {
      alert("Sua lista está completa!");
      return;
    }
    setFavoritosFogo([...favoritosFogo, item]);
  }

  return (
    <section className="container-fogo">
      <div className="caixa-elemento">
        <img
          src={logo}
          className="logo-elemento"
          alt="imagem do elemento Fogo"
        />
        <div className="caixa-texto-elemento">
          <p className="label-elemento-fogo">Elemento</p>
          <p className="titulo-elemento">Fogo</p>
        </div>
      </div>
      <label htmlFor="pesquisa" className="label-pesquisa">
        Escolha seus Pokémons de Fogo favoritos!
      </label>
      <input
        placeholder="Pesquisar Pokémon"
        className="campo-pesquisa"
        onChange={(e) => setPokemonPesquisado(e.target.value)}
      />
      <main className="content">
        <div className="container-card-pokemons">
          <ul className="lista-pokemon">
            {filtroPokemon?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="pokemon"
                  onClick={() => verificarLista(item)}
                >
                  <img
                    src={`${srtingInicial}${item.url.slice(34)}`}
                    alt="Imagem do Pokémon"
                    className="imgPokemon"
                  />
                  {item.pokemon}
                </li>
              );
            })}
          </ul>
        </div>
        <aside>
          <h2 className="titulo-favoritos">Pokémons favoritos tipo Fogo</h2>
          <ul className="lista-favoritos">
            {favoritosFogo?.map((item, index) => (
              <li
                className="favoritos"
                key={index}
                onClick={() => removerPokemon(index)}
              >
                <img
                  src={`${srtingInicial}${item.url.slice(34)}`}
                  alt="Imagem do Pokémon"
                  className="imgPokemon-favoritos"
                />
                {item.pokemon}
              </li>
            ))}
          </ul>
          <Link to={"/agua"} className="botao-proximo">
            Próximo
          </Link>
        </aside>
      </main>
    </section>
  );
};

export default Fogo;

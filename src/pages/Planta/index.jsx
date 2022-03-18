import { useState } from "react";
import { useGlobal } from "../../context/GlobalContext";
import logo from "../../assets/images/planta.svg";

import "./style.css";
import { Link } from "react-router-dom";

const Planta = () => {
  const { pokemonsPlanta, favoritosPlanta, setFavoritosPlanta } = useGlobal();
  const [pokemonPesquisado, setPokemonPesquisado] = useState("");
  const filtroPokemon = pokemonsPlanta.filter((item) =>
    item.pokemon.includes(pokemonPesquisado?.toLowerCase())
  );

  const srtingInicial =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  function removerPokemon(index) {
    let favoritosTemp = favoritosPlanta;
    favoritosTemp.splice(index, 1);
    setFavoritosPlanta(favoritosPlanta.map((item) => item));
  }

  function verificarLista(item) {
    if (favoritosPlanta.some((pokemon) => pokemon.pokemon === item.pokemon)) {
      alert("Este Pokémon já foi escolhido, por favor escolha outro.");
      return;
    }
    if (favoritosPlanta.length === 3) {
      alert("Sua lista está completa!");
      return;
    }
    setFavoritosPlanta([...favoritosPlanta, item]);
  }

  return (
    <section className="container-planta">
      <div className="caixa-elemento">
        <img
          src={logo}
          className="logo-elemento"
          alt="imagem do elemento Planta"
        />
        <div className="caixa-texto-elemento">
          <p className="label-elemento-planta">Elemento</p>
          <p className="titulo-elemento">Planta</p>
        </div>
      </div>
      <label htmlFor="pesquisa" className="label-pesquisa">
        Escolha seus Pokémons de Planta favoritos!
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
            {favoritosPlanta?.map((item, index) => (
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
          <Link to={"/favoritos"} className="botao-proximo">
            Próximo
          </Link>
          <Link to={"/agua"} className="botao-voltar">
            Voltar
          </Link>
        </aside>
      </main>
    </section>
  );
};

export default Planta;

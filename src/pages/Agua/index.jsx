import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/agua.svg";
import { useGlobal } from "../../context/GlobalContext";
import "./style.css";

const Agua = () => {
  const { pokemonsAgua, favoritosAgua, setFavoritosAgua } = useGlobal();
  const [pokemonPesquisado, setPokemonPesquisado] = useState("");
  const filtroPokemon = pokemonsAgua?.filter((item) =>
    item.pokemon.includes(pokemonPesquisado?.toLowerCase())
  );

  const srtingInicial =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  function removerPokemon(index) {
    let favoritosTemp = favoritosAgua;
    favoritosTemp.splice(index, 1);
    setFavoritosAgua(favoritosAgua.map((item) => item));
  }

  function verificarLista(item) {
    if (favoritosAgua.some((pokemon) => pokemon.pokemon === item.pokemon)) {
      alert("Este Pokémon já foi escolhido, por favor escolha outro.");
      return;
    }
    if (favoritosAgua.length === 3) {
      alert("Sua lista está completa!");
      return;
    }
    setFavoritosAgua([...favoritosAgua, item]);
  }

  return (
    <section className="container-agua">
      <div className="caixa-elemento">
        <img
          src={logo}
          alt="imagem do elemento Água"
          className="logo-elemento"
        />
        <div className="caixa-texto-elemento">
          <p className="label-elemento-agua">Elemento</p>
          <p className="titulo-elemento">Água</p>
        </div>
      </div>
      <label htmlFor="pesquisa" className="label-pesquisa">
        Escolhaseus Pokémons de Água favoritos!
      </label>
      <input
        placeholder="Pesquisar Pokémon"
        className="campo-pesquisa"
        onChange={(text) => setPokemonPesquisado(text)}
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
            {favoritosAgua?.map((item, index) => (
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
          <Link to={"/planta"} className="botao-proximo">
            Próximo
          </Link>
          <Link to={"/fogo"} className="botao-voltar">
            Voltar
          </Link>
        </aside>
      </main>
    </section>
  );
};

export default Agua;

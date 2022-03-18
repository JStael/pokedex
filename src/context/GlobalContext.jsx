import { createContext, useContext, useEffect, useState } from "react";
import http from "../services/http";

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [pokemonsFogo, setPokemonsFogo] = useState([]);
  const [pokemonsAgua, setPokemonsAgua] = useState([]);
  const [pokemonsPlanta, setPokemonsPlanta] = useState([]);
  const [favoritosFogo, setFavoritosFogo] = useState([]);
  const [favoritosAgua, setFavoritosAgua] = useState([]);
  const [favoritosPlanta, setFavoritosPlanta] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    http
      .get("type/10")
      .then((res) => montarPokemon(res.data.pokemon, setPokemonsFogo))
      .catch((err) => console.error(err));

    http
      .get("type/11")
      .then((res) => montarPokemon(res.data.pokemon, setPokemonsAgua))
      .catch((err) => console.error(err));

    http
      .get("type/12")
      .then((res) => montarPokemon(res.data.pokemon, setPokemonsPlanta))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFavoritos([...favoritos, { agua: favoritosAgua }]);
  }, [favoritosAgua]);

  useEffect(() => {
    setFavoritos([...favoritos, { fogo: favoritosFogo }]);
  }, [favoritosFogo]);

  useEffect(() => {
    setFavoritos([...favoritos, { planta: favoritosPlanta }]);
  }, [favoritosPlanta]);

  function montarPokemon(pokemons, tipoPokemon) {
    let pokemonsTemp = [];
    pokemons.forEach((item) => {
      let urlTemp = item.pokemon.url.substring(0, item.pokemon.url.length - 1);
      let pokemon = {
        pokemon: item.pokemon.name,
        url: urlTemp + ".png",
      };
      pokemonsTemp.push(pokemon);
    });
    tipoPokemon(pokemonsTemp);
  }

  return (
    <GlobalContext.Provider
      value={{
        pokemonsFogo,
        pokemonsAgua,
        pokemonsPlanta,
        favoritosFogo,
        setFavoritosFogo,
        favoritosAgua,
        setFavoritosAgua,
        favoritosPlanta,
        setFavoritosPlanta,
        favoritos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobal };

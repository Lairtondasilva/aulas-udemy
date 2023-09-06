import { useContext, useEffect } from "react";
import { PokemonsContext } from "../../contexts/pokemonProvider/context";
import { loadingPokemons } from "../../contexts/pokemonProvider/actions";

export default function PokemonList() {
  const pokemonsContext = useContext(PokemonsContext);
  const { pokemonsState, pokemonsDispatch } = pokemonsContext;

  useEffect(() => {
    loadingPokemons(pokemonsDispatch);
  }, [pokemonsDispatch]);

  return (
    <>
      <h1>pokemons</h1>
      {console.log(pokemonsState.loading)}
      {pokemonsState.loading && (
        <strong> A lista de pokemon está sendo carregada...</strong>
      )}
      {pokemonsState.pokemons.map((pokemon, index) => (
        <div key={index}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </>
  );
}

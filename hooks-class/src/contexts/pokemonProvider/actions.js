import * as types from "./types.js";

export const loadingPokemons = async (dispatch) => {
  dispatch({ type: types.POKEMONS_LOADING });

  setTimeout(async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );

    const responseData = await response.json();

    const pokemons = responseData.results;

    dispatch({ type: types.POKEMONS_SUCCESS, payload: pokemons });
  }, 5000);
};

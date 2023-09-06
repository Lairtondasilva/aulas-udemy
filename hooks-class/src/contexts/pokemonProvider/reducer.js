import * as  types from './types.js'

export const pokemonReducer = (state, action)=>{
    switch (action.type){
        case types.POKEMONS_SUCCESS: {
            return {...state, pokemons: action.payload, loading:false}
        }
        case types.POKEMONS_LOADING:{
            console.log("carregando...")
            return {...state, loading: true}
        }
    }

    console.log("Não encontrei os pokemons");

    return {...state};
}
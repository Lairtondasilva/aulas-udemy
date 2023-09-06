import { useReducer } from 'react';
import {PokemonsContext} from './context.js';
import P from 'prop-types'
import { data } from './data.js';
import { pokemonReducer } from './reducer';

export const PokemonsProvider = ({children}) =>{
    const [pokemonsState, pokemonsDispatch] = useReducer(pokemonReducer, data);
    return <PokemonsContext.Provider value={{pokemonsState, pokemonsDispatch}}>{children}</PokemonsContext.Provider>
};

PokemonsProvider.propTypes = {
    children: P.node.isRequired,
};
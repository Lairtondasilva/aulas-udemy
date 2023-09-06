import PokemonList from '../../components/PokemonList';
import { PokemonsProvider } from '../../contexts/pokemonProvider';
import './App.css';


export default function App(){

  return(
    <PokemonsProvider>
      <PokemonList/>
    </PokemonsProvider>
  )
}
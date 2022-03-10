import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const { id } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({})

  const apiData = {
      url: 'https://pokeapi.co/api/v2/',
      type: 'pokemon'
  }

  const { url, type } = apiData;
  const apiUrl = `${url}${type}/${id}`;

  useEffect(() => {
    setLoaded(false);
    
    fetch(apiUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
          setPokemon(pokemon)
          console.log(pokemon);
        })
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, [id])
  
  return (
    <div className="pokemon-container">
      <h1>Pokemon #{pokemon.id}</h1>
      
      {!loaded ? (
        <Loader />
      ) : (
        <PokemonCard pokemon={pokemon}/>
      )}
    </div>
  )
}

export default Pokemon
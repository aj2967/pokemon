import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const { id } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({})
  const [bio, setBio] = useState()

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
            handleSpecies(id);
        })
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, [id])

  const handleSpecies = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await res.json();

        console.log(data);
        setBio(data);
  }
  
  return (
    <div className="pokemon-container">
      <h1>Pokemon #{pokemon.id}</h1>
      
      {!loaded ? (
        <Loader />
      ) : (
        <PokemonCard pokemon={pokemon} bio={bio} />
      )}
    </div>
  )
}

export default Pokemon
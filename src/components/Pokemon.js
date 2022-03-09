import { useState, useEffect } from "react";
import loader from '../components/Loader';
import { useParams } from "react-router-dom" 
import Loader from "../components/Loader";

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
        .then((data) => {
            return data.json()
        })
        .then((pokemon) => {
            console.log(pokemon);
            setPokemon(pokemon)
        })
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, [])
  
  return (
    <div className="">
      <h1>#{pokemon.id} - {pokemon.name}</h1>
      
      {!loaded ? (
        <Loader />
      ) : (
        <div className="card">
        <div className="img-container">
          <img src={pokemon.sprites.home.front_default} alt={pokemon.name} />
        </div>
        
        <div className="detail-1">
          <div className="bio">
            <h3>Bio</h3>
            <p>Bio</p>
          </div>

        </div>
      </div>
      )}
    </div>
  )
}

export default Pokemon